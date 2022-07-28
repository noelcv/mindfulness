import React, {useEffect, useRef} from 'react';
import './VideoPlayer.css';
import CamButton from '../CamButton/CamButton';
import MicButton from '../MicButton/MicButton';
import PhoneButton from '../PhoneButton/PhoneButton';

export const VideoPlayer = () => {
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


export const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on('stream', (stream) => {
      if (ref.current) {
      ref.current.srcObject = stream;
      }
    });
  }, []); //eslint-disable-line

  return (
    <>
      <video
        playsInline
        autoPlay
        ref={ref}
        className="videoplayer-container"
      />
    </>
  );
};

export default VideoPlayer