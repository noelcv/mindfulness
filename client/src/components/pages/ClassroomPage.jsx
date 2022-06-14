import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import Dashboard from '../appLevel/Dashboard/Dashboard';
import CamButton from '../Classroom/CamButton/CamButton';
import MicButton from '../Classroom/MicButton/MicButton';
import PhoneButton from '../Classroom/PhoneButton/PhoneButton';
import './ClassroomPage.css';
import './CommonPageStyles.css';

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {

    props.peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

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
  
  
  useEffect(() => {
    const socket = io.connect('http://localhost:3002');
    const videoConstraints = {
      video: {
        width: { ideal: 1920, max: 7680 },
        height: { ideal: 1080, max: 4320 },
      },
      audio: true,
    };
    
    
    navigator.mediaDevices
      .getUserMedia(videoConstraints)
      .then((stream) => {
        userVideo.current.srcObject = stream;
        userStream.current = stream; //TODO: check if this can be removed
        
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
        
        
      })
      .catch((err) => {
        console.log(err);
      });


    socket.on('leftCall', () => {
      
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

  // const exitCall = () => {
  //   setLeftCall(true);
  //   if (connectionRef.current) connectionRef.current.destroy();
  //   window.location.reload();
  // };

  // const toggleCam = () => {
  //   const videoTrack = stream
  //     .getTracks()
  //     .find((track) => track.kind === 'video');
  //   if (videoTrack.enabled) {
  //     videoTrack.enabled = !videoTrack.enabled;
  //   } else {
  //     videoTrack.enabled = true;
  //   }
  // };

  // const toggleMic = () => {
  //   const audioTrack = stream
  //     .getTracks()
  //     .find((track) => track.kind === 'audio');
  //   if (audioTrack.enabled) {
  //     audioTrack.enabled = !audioTrack.enabled;
  //   } else {
  //     audioTrack.enabled = true;
  //   }
  //   console.log(audioTrack.enabled, 'myMic');
  // };

  
  return (
    
     
    
  );
};

export default ClassroomPage;
