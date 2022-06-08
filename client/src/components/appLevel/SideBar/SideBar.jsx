import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import ProfileBtn from './ProfileBtn/ProfileBtn';
import EventsBtn from './EventsBtn/EventsBtn';
import ClassroomBtn from './ClassroomBtn/ClassroomBtn';
import SettingsBtn from './SettingsBtn/SettingsBtn';


const SideBar = () => {
  return (
    <div className="sidebar-container">
    <Link to="/profile"><ProfileBtn/></Link>
    <Link to="/events"><EventsBtn/></Link>
    <Link to="/classroom"><ClassroomBtn/></Link>
    <Link to="/settings"><SettingsBtn/></Link>
    </div>
  )
}

export default SideBar