import React from 'react'
import './SignOutBtn.css';
import Lotus from './lotus.svg';

const SignOutBtn = () => {
  return ( <div className="signin-btn btn-section-sidebar">
  <img className="btn-img-sidebar" src={Lotus} width="22em" height="22em" alt="button-to-go-sign-out"/>
  <h2 className="btn-text-sidebar">Sign out</h2>

</div>
)
}

export default SignOutBtn