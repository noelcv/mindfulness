import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './SideBar.css';
import '../../../App.css';
import ProfileBtn from './ProfileBtn/ProfileBtn';
import EventsBtn from './EventsBtn/EventsBtn';
import ClassroomBtn from './ClassroomBtn/ClassroomBtn';
import SettingsBtn from './SettingsBtn/SettingsBtn';
import ClassBoard from '../../Classroom/ClassBoard/ClassBoard';
import SignInBtn from './SigninBtn/SigninBtn';
import { UserAuth } from '../../../AuthContext/AuthContext';
import SignOutBtn from './SignOutBtn/SignOutBtn';
import SignInPage from '../../pages/SignInPage';

const SideBar = () => {
  const { user, logOut } = UserAuth();

  const signOutHandler = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sidebar-container">
    
      <Link to="/profile" className="sidebar-link">
        <ProfileBtn />
      </Link>
      <Link to="/events" className="sidebar-link">
        <EventsBtn />
      </Link>
      <Link to="/classroom" className="sidebar-link">
        <ClassroomBtn />
      </Link>
      <Link to="/settings" className="sidebar-link">
        <SettingsBtn />
      </Link>

      {user?.displayName ? (
        <button
          className="btn-section-sidebar sidebar-link sign-out-btn"
          onClick={signOutHandler}
        >
          Sign Out
        </button>
      ) : (
        <SignInPage />
      )}

      <Outlet />
    </div>
  );
};

export default SideBar;
