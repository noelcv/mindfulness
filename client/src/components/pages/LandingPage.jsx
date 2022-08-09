import React, {useRef, useEffect, useState} from 'react';
import "./LandingPage.css"
import SignInPage from './SignInPage';

const LandingPage = () => {
  
  const heroRef = useRef()
  const mainRef = useRef()
  const footerRef = useRef()
  
  return (
    <div className="app">
     <div className="landing-header">
      <h1>Mindfulness</h1>
      <SignInPage />
     </div>
     <div className="land l-hero" ref={heroRef}></div>
     <div className="land l-main" ref={mainRef}></div>
     <div className="land l-footer" ref={footerRef}></div>
      </div>
  )
}

export default LandingPage