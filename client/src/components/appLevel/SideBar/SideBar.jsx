import React from 'react'
import './SideBar.css';
import ProfileBtn from './ProfileBtn/ProfileBtn';
import EventsBtn from './EventsBtn/EventsBtn';
import ClassroomBtn from './ClassroomBtn/ClassroomBtn';
import SettingsBtn from './SettingsBtn/SettingsBtn';


const SideBar = () => {
  return (
    <div className="sidebar-container">
    <ProfileBtn/>
    <EventsBtn/>
    <ClassroomBtn/>
    <SettingsBtn/>
    </div>
  )
}

export default SideBar