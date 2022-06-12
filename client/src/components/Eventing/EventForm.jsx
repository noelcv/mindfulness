import React from 'react'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { currentDate } from '../../utils/utils';
import { postEvent } from '../../utils/ApiService'
import './EventForm.css';

const EventForm = ({setEvents}) => {
  //HOOKS
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [roomId, setRoomId] = useState(''); //this will grab the callID for the video calls
  const [isPending, setIsPending] = useState(false);
  
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const id = uuid();
    setLocation(id)
    console.log(id, 'id from submitHandler');
    console.log(location, 'location from submitHandler');
    const newEvent = { title, date, location };
    if (newEvent.date > currentDate){
        setIsPending(true);
        await postEvent(newEvent);
        setEvents((existingEvents) => [...existingEvents, newEvent]);
        e.target.reset();
       
        setIsPending(false);
    } else {
      window.alert(`The date you picked belongs to the past. Please, choose a new date`);
    }
  };
  
  
  
  return (
    <>
      <div className="form-container">
        <h3>Create a new Event</h3>
        <form className="form" onSubmit={submitHandler}> 
        <div className="form-group">
        <div className="group-form-wrapper">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          </div>
          
          <div className="group-form-wrapper">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            min={currentDate}
            type="datetime-local"
            required
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          </div>
          
          {/* <div className="group-form-wrapper">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          </div> */}
          </div>
          <div className="group-form-wrapper submit-wrapper">
          {!isPending && (
            <button className="submit-btn" type="submit">
              Create
            </button>
          )}
          {isPending && (
            <button className="submit-btn-pending" type="submit">
              Creating event...
            </button>
          )}
          </div>
        </form>
      </div>
    </>
  );
}

export default EventForm