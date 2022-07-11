import { currentDate, sortEvents } from './utils';
import { BACKEND_CONNECTION } from './envSwitch';

const BASE_URL = BACKEND_CONNECTION + '/api';

export const postEvent = (addOne) => {
  return fetch(`${BASE_URL}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(addOne),
  })
    .catch((err) => console.log(err));
}

export const getEvents = () => {
  return fetch(`${BASE_URL}/events`)
    .then(res => res.json())
    .then(data => data.filter((key) => key.date > currentDate))
    .then(filtered => sortEvents(filtered))
    .catch((err) => console.log(err));
};