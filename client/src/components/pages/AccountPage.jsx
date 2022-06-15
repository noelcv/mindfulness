import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './CommonPageStyles.css';
import { UserAuth } from '../../AuthContext/AuthContext';
import SignOutBtn from '../appLevel/SideBar/SignOutBtn/SignOutBtn';

const AccountPage = () => {
  const { logout, user } = UserAuth;
  
  const signOutHandler = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  }
  
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className='dashboard-container'>
        <div className="sign-in-container">
          <h2 className="page-title">Welcome, {user?.displayName}</h2>
          
          <SignOutBtn onClick={signOutHandler}/>
          
          </div>
          
        </div>
    
      </div>
    </div>
  );
};

export default AccountPage;