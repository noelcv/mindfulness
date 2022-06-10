import React from 'react'
import { useState } from 'react';


const EventForm = () => {
  //HOOKS
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [roomId, setRoomId] = useState('');
  const [isPending, setIsPending] = useState(false);
  
  return (
    <div>EventForm</div>
  )
}

export default EventForm