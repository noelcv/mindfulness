import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import EventList from '../Eventing/EventList';
import EventForm from '../Eventing/EventForm';
import './CommonPageStyles.css';
import './EventsPage.css'
import { getEvents } from '../../utils/ApiService';

const EventsPage = () => {
  //HOOKS

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((res) => setEvents(res));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className="dashboard-container">
          <div className="events-wrapper">
          <EventForm setEvents={setEvents} />
        
          <EventList id="list" events={events} setEvents={setEvents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
