import "./MobileTweetButton.scss";
// import { FaFeather } from "react-icons/fa";
import { FiFeather } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openTweetCreation } from "../../../../../redux/slices/tweetSlice";

const MobileTweetButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="mobileTweetButton"
      onClick={() => dispatch(openTweetCreation())}
    >
      {/* <FaFeather /> */}
      <FiFeather />
    </button>
  );
};

export default MobileTweetButton;
