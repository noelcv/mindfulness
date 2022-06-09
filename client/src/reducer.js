import { combineReducers } from "redux";

import { CLASSROOM, EVENTS, PROFILE, SETTINGS } from "./actions";

export const initialState = {};

export const reducer = (state = initialState, action) => {
  if (action.type === PROFILE) {};
  if (action.type === EVENTS) {};
  if (action.type === CLASSROOM) {};
  if (action.type === SETTINGS) {};
  return state;
}


// import { CLASSROOM, EVENTS, PROFILE, SETTINGS } from "./actions";

// export const initialState = {};

// export const reducer = (state = initialState, action) => {
//   if (action.type === PROFILE) {};
//   if (action.type === EVENTS) {};
//   if (action.type === CLASSROOM) {};
//   if (action.type === SETTINGS) {};
//   return state;
// }