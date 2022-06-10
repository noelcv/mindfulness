import React from 'react'
import { useState } from 'react';
import { currentDate } from '../../utils/utils';


const EventForm = () => {
  //HOOKS
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [roomId, setRoomId] = useState('');
  const [isPending, setIsPending] = useState(false);
  
   return (
    <>
      <div className="form-container">
        <h3>Create a new Event</h3>
        <form className="form"> 
          <label for="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label for="date">Date</label>
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
          <label for="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            required
            onChange={(e) => {
              setVenue(e.target.value);
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