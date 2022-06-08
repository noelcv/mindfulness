import React from 'react';
import './MicButton.css';
import RetroMic from './mic.svg'

const MicButton = () => {
  return ( <div className="mic-input-btn">
    <img src={RetroMic} width="22em" height="22em" alt="button-to-turn-on-and-off-microphone"/>
  </div>
  )
};

export default MicButton;
