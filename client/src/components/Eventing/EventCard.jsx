import React from 'react';
import moment from 'moment';
import './EventForm.css'; 

const EventCard = ({event}) => {
  return (
    <>
      <div className="event-container">
        <div className="event-date-container">
          <h3 className="event-date" >{moment(event.date).format(`Do MMM`)}</h3>
      
        </div>
        <div className="event-content-container">
          <h3 className="event-title">{event.title}</h3>
          <div className="event-details-container">
          <p className="event-detail event-time">{moment(event.date).format('hh:mm a - MMMM Do, YYYY')}</p>
          <p className="event-detail event-location">{event.location}</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default EventCard;
