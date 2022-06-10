export const postEvent = (addOne) => {
  return fetch('http://localhost:3010/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(addOne),
  })
    .catch((err) => console.log(err));
}