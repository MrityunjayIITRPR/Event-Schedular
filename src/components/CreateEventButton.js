import plus from "../assets/plus.svg";
import { useDispatch } from "react-redux";
import { setShowEventModal } from "../utils/eventModalSlice";
const CreateEventButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setShowEventModal(true));
  };
  return (
    <button
      onClick={handleClick}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plus} alt="create_event" className="w-4 h-4 md:w-7 md:h-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
};

export default CreateEventButton;
