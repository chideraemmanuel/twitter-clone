import { FaTimes } from "react-icons/fa";
import "./CreateTweet.scss";
import TweetInput from "./components/tweetInput/TweetInput";
import WhoCanReplyTweet from "./components/whoCanReplyTweet/WhoCanReplyTweet";
import { useDispatch } from "react-redux";
import { closeTweetCreation } from "../../redux/slices/tweetSlice";

const CreateTweet: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="createTweet">
      <div className="createTweet__box">
        <div
          className="createTweet__box--icon"
          onClick={() => dispatch(closeTweetCreation())}
        >
          <FaTimes />
        </div>

        <div className="createTweet__box--header">
          <div className="createTweet__box--header_visibilityFilter">
            <span>Everyone</span>
          </div>
        </div>

        <div className="createTweet__box--body">
          <TweetInput />
        </div>

        <div className="createTweet__box--footer">
          <WhoCanReplyTweet />
          <button>Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
