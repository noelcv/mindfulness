import React from 'react';
import { useEffect, useRef, useState } from 'react';
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
   return(
      <div> App
    </div>
  );
};

export default App;
