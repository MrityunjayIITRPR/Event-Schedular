import { createSlice } from "@reduxjs/toolkit";

const eventModalSlice = createSlice({
  name: "eventModal",
  initialState: {
    showEventModal: false,
    eventList: (() => {
      try {
        const storedEvents = localStorage.getItem("eventList");
        const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
        if (!Array.isArray(parsedEvents)) {
          return [];
        }
        return parsedEvents;
      } catch (error) {
        return [];
      }
    })(),
    selectedEvent: null,
  },
  reducers: {
    setShowEventModal: (state, action) => {
      state.showEventModal = action.payload;
    },
    addEvent: (state, action) => {
      if (!Array.isArray(state.eventList)) {
        state.eventList = [];
      }
      state.eventList.push(action.payload);
      console.log("Updated eventList:", state.eventList);
      localStorage.setItem("eventList", JSON.stringify(state.eventList));
      state.selectedEvent = null;
      state.showEventModal = false;
    },
    updateEvent: (state, action) => {
      const index = state.eventList.findIndex(
        (evt) => evt.id === action.payload.id
      );
      if (index >= 0) {
        state.eventList[index] = action.payload;
        localStorage.setItem("eventList", JSON.stringify(state.eventList));
      }
      state.selectedEvent = null;
    },
    deleteEvent: (state, action) => {
      state.eventList = state.eventList.filter(
        (evt) => evt.id !== action.payload.id
      );
      localStorage.setItem("eventList", JSON.stringify(state.eventList));
      state.selectedEvent = null;
    },
    setselectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
  },
});

export const {
  setShowEventModal,
  addEvent,
  updateEvent,
  deleteEvent,
  setselectedEvent,
} = eventModalSlice.actions;
export default eventModalSlice.reducer;
