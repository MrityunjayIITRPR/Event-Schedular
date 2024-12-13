import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const dayMonthSlice = createSlice({
  name: "dayMonth",
  initialState: {
    monthIndex: dayjs().month(),
    selectedDay: dayjs(),
  },
  reducers: {
    setMonthIndex: (state, action) => {
      state.monthIndex = action.payload;
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});
export const { setMonthIndex, setSelectedDay } = dayMonthSlice.actions;
export default dayMonthSlice.reducer;
