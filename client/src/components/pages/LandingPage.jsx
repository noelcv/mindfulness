import React, {useRef, useEffect, useState} from 'react';
import "./LandingPage.css"
import SignInPage from './SignInPage';
import { scrollHandler } from '../../utils/scrollHandler';

const LandingPage = () => {
  
  const heroRef = useRef()
  const mainRef = useRef()
  const footerRef = useRef()
  

  
  return (
    <div className="app">
        <div className="landing-header">
          <h1>Mindfulness</h1>
          
          <div className='signin-container'>
            <SignInPage />
          </div>
        </div>
    
        <div className="land l-hero" ref={heroRef}>
          <button className="button-scroll" onClick={() => scrollHandler(mainRef)}>Hello Worlds</button>

        </div>
        
        <div className="land l-main" ref={mainRef}>
          
        </div>
        <div className="land l-footer" ref={footerRef}>
          
        </div>
    </div>
  )
}

export default LandingPage