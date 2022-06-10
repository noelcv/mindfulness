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



const App = () => {
  
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        
      </div>
    </div>
  );
};

export default App;
