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
    const updatedProfile = await fetch(`${BASE_URL}/user/${userProfile.id}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userProfile),
    });
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

export const editSettings = async (userSettings) => {
  try {
    const updatedSettings = await fetch(`${BASE_URL}/user/${userSettings.id}/settings/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSettings),
    });
    return await updatedSettings.json();
  } catch (err) {
    console.log("Error at editSettings Service: ", err);
  }
}