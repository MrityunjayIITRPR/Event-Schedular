import React from "react";
import dayjs from "dayjs";
import calender_logo from "../assets/calendar_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setMonthIndex } from "../utils/daymonthSlice";
const CalendarHeader = () => {
  const monthIndex = useSelector((store) => store.dayMonth.monthIndex);
  const dispatch = useDispatch();
  const handlePrevMonth = () => {
    dispatch(setMonthIndex(monthIndex - 1));
  };
  const handleNextMonth = () => {
    dispatch(setMonthIndex(monthIndex + 1));
  };
  const resetCalender = () => {
    dispatch(setMonthIndex(dayjs().month()));
  };
  return (
    <header className="px-4 py-2 flex items-center">
      <img
        src={calender_logo}
        alt="calendar"
        className="mr-2 w-6 h-6 md:h-12 md:w-12"
      />
      <h1 className="mr-5 text-xl md:10">Calendar</h1>
      <button
        onClick={resetCalender}
        className="border border-gray-400 rounded-2xl py-1 px-2 mr-2 md:py-2 md:mr-5 md:px-5"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <svg
            className="w-4 h-4 text-gray-700 dark:text-white mx-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <svg
            className="w-4 h-4 text-gray-700 dark:text-white mx-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </span>
      </button>
      <h2 className="ml-1 text-gray-700 font-bold md:text-xl md:ml-3">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
