import { currentDate, sortEvents } from './utils';

export const postEvent = (addOne) => {
  return fetch('http://localhost:3010/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(addOne),
  })
    .catch((err) => console.log(err));
}

export const getEvents = () => {
  return fetch('http://localhost:3010/events')
    .then(res => res.json())
    .then(data => data.filter((key) => key.date > currentDate))
    .then(filtered => sortEvents(filtered))
    .catch((err) => console.log(err));
};