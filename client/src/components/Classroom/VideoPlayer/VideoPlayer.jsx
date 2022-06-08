import React from 'react';
import './VideoPlayer.css';
import CamButton from '../CamButton/CamButton';
import MicButton from '../MicButton/MicButton';
import PhoneButton from '../PhoneButton/PhoneButton';

const VideoPlayer = () => {
  return (
    <div className="videoplayer-container">
      <div className="video-controls">
        <CamButton />
        <MicButton />
        <PhoneButton/>        
      </div>
    </div>
  )
}

export default VideoPlayer