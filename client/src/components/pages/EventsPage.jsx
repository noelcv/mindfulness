import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../appLevel/Header/Header';
import SideBar from '../appLevel/SideBar/SideBar';
import EventList from '../Eventing/EventList';
import EventForm from '../Eventing/EventForm';
import aura_spinner from '../../assets/svg/aura_spinner.svg'
import './CommonPageStyles.css';
import './EventsPage.css'
import '../../App.css'
import { getEvents } from '../../Services/eventing';
import { UserAuth } from '../../AuthContext/AuthContext';

const EventsPage = () => {
  //HOOKS
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = UserAuth();

  useEffect(() => {
    setIsLoading(true)
    getEvents().then((res) => setEvents(res));
    setIsLoading(false)
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-holder">
        <div className='sidebar-wrapper'>
        <SideBar/>
        </div>
        <div className="events-page-container">
        { user?.displayName ? 
          <div className="events-wrapper">
            { isLoading ?
                <div className="spinner-container"> 
                  <h2 className="loader">Loading...</h2>
                </div> :
            <div className="events-list-wrapper">
              <EventList id="list" events={events} setEvents={setEvents} />
            </div> 
            }
              
            <div className="form-wrapper">
              <EventForm setEvents={setEvents} />
            </div> 
          </div>: <>
            
          { isLoading ?
                <div className="spinner-container"> 
                  <img className="spinner" src={aura_spinner} alt="loading events..." />
                </div> :
            <div className="events-list-wrapper-solo">
              <EventList id="list" events={events} setEvents={setEvents} />
            </div>
            }
          </>} 
        </div>
      </div>
    </div>
  );
};

export default EventsPage;