import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './ClassroomPage.css';
import './CommonPageStyles.css';

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, []); //eslint-disable-line

  return (
    <>
      <video
        playsInline
        muted
        autoPlay
        ref={ref}
        className="videoplayer-container"
      />
    </>
  );
};

const DEV = "http://localhost:3002";
const PROD = 'https://mindfulnessp2p.herokuapp.com';
const BASE_URL = PROD;

const ClassroomPage = () => {
  //HOOKS for classroom state management
  const [peers, setPeers] = useState([]); //this will track the peers for rendering purposes
  const socketRef = useRef(); //will handle the sockets communications for signaling
  const userVideo = useRef();
  const peersRef = useRef([]); //this will be used to track and handle the RTC Connections
  const userStream = useRef();

  const currentPath = useLocation();
  const roomId = currentPath.pathname.split('/').pop();
  console.log('roomId:', roomId);

  const videoConstraints = {
    video: {
      width: { ideal: 1920, max: 7680 },
      height: { ideal: 1080, max: 4320 },
    },
    audio: true,
  };

  useEffect(() => {
    socketRef.current = io.connect(BASE_URL);

    navigator.mediaDevices
      .getUserMedia(videoConstraints)
      .then((stream) => {
        userVideo.current.srcObject = stream;
        userStream.current = stream; //

        socketRef.current.emit('joiningRoom', roomId);

        socketRef.current.on(
          'everybodyInTheHouse',
          (participantsInClassroom) => {
            console.log(participantsInClassroom, 'participantsInClassroom');
            const peersArr = []; //array for rendering

            participantsInClassroom.forEach((participantId) => {
              const peer = generateNewPeer(
                participantId,
                socketRef.current.id,
                stream
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
            console.log(peersArr, 'peersArr before setting setPeers');
            setPeers(peersArr);
          }
        );

        socketRef.current.on('userJoinedClassroom', (data) => {
          const peer = addNewPeer(data.signal, data.callerId, stream);

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
  }, []);

  const generateNewPeer = (userToSignal, callerId, stream) => {
    const peer = new Peer({
      initiator: true, //so that I can inform the others that I joined
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('sendingSignalToBackEnd', {
        userToSignal,
        callerId,
        signal,
      });
    });

    return peer;
  };

  const addNewPeer = (newSignalIncoming, callerId, stream) => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    //we signal upon the newly incoming signal
    //so when we receive an offer we send our signal back to the callerID
    peer.on('signal', (signal) => {
      socketRef.current.emit('returningSignalToTheBackEnd', {
        signal,
        callerId,
      });
    });

    //we are accepting the signal and fire the socket event above
    peer.signal(newSignalIncoming);

    return peer;
  };

  const exitCall = () => {
    userStream.current.getVideoTracks()[0].enabled = false;
    window.location.replace('/events');
  };

  const toggleCam = () => {
    const videoTrack = userStream.current
      .getVideoTracks()
      .find((track) => track.kind === 'video');
    if (videoTrack.enabled) {
      videoTrack.enabled = !videoTrack.enabled;
    } else {
      videoTrack.enabled = true;
    }
    console.log(videoTrack.enabled, 'myCam');
  };
 
  const toggleMic = () => {
    const audioTrack = userStream.current
      .getTracks()
      .find((track) => track.kind === 'audio');
    if (audioTrack.enabled) {
      audioTrack.enabled = !audioTrack.enabled;
    } else {
      audioTrack.enabled = true;
    }
    console.log(audioTrack.enabled, 'myMic');
  };

  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />

        <div className="dashboard-container">
          <div className="videos-wrapper">
            <div className="video">
              <video
                playsInline
                muted
                ref={userVideo}
                autoPlay
                className="videoplayer-container"
              />
              <>
                <div className="video-controls">
                  <button className="cam-input-btn" onClick={toggleCam}>
                    📸
                  </button>
                  <button className="mic-input-btn" onClick={toggleMic}>
                    🎙️
                  </button>
                  <button className="phone-input-btn" onClick={exitCall}>
                    ☎️
                  </button>
                </div>
              </>

              {peers.map((peer, index) => {
                if (index === 0) {
                return (
                    <Video
                      key={peer.peerId}
                      peer={peer.peer}
                      className="videoplayer-container"
                    />
                );
                } else {
                  return (
                    <></>
                  )
                }              
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;
