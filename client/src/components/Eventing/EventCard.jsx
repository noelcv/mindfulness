import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import './EventForm.css';


const EventCard = ({ event }) => {
  
  
  let goTo = useNavigate();
  const goToEvent = () => {
    let eventPath = '../classroom';
    goTo(eventPath, {replace: true});
  }
  
  
  return (
    <>
      <div className="event-container">
        <div className="event-date-container">
          <h3 className="event-date">{moment(event.date).format(`Do MMM`)}</h3>
        </div>
        <div className="event-content-container">
          <div className="event-content-wrapper">
            <div className="event-title-wrapper">
              <h3 className="event-title">{event.title}</h3>
            </div>
            <div className="event-details-container">
              <p className="event-detail event-time">
                {moment(event.date).format('hh:mm a - MMMM Do, YYYY')}
              </p>
              <p className="event-detail event-location">{event.location}</p>
            </div>
          </div>
          <div className="go-to-event-container">
            <button className="go-to-event-btn submit-btn" onClick={goToEvent}>Start Call</button>
            <button className="go-to-event-btn submit-btn" onClick={goToEvent}>Go to Classroom</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
