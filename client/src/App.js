import React from 'react';
import Header from './components/appLevel/Header/Header';
import SideBar from './components/appLevel/SideBar/SideBar';
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
