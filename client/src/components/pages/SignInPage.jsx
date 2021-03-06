import React, { useEffect } from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import  { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';
import './CommonPageStyles.css';

const SignInPage = () => {
  
  const { googleSignIn, user } = UserAuth();
  const goTo = useNavigate();
  
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    if (user != null) {
      goTo('/events');
    }
  }, []) //eslint-disable-line
  
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className='dashboard-container'>
          <div className="sign-in-container">
          <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default SignInPage;
