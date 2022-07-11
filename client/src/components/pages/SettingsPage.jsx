import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import { UserAuth } from '../../AuthContext/AuthContext';
import SignInPage from './SignInPage';
import linkedin from '../../assets/linkedin.svg'
import './SettingsPage.css';

const SettingsPage = () => {
  
  const { user } = UserAuth();
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        { user?.displayName ? 
        <div className='dashboard-container profile-container'>
        <div className='profile-inner-container'>
          <div className='profile-detail email-card'>
            <h4>Email</h4> 
            <p className="display-email">{user?.email}</p>
          </div>
          
          <div className='profile-detail phone-card'>
            <h4>Phone Number</h4>
            <p className="display-phone-number">{user?.phoneNumber}</p>
          </div>
          
          <div className='profile-detail job-card'>
            <h4>Billing Address</h4>
            <p className="display-job"></p>
          </div>
          
          <div className='profile-detail expertise-card'>
            <h4>VAT</h4>
          </div>
          
          <div className='profile-detail payment-card'>
            <img src={linkedin} alt="linkedin" width="100px" height="100px"/>
            <a href="linkedin.com/" className="linkedin-link">https://www.noelvieira.com</a>
          </div>
          </div>
        </div>
        : <SignInPage /> 
      }
      </div>
    </div>
  );
};

export default SettingsPage;
