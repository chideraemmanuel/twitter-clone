import "./CreateTweet.scss";
import TweetInput from "./components/tweetInput/TweetInput";
import WhoCanReplyTweet from "./components/whoCanReplyTweet/WhoCanReplyTweet";
import { useDispatch, useSelector } from "react-redux";
import {
  closeTweetCreation,
  resetTweetContent,
  setTweetContent,
} from "../../redux/slices/tweetSlice";
import { StoreTypes } from "../../redux/store";
import { getTweetConstants, usePostTweet } from "../../hooks/usePostTweet";
import { auth } from "../../config/firebase";
import InterceptionHOC from "../../components/interceptionHOC/InterceptionHOC";

const CreateTweet: React.FC = () => {
  const dispatch = useDispatch();

  const { tweetContent } = useSelector((store: StoreTypes) => store.tweet);

  const { mutate: postTweet, isLoading: isPosting } = usePostTweet();

  const handlePostTweet = () => {
    if (!auth.currentUser) return;
    postTweet(getTweetConstants(auth.currentUser.uid, tweetContent));
    dispatch(resetTweetContent());
    dispatch(closeTweetCreation());
  };

  // console.log(auth.currentUser);

  return (
    <InterceptionHOC closeInterceptionAction={closeTweetCreation}>
      <div className="createTweet__header">
        <div className="createTweet__header--visibilityFilter">
          <span>Everyone</span>
        </div>
      </div>

      <div className="createTweet__body">
        <TweetInput
          value={tweetContent}
          setValue={setTweetContent}
          placeholder="What is happening?!"
        />
      </div>

      <div className="createTweet__footer">
        <WhoCanReplyTweet />

        <button
          disabled={tweetContent === "" || isPosting ? true : false}
          onClick={handlePostTweet}
        >
          {isPosting ? "Posting tweet..." : "Tweet"}
        </button>
      </div>
    </InterceptionHOC>
  );
};

export default CreateTweet;
