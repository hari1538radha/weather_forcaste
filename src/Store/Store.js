import educationDetails from "./Slice/Slice.js";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  educationinfo: educationDetails,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
