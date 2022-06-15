import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './CommonPageStyles.css';


const ProfilePage = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className='dashboard-container profile-container'>
        <div className='profile-inner-container'>
          <h4>My name is</h4>
          <h2 contenteditable="true" className="profile-title">Noel Vieira</h2>
          
          <h4>I am based in</h4>
          <h2 contenteditable="true" className="profile-title">Luxembourg</h2>
          
          <h4>I am a </h4>
          <h2 contenteditable="true" className="profile-title">Yoga Teacher</h2>
          
          <h4>With an Expertise in</h4>
          <h2 contenteditable="true" className="profile-title">AcroYoga, Kundalini and Sound Baths</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;