import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import './CommonPageStyles.css';

const SignInPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className='dashboard-container'>
          <h2 className="page-title">SignIn Page</h2>
        </div>
    
      </div>
    </div>
  );
};

export default SignInPage;
