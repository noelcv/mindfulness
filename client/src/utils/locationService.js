export const API_endpoint = `https://api.openweathermap.org/data/2.5/onecall?`;


export const getLocation = async () => {
  try {
  if (navigator.geolocation) {
    let locationPermission = await navigator.permissions.query({name: 'geolocation'});
    if (locationPermission.state === 'granted') {
      const location = navigator.geolocation.getCurrentPosition();
      return location;
    }
  }
  } catch (err) {
    console.log('Error at getLocation Service:', err);
  }
}