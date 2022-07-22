import { BACKEND_CONNECTION } from './../utils/envSwitch';

const BASE_URL = BACKEND_CONNECTION + '/api';

export const createProfile = async (user) => {
  try {
    const newUser = await fetch(`${BASE_URL}/user/create`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await newUser;
  } catch (err) {
    console.log("Error at createProfile Service: ", err)
  }
}


export const editProfile = async (user) => {
  try {
    if (user.id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with PUT call 
    
    const updatedProfile = await fetch(`${BASE_URL}/user/${user.id}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log(updatedProfile, "updatedProfile at editProfile Service")
    return await updatedProfile;
  }
  } catch (err) {
    console.log("Error at editProfile Service: ", err);
  }
}

export const getProfileById = async (userId) => {
  try {
    const userProfile = await fetch(`${BASE_URL}/user/${userId}`);
    return await userProfile.json();
  } catch (err) {
    console.log("Error at getProfileById Service: ", err);
  }
}