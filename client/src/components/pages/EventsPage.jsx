import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import EventList from '../Eventing/EventList';
import EventForm from '../Eventing/EventForm';
import './CommonPageStyles.css';
import './EventsPage.css'
import { getEvents } from '../../utils/ApiService';
import { UserAuth } from '../../AuthContext/AuthContext';

const EventsPage = () => {
  //HOOKS
  const [events, setEvents] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    getEvents().then((res) => setEvents(res));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <SideBar />
        <div className="events-page-container">
          <div className="events-wrapper">
            <div className="events-list-wrapper">
              <EventList id="list" events={events} setEvents={setEvents} />
            </div>
              { user?.displayName ? 
            <div className="form-wrapper">
              <EventForm setEvents={setEvents} />
            </div> : <></>} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
