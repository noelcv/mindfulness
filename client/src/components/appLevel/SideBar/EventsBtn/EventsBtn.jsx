import React from 'react'
import './EventsBtn.css';
import Lotus from '../../../../assets/svg/lotus.svg';

const EventsBtn = () => {
  return ( <div className="events-btn btn-section-sidebar">
  <img className="btn-img-sidebar" src={Lotus} width="22em" height="22em" alt="button-to-go-to-events"/>
  <h2 className="btn-text-sidebar">Events</h2>

</div>
)
}

export default EventsBtn