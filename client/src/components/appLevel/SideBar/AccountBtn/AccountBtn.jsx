import React from 'react'
import './AccountBtn.css';
import Lotus from './lotus.svg';

const AccountBtn = () => {
  return ( <div className="account-btn btn-section-sidebar">
  <img className="btn-img-sidebar" src={Lotus} width="22em" height="22em" alt="button-to-go-to-sign-in-page"/>
  <h2 className="btn-text-sidebar">Account</h2>

</div>
)
}

export default AccountBtn