import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './CommonPageStyles.css';

import { UserAuth } from '../../AuthContext/AuthContext';
import SignOutBtn from '../appLevel/SideBar/SignOutBtn/SignOutBtn';


const ProfilePage = () => {
  
  const { user } = UserAuth;
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className='dashboard-container profile-container'>
        <div className='profile-inner-container'>
          <h4>My name is</h4>
          
          <h2 className="profile-title">{user?.displayName}</h2>
          
          <h4>I am based in</h4>
          <h2  className="profile-title">Luxembourg</h2>
          
          <h4>I am a </h4>
          <h2 className="profile-title">Yoga Teacher</h2>
          
          <h4>With an Expertise in</h4>
          <h2 className="profile-title">AcroYoga, Kundalini and Sound Baths</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;