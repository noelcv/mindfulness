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
       
      })
      .catch((err) => {
        console.log(err);
      });


    socket.on('leftCall', () => {
      
    });
  }, []);

  

  




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
