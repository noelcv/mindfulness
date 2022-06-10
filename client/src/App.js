import React from 'react';
import { useEffect, useRef, useState } from 'react';

import io from 'socket.io-client';
import Header from './components/appLevel/Header/Header';
import SideBar from './components/appLevel/SideBar/SideBar';
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
