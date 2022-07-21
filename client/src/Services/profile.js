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
    const updatedProfile = await fetch(`${BASE_URL}/user/${user.uid}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await updatedProfile;
  } catch (err) {
    console.log("Error at editProfile Service: ", err);
  }
}