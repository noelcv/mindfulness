import React from 'react'
import './HomeBtn.css';
import Lotus from './lotus.svg';

const HomeBtn = () => {
  return ( <div className="home-btn btn-section-sidebar">
  <img className="btn-img-sidebar" src={Lotus} width="22em" height="22em" alt="button-to-go-to-sign-in-page"/>
  <h2 className="btn-text-sidebar">Home</h2>

</div>
)
}

export default HomeBtn