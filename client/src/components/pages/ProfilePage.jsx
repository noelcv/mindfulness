import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './ProfilePage.css';
import buymeacoffee from '../../assets/buymeacoffee.svg'

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
          <div className='profile-detail name-card'>
            <h4>My name is</h4> 
            <h2 className="display-name" contentEditable="true">{user?.displayName} Noel</h2>
          </div>
          
          <div className='profile-detail location-card'>
            <h4>I am based in</h4>
            <h2  className="display-location" contentEditable="true">Luxembourg</h2>
          </div>
          
          <div className='profile-detail job-card'>
            <h4>I am a </h4>
            <h2 className="display-job" contentEditable="true">Yoga Teacher</h2>
          </div>
          
          <div className='profile-detail expertise-card'>
            <h4>With an Expertise in</h4>
            <ul className="expertise-list" contentEditable="true">
              <li>AcroYoga</li> 
              <li>Kundalini</li>
              <li>Sound Baths</li>
            </ul>
          </div>
          
          <div className='profile-detail payment-card'>
            <img src={buymeacoffee} alt="buy-me-a-coffee" width="180px" height="75px"></img>
            <a href="buymeacoffee.com/" className="buy-me-a-coffee-link" contentEditable="true">http://buymeacofee.com/xpto</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;