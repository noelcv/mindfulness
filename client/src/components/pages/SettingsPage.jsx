import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import Dashboard from '../appLevel/Dashboard/Dashboard'
import './CommonPageStyles.css';

const SettingsPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className='dashboard-container'>
          <h2 className="page-title">Settings</h2>
        </div>
    
      </div>
    </div>
  );
};

export default SettingsPage;
