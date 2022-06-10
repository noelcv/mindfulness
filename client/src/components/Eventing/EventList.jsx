import React from 'react';
import { sortEvents } from '../../utils/utils';
import EventCard from './EventCard';

const EventList = ({ events }) => {
  
  const sortedEvents = sortEvents(events);
  return (
    <>
      <div id="list">
        {sortedEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </>
  );
};

export default EventList;
