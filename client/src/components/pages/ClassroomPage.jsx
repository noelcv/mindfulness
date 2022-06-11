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

const socket = io.connect('http://localhost:3002');

const ClassroomPage = () => {
  //HOOKS for classroom state management
  const [myId, setMyId] = useState('');
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [caller, setCaller] = useState('');
  const [incomingCall, setIncomingCall] = useState(false);
  const [callerSignal, setCallerSignal] = useState();
  const [callTaken, setCallTaken] = useState(false);
  const [callId, setCallId] = useState('');
  const [leftCall, setLeftCall] = useState(false);

  const myVideo = useRef();
  const peerVideo = useRef();
  const connectionRef = useRef();

  const videoConstraints = {
    video: {
      width: { ideal: 1920, max: 1920 },
      height: { ideal: 1080, max: 1080 },
    },
    audio: false,
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(videoConstraints)
      .then((stream) => {
        setStream(stream);
        if (myVideo.current) myVideo.current.srcObject = stream;
        // console.log(myVideo.current.srcObject, 'myyyyyyyy');
        console.log(stream, 'from useEffect');
        console.log(myVideo, 'my videeo');
      })
      .catch((err) => {
        console.log(err);
      });

    socket.on('me', (id) => {
      setMyId(id);
    });

    socket.on('callOffer', (data) => {
      setIncomingCall(true);
      setLeftCall(false);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
    
    socket.on('leftCall', () => {
      setLeftCall(true);
      console.log('left call on the frontend')
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    //needs to match the backend socket (index.js)
    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signal: data,
        from: myId,
        name: name,
      });
    });

    peer.on('stream', (stream) => {
      if (peerVideo.current) peerVideo.current.srcObject = stream;
    });

    socket.on('callTaken', (signal) => {
      console.log(signal, 'signal line 84');
      setCallTaken(true);
      setLeftCall(false); //in case the state changes set it to false when taking the call
      peer.signal(signal);  
    });
    
    connectionRef.current = peer;
  };

  const joinCall = () => {
    setCallTaken(true);
    const remoteStream = stream;
    const peer = new Peer({
      stream: remoteStream,
    });

    peer.on('signal', (data) => {
      socket.emit('joinCall', { signal: data, to: caller });
    });

    peer.on('stream', (stream) => {
      if (peerVideo.current) peerVideo.current.srcObject = stream;
    });
    
    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const exitCall = () => {
    setLeftCall(true);
    
    if (connectionRef.current) {
      console.log(connectionRef.current, 'connRef BEFORE')
      connectionRef.current.destroy();
      console.log(connectionRef.current, 'connRef AFTER')
    }
    window.location.reload();  
  };

  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />

        <div className="dashboard-container classroom-dashboard">
          <div className="forms-wrapper">
            <div className="myId">
              <h3 className="input-label">Username</h3>
              <input
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={myId}>
                <button className="copy-btn call-btn">copy ID</button>
              </CopyToClipboard>
              <h3 className="input-label"> Insert Caller ID</h3>
              <input
                type="text"
                value={callId}
                onChange={(e) => setCallId(e.target.value)}
              />
              <div className="call-btn-container">
                {callTaken && !leftCall ? (
                  <button className="exit-call-btn call-btn" onClick={exitCall}>
                    {' '}
                    Leave Call
                  </button>
                ) : (
                  <button
                    className="call-user-btn call-btn"
                    onClick={() => callUser(callId)}
                  >
                    Call
                  </button>
                )}
                {callId}
              </div>
            </div>
            <div className="videos-wrapper">
              <div>
                {incomingCall && !callTaken ? (
                  <div className="incoming-caller-container">
                    <h4>{name} calling...</h4>
                    <button
                      className="call-user-btn call-btn"
                      onClick={joinCall}
                    >
                      Join Call
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="video">
              {stream && (
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  className="videoplayer-container video-settings"
                />
              )}
            </div>
            <div className="video">
              {callTaken && !leftCall ? (
                <video
                  playsInline
                  ref={peerVideo}
                  autoPlay
                  className="videoplayer-container peer-container"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;
