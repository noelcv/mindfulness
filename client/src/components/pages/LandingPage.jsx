import React, {useRef, useEffect, useState} from 'react';
import "./LandingPage.css"
import SignInPage from './SignInPage';
import { scrollHandler } from '../../utils/scrollHandler';
import Video from '../../assets/svg/video.svg';
import Payment from '../../assets/svg/payment.svg';
import Foam from '../../assets/svg/foam.svg';
import Calendar from '../../assets/svg/calendar-compressed.svg';



const LandingPage = () => {
  
  const heroRef = useRef()
  const mainRef = useRef()
  const footerRef = useRef()
  
  return (
    <div className="app">
        <div className="landing-header">
          <div className="header-packshot">
            <h1>Mindfulness</h1>
            <h2>Tools for Professionals</h2>
          </div>
          <div className='signin-container'>
            <SignInPage />
          </div>
        </div>
    
        <div className="land l-hero" ref={heroRef}>
          <div className="hero-box">
            <div className="box-topic" onMouseLeave={() => scrollHandler(mainRef)}>
              <p className="hero-title"></p>
              <p className="hero-text">
                Mindfulness is a one-stop-shop for freelance coaches, Wellness therapists and Mental Health professionals.</p>
                <p className="hero-text">Start your own global studio today</p>
                <SignInPage />
            </div>
          </div>
        </div>
        
        <div className="land l-main" ref={mainRef}>
          <div className="box-wrapper">
            <div className="box-topic event-box">
              <div className="calendar_svg">
                <img src={Calendar} alt="calendar"/>
              </div>
              <h4 className="box-title">Create Events</h4>
              <p className="description">Publish your therapy session, 1-on-1 coaching or private yoga class.
              Keep an agenda of your upcoming events and convert more, by allowing your clients to easily sign up.
              </p>
            </div>
            <div className="box-topic video-box">
              <div className="video_svg">
                
                <img src={Video} alt="calendar"/>
              </div>
              
              <h4 className="box-title">Host Video Sessions</h4>
              <p className="description">Create safe spaces for sharing. Mindfulness allows you to communicate directly to your client (p2p). We do not keep track of the content of your video calls, which means enhanced privacy for your communications.</p>
            </div>
            <div className="box-topic payment-box" onMouseLeave={() => scrollHandler(footerRef)}>
              <div className="payment_svg">
                <img src={Payment} alt="calendar"/>
              </div>
              <h4 className="box-title">Accept payments</h4>
              <p className="description">Provide a Payment Link or connect a Stripe account and immediately start collecting payments upon your clients sign up for your events.</p>

            </div>
          </div>
        </div>
        <div className="land l-footer" ref={footerRef}>
        <h2>FAQ</h2>
        
        <button className="button-scroll" onMouseEnter={() => scrollHandler(heroRef)}>Go to Top</button>

        </div>
    </div>
  )
}

export default LandingPage