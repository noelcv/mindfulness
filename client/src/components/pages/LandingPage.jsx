import React, {useRef, useEffect, useState} from 'react';
import "./LandingPage.css"
import SignInPage from './SignInPage';
import { scrollHandler } from '../../utils/scrollHandler';
import Video from '../../assets/svg/video.svg';
import Payment from '../../assets/svg/payment.svg';
import Calendar from '../../assets/svg/calendar-compressed.svg';



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
          <div className="box-topic" onMouseLeave={() => scrollHandler(mainRef)}>
            <h3 className="hero-title">Tools for Professionals</h3>
            <p className="hero-text">
              Mindfulness is a one-stop-shop for freelance Mindfulness, Wellness and Mental Health professionals.</p>
              <p className="hero-text">Sign up and enter your own global studio</p>
          </div>
        </div>
        
        <div className="land l-main" ref={mainRef}>
          <div className="box-wrapper">
            <div className="box-topic event-box">
              <div className="calendar_svg">
                <img src={Calendar} alt="calendar"/>
              </div>
              <h4>Create Events</h4>
              <p className="description">Publish your therapy session, 1-on-1 coaching or private yoga class.
              Keep an agenda of your upcoming events and convert more, by allowing your clients to easily sign up.
              </p>
            </div>
            <div className="box-topic video-box">
              <div className="video_svg">
                
                <img src={Video} alt="calendar"/>
              </div>
              
              <h4>Host Video Sessions</h4>
              <p className="description">Create safe spaces for sharing. Mindfulness allows you to communicate directly to your client (p2p). We do not keep track of the content of your video calls, which means enhanced privacy for your communications.</p>
            </div>
            <div className="box-topic payment-box" onMouseLeave={() => scrollHandler(footerRef)}>
              <div className="payment_svg">
                <img src={Payment} alt="calendar"/>
              </div>
              <h4>Accept payments</h4>
              <p className="description">Provide a Payment Link or connect a Stripe account and immediately start collecting payments upon your clients sign up for your events.</p>

            </div>
          </div>
        </div>
        <div className="land l-footer" ref={footerRef}>
        <h2>FOOTER</h2>
        <button className="button-scroll" onMouseEnter={() => scrollHandler(heroRef)}>Go to Hero</button>

        </div>
    </div>
  )
}

export default LandingPage