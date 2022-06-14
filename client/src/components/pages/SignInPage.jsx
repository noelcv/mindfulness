import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import  { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../AuthContext/AuthContext'
import './SignInPage.css';

import './CommonPageStyles.css';

const SignInPage = () => {
  
  const { googleSignIn } = UserAuth();
  
  
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
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
          <h2 className="page-title">Sign In</h2>
          <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default SignInPage;
