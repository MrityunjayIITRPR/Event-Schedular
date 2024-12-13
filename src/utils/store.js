import { configureStore } from "@reduxjs/toolkit";
import dayMonthSlice from "./daymonthSlice";
import eventModalSlice from "./eventModalSlice";

const store = configureStore({
  reducer: {
    dayMonth: dayMonthSlice,
    eventModal: eventModalSlice,
  },
});
export default store;
