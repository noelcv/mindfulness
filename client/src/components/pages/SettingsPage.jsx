import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import { UserAuth } from '../../AuthContext/AuthContext';
import linkedin from '../../assets/linkedin.svg'
import './SettingsPage.css';

const SettingsPage = () => {
  
  const { user } = UserAuth;
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className='dashboard-container profile-container'>
        <div className='profile-inner-container'>
          <div className='profile-detail name-card'>
            <h4>Email</h4> 
            <p className="display-email" contentEditable="true">{user?.displayName} noelguiavieira@gmail.com</p>
          </div>
          
          <div className='profile-detail location-card'>
            <h4>Phone Number</h4>
            <p className="display-phone-number" contentEditable="true"> +352 621 420 678</p>
          </div>
          
          <div className='profile-detail job-card'>
            <h4>Billing Address</h4>
            <p className="display-job" contentEditable="true">Yoga Teacher</p>
          </div>
          
          <div className='profile-detail expertise-card'>
            <h4>VAT</h4>
            <ul className="expertise-list" contentEditable="true">
              <li>AcroYoga</li> 
              <li>Kundalini</li>
              <li>Sound Baths</li>
            </ul>
          </div>
          
          <div className='profile-detail payment-card'>
            <img src={linkedin} alt="linkedin" width="100px" height="100px"/>
            <a href="linkedin.com/" className="linkedin-link" contentEditable="true">https://www.noelvieira.com</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
