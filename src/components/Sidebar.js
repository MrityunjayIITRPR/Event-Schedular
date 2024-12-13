import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

const Sidebar = () => {
  return (
    <div className="border p-5 w-full sm:w-3/4 md:w-64">
      <CreateEventButton />
      <SmallCalendar />
    </div>
  );
};

export default Sidebar;
