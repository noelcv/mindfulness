import { currentDate, sortEvents } from './utils';

const DEV = "http://localhost:3002/api";
const PROD = 'https://mindfulnessp2p.herokuapp.com/api';
const BASE_URL = PROD;

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