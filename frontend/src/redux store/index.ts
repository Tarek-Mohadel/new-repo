import { configureStore } from "@reduxjs/toolkit";

import errorReducer from "./reducers/error";
import chatReducer from "./reducers/chat";

const store = configureStore({
  reducer: {
    error: errorReducer,
    chat: chatReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
