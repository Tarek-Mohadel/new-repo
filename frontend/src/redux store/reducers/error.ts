import { createReducer, createAction } from "@reduxjs/toolkit";


export const setError = createAction("error/set", (message: string)=>{
  return {
    payload: message
  }
});

const initialState = "";

const errorReducer = createReducer(initialState, (builder) => {
  builder.addCase(setError, (state, action) => {
    return action.payload
  });
});

export default errorReducer