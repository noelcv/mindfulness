import React, { useEffect } from 'react';
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
      goTo('/events')
    } else {
      goTo('/')
    }
  }, [user]) //eslint-disable-line
  
  
  return (
      <>
          <GoogleButton onClick={handleGoogleSignIn} />
      </>
  );
};

export default SignInPage;
