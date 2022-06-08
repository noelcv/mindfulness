import React from 'react';
import './ProfileBtn.css';
import YogaProfile from './profile.svg';

const ProfileBtn = () => {
  return ( <div className="profile-btn btn-section-sidebar">
  <img src={YogaProfile} width="22em" height="22em" alt="button-to-go-to-profile"/>
  <h2 className="btn-text-sidebar">Profile</h2>

</div>
)
}

export default ProfileBtn