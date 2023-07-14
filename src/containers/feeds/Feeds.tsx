import { useSelector } from "react-redux";
import InterceptionHOC from "../../components/interceptionHOC/InterceptionHOC";
import Spinner from "../../components/spinner/Spinner";
import { useGetTweets } from "../../hooks/useGetTweets";
import "./Feeds.scss";
import FeedsHeader from "./components/feedsHeader/FeedsHeader";
import Tweet from "./components/tweet/Tweet";
import ReplyTweet from "./components/tweet/components/replyTweet/ReplyTweet";
import WhatIsHappening from "./components/whatIsHappening/WhatIsHappening";
import { StoreTypes } from "../../redux/store";
import { useLikeTweet } from "../../hooks/useLikeTweet";
import { auth } from "../../config/firebase";

const Feeds: React.FC = () => {
  const { isReplyingTweet } = useSelector((store: StoreTypes) => store.tweet);

  const {
    data: tweets,
    isLoading: isFetchingTweets,
    error: fetchError,
  } = useGetTweets();

  return (
    <div className="feeds">
      <FeedsHeader />
      <WhatIsHappening />

      <div className="feeds__content">
        {isFetchingTweets && <Spinner />}
        {!navigator.onLine && !isFetchingTweets && <p>Error...</p>}
        {tweets &&
          tweets.map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
      </div>
    </div>
  );
};

export default Feeds;
