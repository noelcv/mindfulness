import React from 'react';

import Header from './components/appLevel/Header/Header';
import SideBar from './components/appLevel/SideBar/SideBar';
import Dashboard from './components/appLevel/Dashboard/Dashboard';

import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return ( 
    <div className="App">
        <Header/>
        <div className="app-holder">
        <SideBar/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
