import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import Header from './components/appLevel/Header/Header';
import SideBar from './components/appLevel/SideBar/SideBar';
import Dashboard from './components/appLevel/Dashboard/Dashboard';
import CamButton from './components/Classroom/CamButton/CamButton';
import MicButton from './components/Classroom/MicButton/MicButton';
import PhoneButton from './components/Classroom/PhoneButton/PhoneButton';
// import { Counter } from './features/counter/Counter';
import './App.css';

const socket = io.connect('http://localhost:3002');

const App = () => {
  
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
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
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
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
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
      console.log(data, 'data line 70');
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
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />

        <div className="classBoard-container">
          <div className="videoplayer-container">
            {stream && (
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className="video"
              />
            )}
            <div className="video-controls">
              {/* <CamButton className="cam-button" />
          <MicButton className="mic-button" />
          <PhoneButton className="phone-button" /> */}
            </div>
          </div>
          <div className="video">
            {callTaken && !leftCall ? (
              <video
                playsInline
                ref={peerVideo}
                autoPlay
                className="videoplayer-container"
              />
            ) : null}
          </div>
        </div>

        <div className="myId">
          <input
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={myId} className="copy-to-clipboard">
            <button>Copy Id</button>
          </CopyToClipboard>
          <input
            type="text"
            value={callId}
            onChange={(e) => setCallId(e.target.value)}
          />
          <div className="call-btn-container">
            {callTaken && !leftCall? (
              <button> Leave Call</button>
            ) : (
              <button onClick={() => callUser(callId)}>Call</button>
            )}
            {callId}
          </div>
        </div>
        <div>
          {incomingCall && !callTaken ? (
            <div className="incoming-caller-container">
              <h2>{name} calling...</h2>
              <button onClick={joinCall}>Join Call</button>
            </div>
          ) : null}
        </div>
        
        
      </div>
    </div>
  );
};

export default App;
