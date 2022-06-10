import React from 'react'
import { useState } from 'react';
import { currentDate } from '../../utils/utils';
import { postEvent } from '../../utils/ApiService'


const EventForm = ({setEvents}) => {
  //HOOKS
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [roomId, setRoomId] = useState(''); //this will grab the callID for the video calls
  const [isPending, setIsPending] = useState(false);
  
  
  const submitHandler = async (e) => {
    e.preventDefault();

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
        </form>
      </div>
    </>
  );
}

export default EventForm