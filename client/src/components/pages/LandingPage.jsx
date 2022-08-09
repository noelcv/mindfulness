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
          <h2>HERO</h2>
          <button className="button-scroll" onClick={() => scrollHandler(mainRef)}>Go to main</button>
        </div>
        
        <div className="land l-main" ref={mainRef}>
          <h2>MAIN</h2>
          <button className="button-scroll" onClick={() => scrollHandler(footerRef)}>Go to footer</button>
        </div>
        <div className="land l-footer" ref={footerRef}>
        <h2>FOOTER</h2>
        <button className="button-scroll" onClick={() => scrollHandler(heroRef)}>Go to Hero</button>

        </div>
    </div>
  )
}

export default LandingPage