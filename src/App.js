import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { useState } from "react";
import { getMonth } from "./utils/utils";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import EventModal from "./components/EventModal";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const monthIndex = useSelector((store) => store.dayMonth.monthIndex);
  const showEventModal = useSelector(
    (store) => store.eventModal.showEventModal
  );
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-auto md:flex md:flex-col md:h-screen">
        <CalendarHeader />
        <div className="flex flex-col md:flex-row md:h-full">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
