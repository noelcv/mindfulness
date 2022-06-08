import React from 'react';
import './ClassBoard.css'
import VideoPlayer from '../VideoPlayer/VideoPlayer';


const ClassBoard = () => {
  return (
  <div className="classBoard-container">
  <VideoPlayer/>
  <VideoPlayer/>
  <VideoPlayer/>
  <VideoPlayer/>
  </div>
  );
};

export default ClassBoard;
