import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowEventModal, setselectedEvent } from "../utils/eventModalSlice";
import { addEvent } from "../utils/eventModalSlice";
import { updateEvent } from "../utils/eventModalSlice";
import { deleteEvent } from "../utils/eventModalSlice";
const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

const EventModal = () => {
  const dispatch = useDispatch();
  const daySelected = useSelector((store) => store?.dayMonth?.selectedDay);
  const selectedEvent = useSelector(
    (store) => store?.eventModal?.selectedEvent
  );

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatch(updateEvent(calendarEvent));
    } else {
      dispatch(addEvent(calendarEvent));
    }

    dispatch(setShowEventModal(false));
  }
  return (
    <div className=" h:[30%] md:h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-gray-200 rounded-lg shadow-2xl w-fit md:w-1/4 md:bg-white">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatch(deleteEvent(selectedEvent));
                  dispatch(setShowEventModal(false));
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button
              onClick={() => {
                dispatch(setShowEventModal(false));
                dispatch(setselectedEvent(null));
              }}
            >
              <span className="material-icons-outlined text-gray-400 ml-2">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 mr-6">
                schedule
              </span>
              <p>{daySelected.format("dddd, MMMM DD")}</p>
            </div>
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 mr-6">
                segment
              </span>
              <textarea
                type="text"
                name="description"
                placeholder="Add description"
                value={description}
                required
                className=" border-0 text-gray-600 pb-2 w-full border-b-2 resize-none bg-gray-200 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 mr-6 w-4 h-4">
                bookmark_border
              </span>
              <div className="flex gap-x-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};
export default EventModal;
