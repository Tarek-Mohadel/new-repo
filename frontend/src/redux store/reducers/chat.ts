import { createAction, createReducer } from "@reduxjs/toolkit";

export const setChat = createAction("chat/set", (state) => {
  return {
    payload: state,
  };
});

export const initialState = { show: false, user: { name: "", email: "" } };

const chatReducer = createReducer(initialState, (builder) => {
  builder.addCase(setChat, (state, action) => {
    return action.payload;
  });
});

export default chatReducer;
