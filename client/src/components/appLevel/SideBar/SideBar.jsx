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
    <Link to="/profile" className="sidebar-link"><ProfileBtn/></Link>
    <Link to="/events" className="sidebar-link"><EventsBtn/></Link>
    <Link to="/classroom" className="sidebar-link"><ClassroomBtn/></Link>
    <Link to="/settings" className="sidebar-link"><SettingsBtn/></Link>
    </div>
  )
}

export default SideBar