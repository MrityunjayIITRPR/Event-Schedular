import dayjs from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowEventModal, setselectedEvent } from "../utils/eventModalSlice";
import { setSelectedDay } from "../utils/daymonthSlice";
import { useState, useEffect } from "react";
const Day = ({ day, rowindex }) => {
  const [dayEvents, setDayEvents] = useState([]);
  const dispatch = useDispatch();
  const filteredEvents = useSelector((store) => store.eventModal?.eventList);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);
  const currentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowindex === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${currentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          dispatch(setSelectedDay(day));
          dispatch(setShowEventModal(true));
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => dispatch(setselectedEvent(evt))}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
