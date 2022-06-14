import React from 'react'
import './SignInBtn.css';
import Lotus from './lotus.svg';

const SignInBtn = () => {
  return ( <div className="signin-btn btn-section-sidebar">
  <img className="btn-img-sidebar" src={Lotus} width="22em" height="22em" alt="button-to-go-to-sign-in-page"/>
  <h2 className="btn-text-sidebar">Sign in</h2>

</div>
)
}

export default SignInBtn