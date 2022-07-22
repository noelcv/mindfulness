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


export const editProfile = async (userProfile) => {
  try {
      console.log(userProfile, 'userProfile inside userProfile Service');
      console.log(userProfile.id, 'userProfile.id inside userProfile Service');
      // Yes, it's a valid ObjectId, proceed with PUT call 
    const updatedProfile = await fetch(`${BASE_URL}/user/${userProfile.id}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userProfile),
    });
    console.log(updatedProfile, "updatedProfile at editProfile Service")
    return await updatedProfile.json();
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