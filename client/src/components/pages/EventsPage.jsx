import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import EventList from '../Eventing/EventList';
import EventForm from '../Eventing/EventForm';
import './CommonPageStyles.css';
import { getEvents } from '../../utils/ApiService';

const EventsPage = () => {
  //HOOKS

  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    getEvents()
      .then((res) => setEvents(res));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className="dashboard-container">
          <h2 className="page-title">Events</h2>
          <div className="events-list">
          <EventList id="list" events={events} setEvents={setEvents} />
        </div>
          <EventForm setEvents={setEvents} />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
