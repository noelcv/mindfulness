import React from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import EventList from '../Eventing/EventList';
import EventForm from '../Eventing/EventForm';
import './CommonPageStyles.css';


const EventsPage = () => {
  
  
  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className="dashboard-container">
        <h2 className="page-title">Events</h2>
        
        </div>
      </div>
    </div>
  );
};

export default EventsPage;