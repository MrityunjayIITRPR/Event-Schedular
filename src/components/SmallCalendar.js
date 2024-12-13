import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getMonth } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { setMonthIndex } from "../utils/daymonthSlice";
import { setSelectedDay } from "../utils/daymonthSlice";
const SmallCalendar = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const daySelected = useSelector((store) => store?.dayMonth?.selectedDay);
  const monthIndex = useSelector((store) => store.dayMonth.monthIndex);
  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  };
  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };
  const handleMonth = () => {
    dispatch(setMonthIndex(currentMonthIdx));
  };
  const handledaySelected = (day) => {
    dispatch(setSelectedDay(day));
  };
  const getDayClass = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  };
  return (
    <div className="mt-1 hidden md:block md:mt-9">
      <header className="flex justify-between">
        <div className="text-gray-700 font-bold align-middle ml-2 p-4">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </div>

        <div>
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer text-gray-600 mx-2">
              <svg
                className="w-2 h-3 text-gray-700 dark:text-white mx-2"
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
                className="w-2 h-3 text-gray-700 dark:text-white mx-2"
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
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleMonth();
                  handledaySelected(day);
                }}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
