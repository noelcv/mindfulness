import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';


const EventCard = ({ event }) => {
  
  let goTo = useNavigate();
  const goToEvent = () => {
    let eventPath = `../classroom/${event.id}`;
    goTo(eventPath, {replace: true});
  }
  
  
  return (
    <>
      <div className="">  
        <div className="event-card">
          <h3 className="week-day">{moment(event.date).format(`ddd`)}</h3>
          <div className="event-content-wrapper">
            <div className="event-title-wrapper">
              <h3 className="event-title">{event.title}</h3>
            </div>
            <div className="">
              <p className="event-detail event-time">
                {moment(event.date).format('HH:mm a - MMMM Do, YYYY')}
              </p>
              <p className="event-detail event-location">{event.location}</p>
            </div>
          </div>
          <div className="go-to-event-container">
            <button className="go-to-event-btn submit-btn" onClick={goToEvent}>Go to Classroom</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
