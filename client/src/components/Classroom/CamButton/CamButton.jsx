import React from 'react';
import './CamButton.css';
import Polaroid from './polaroid.svg';

const CamButton = () => {
  return ( <div type="button" className="cam-input-btn">
    <img src={Polaroid} alt="button-to-turn-on-and-off-camera"/>
   </div>
    

  )
};

export default CamButton;
