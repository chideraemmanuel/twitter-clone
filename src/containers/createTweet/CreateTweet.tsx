import { FaTimes } from "react-icons/fa";
import "./CreateTweet.scss";
import TweetInput from "./components/tweetInput/TweetInput";
import WhoCanReplyTweet from "./components/whoCanReplyTweet/WhoCanReplyTweet";
import { useDispatch, useSelector } from "react-redux";
import {
  closeTweetCreation,
  resetTweetContent,
} from "../../redux/slices/tweetSlice";
import { StoreTypes } from "../../redux/store";
import { getTweetConstants, usePostTweet } from "../../hooks/usePostTweet";
import { auth } from "../../config/firebase";

const CreateTweet: React.FC = () => {
  const dispatch = useDispatch();

  const { tweetContent } = useSelector((store: StoreTypes) => store.tweet);

  const { mutate: postTweet, isLoading: isPosting, error } = usePostTweet();

  const handlePostTweet = () => {
    if (!auth.currentUser) return;
    postTweet(getTweetConstants(auth.currentUser.uid, tweetContent));
    dispatch(resetTweetContent());
  };

  // console.log(auth.currentUser);

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

          <button
            disabled={tweetContent === "" || isPosting ? true : false}
            onClick={handlePostTweet}
          >
            {isPosting ? "Posting tweet..." : "Tweet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
