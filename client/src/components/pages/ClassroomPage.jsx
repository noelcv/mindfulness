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

  useEffect(() => {
    const videoConstraints = {
      video: {
        width: { ideal: 1920, max: 7680 },
        height: { ideal: 1080, max: 4320 },
      },
      audio: false,
    };
    navigator.mediaDevices
      .getUserMedia(videoConstraints)
      .then((stream) => {
        setStream(stream);
        if (myVideo.current) myVideo.current.srcObject = stream;
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
    if (connectionRef.current) connectionRef.current.destroy();
    window.location.reload();
  };

  const toggleCam = () => {
    console.log('ahaha')
    const videoTrack = stream
      .getTracks()
      .find((track) => track.kind === 'video');
    if (videoTrack.enabled) {
      videoTrack.enabled = !videoTrack.enabled;
    } else {
      videoTrack.enabled = true;
    }
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
                <>
                  <video
                    playsInline
                    muted
                    ref={myVideo}
                    autoPlay
                    className="videoplayer-container video-settings"
                  />
                  <>
                    <div className="controls-container">
                    <button className="cam-input-btn" onClick={toggleCam}>📸</button>
                      <MicButton />
                      <PhoneButton />
                    </div>
                  </>
                </>
              )}
            </div>
            <div className="video">
              {callTaken && !leftCall ? (
                <>
                  <video
                    playsInline
                    ref={peerVideo}
                    autoPlay
                    className="videoplayer-container peer-container"
                  />
                  <>
                    <div className="controls-container">
                      <button onClick={toggleCam}>📹</button>
                      <MicButton />
                      <PhoneButton />
                    </div>
                  </>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;
