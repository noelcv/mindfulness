import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './ProfilePage.css';
import buymeacoffee from '../../assets/buymeacoffee.svg'
import { UserAuth } from '../../AuthContext/AuthContext';


const ProfilePage = () => {
  
  const { user } = UserAuth();
    
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
      { user?.displayName && user?.photoURL ? 
        <div className='dashboard-container profile-container'>
        <div className='profile-inner-container'>
          <div className='profile-detail name-card'>
            <img src={user?.photoURL} className="profile-pic" referrerPolicy="no-referrer"  alt="profilePic" />
            <h2 className="display-name">{user?.displayName}</h2>
          </div>
          <div className='profile-detail email-card'>
            <h4>Email</h4> 
            <p className="display-email">{user?.email}</p>
          </div>
          <div className='profile-detail location-card'>
            <h4>I am based in</h4>
            <textarea  className="display-location" placeholder="Where are you?"></textarea>
          </div>
          
          <div className='profile-detail job-card'>
            <h4>I am a </h4>
            <textarea className="display-job" placeholder="What is your job?"></textarea>
          </div>
          
          <div className='profile-detail expertise-card'>
            <h4>With an Expertise in</h4>
            <ul className="expertise-list">
              <textarea placeholder="List your expertise"></textarea>
            </ul>
          </div>
          
          <div className='profile-detail payment-card'>
            <img src={buymeacoffee} alt="buy-me-a-coffee" width="180px" height="75px"></img>
            <textarea href="buymeacoffee.com/" className="buy-me-a-coffee-link" placeholder="Set a payment link"></textarea>
          </div>
          </div>
        </div>
        : 
          <h2 className="infoUser">This page is only available for authenticated users. Please sign in to continue or browse the Events section</h2>
          }
      </div>
    </div>
  );
};

export default ProfilePage;