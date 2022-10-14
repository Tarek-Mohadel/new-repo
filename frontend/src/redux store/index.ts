import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

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

const store = configureStore({
  reducer: {
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
