import { useDispatch, useSelector } from "react-redux";
import TweetInput from "../../../createTweet/components/tweetInput/TweetInput";
import WhoCanReplyTweet from "../../../createTweet/components/whoCanReplyTweet/WhoCanReplyTweet";
import "./WhatIsHappening.scss";
import { StoreTypes } from "../../../../redux/store";
import {
  getTweetConstants,
  usePostTweet,
} from "../../../../hooks/usePostTweet";
import { auth } from "../../../../config/firebase";
import {
  resetTweetContent,
  setTweetContent,
} from "../../../../redux/slices/tweetSlice";

const WhatIsHappening: React.FC = () => {
  const dispatch = useDispatch();

  const { tweetContent } = useSelector((store: StoreTypes) => store.tweet);

  const { mutate: postTweet, isLoading: isPosting } = usePostTweet();

  const handlePostTweet = () => {
    if (!auth.currentUser) return;
    postTweet(getTweetConstants(auth.currentUser.uid, tweetContent));
    dispatch(resetTweetContent());
  };

  return (
    <div className="what-is-happening">
      <TweetInput
        value={tweetContent}
        setValue={setTweetContent}
        placeholder="What is happening?!"
      />

      <div className="what-is-happening__bottom">
        <WhoCanReplyTweet />

        <button
          className="what-is-happening__bottom--button"
          disabled={tweetContent === "" || isPosting ? true : false}
          onClick={handlePostTweet}
        >
          {isPosting ? "Posting tweet..." : "Tweet"}
        </button>
      </div>
    </div>
  );
};

export default WhatIsHappening;
