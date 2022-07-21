import { BACKEND_CONNECTION } from './envSwitch';

const BASE_URL = BACKEND_CONNECTION + '/api';

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