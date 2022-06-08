import React from 'react';
import './PhoneButton.css';
import Phone from './phone.svg'

const PhoneButton = () => {
  return ( <div className="phone-input-btn">
  <img src={Phone} width="22em" height="22em" alt="button-to-turn-on-and-off-microphone"/>
</div>
)
};

export default PhoneButton;
