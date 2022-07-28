import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Video } from '../Classroom/VideoPlayer/VideoPlayer';
import io from 'socket.io-client';
import { BACKEND_CONNECTION } from '../../utils/envSwitch';
import { avSettings } from '../../utils/avSettings';
import Header from '../appLevel/Header/Header';
import { toggleMic, toggleCam, exitCall, generateNewPeer, addNewPeer } from '../../Services/video';
import './ClassroomPage.css';
import './CommonPageStyles.css';

const BASE_URL = BACKEND_CONNECTION;

const ClassroomPage = () => {
  //HOOKS for classroom state management
  const [peers, setPeers] = useState([]); //this will track the peers for rendering purposes
  const socketRef = useRef(); //will handle the sockets communications for signaling
  const userVideo = useRef();
  const peersRef = useRef([]); //this will be used to track and handle the RTC Connections
  const userStream = useRef();

  const currentPath = useLocation();
  const roomId = currentPath.pathname.split('/').pop();

  useEffect(() => {
    socketRef.current = io.connect(BASE_URL);

    navigator.mediaDevices
      .getUserMedia(avSettings)
      .then((stream) => {
        userVideo.current.srcObject = stream;
        userStream.current = stream; //

        socketRef.current.emit('joiningRoom', roomId);

        socketRef.current.on(
          'everybodyInTheHouse',
          (participantsInClassroom) => {
            const peersArr = []; //array for rendering purposes

            participantsInClassroom.forEach((participantId) => {
              const peer = generateNewPeer(
                participantId,
                socketRef.current.id,
                stream,
                socketRef
              );

              peersRef.current.push({
                peerId: participantId,
                peer,
              });

              //the peer itself plus the peerId will be used when rendering
              peersArr.push({
                peerId: participantId,
                peer,
              });
            });
            setPeers(peersArr);
          }
        );

        socketRef.current.on('userJoinedClassroom', (data) => {
          const peer = addNewPeer(data.signal, data.callerId, stream, socketRef);

          peersRef.current.push({
            peerId: data.callerId,
            peer,
          });

          //this object will contain the peer plus the callerId
          const peerObj = {
            peer,
            peerId: data.callerId,
          };

          setPeers((participants) => [...participants, peerObj]);
        });

        socketRef.current.on('theBackEndReceivedTheReturnedSignal', (data) => {
          const targetPeer = peersRef.current.find(
            (target) => target.peerId === data.id
          );
          targetPeer.peer.signal(data.signal);
        });

        socketRef.current.on('leftCall', (id) => {
          const peerObj = peersRef.current.find(
            (target) => target.peerId === id
          );
          if (peerObj) {
            peerObj.peer.destroy();
          }

          /*filter out the participant that is leaving and use that
          to update the state that will be used to re-render to everybody else*/
          const peers = peersRef.current.filter(
            (target) => target.peerId !== id
          );
          peersRef.current = peers;
          setPeers(peers);
        });
      })
      .catch((err) => {
        console.log(err, 'error at useEffect');
      });
  }, []); //eslint-disable-line

  return (
    <div className="app">
      <div className="header-wrapper-video">
        <Header />
      </div>
          <div className="videos-wrapper">
            <div className="my-video">
              <video
                playsInline
                muted
                ref={userVideo}
                autoPlay
                className="videoplayer-container"
              />
              
                <div className="video-controls">
                  <button className="cam-input-btn video-btn" onClick={()=> toggleCam(userStream)}>
                    📸
                  </button>
                  <button className="mic-input-btn video-btn" onClick={()=> {toggleMic(userStream)}}>
                    🎙️
                  </button>
                  <button className="phone-input-btn video-btn" onClick={()=> exitCall(userStream, socketRef)}>
                    ☎️
                  </button>
                </div>
            </div>

              {peers.map((peer, index) => {
                if (index === 0) {
                return (
                  <div className="peer-video" key={peer.peerId}>
                    <Video
                      key={peer.peerId}
                      peer={peer.peer}
                      className="videoplayer-container"
                    />
                    </div>
                );
                } else {
                  return (
                    <></>
                  )
                }              
              })}
          </div>
        </div>
      );
};

export default ClassroomPage;
