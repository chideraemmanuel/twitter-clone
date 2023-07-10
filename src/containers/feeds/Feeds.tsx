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

const Feeds: React.FC = () => {
  const { data: tweets, isLoading, error, isError } = useGetTweets();
  // console.log(navigator.onLine);
  // useGetTweets();

  const { isReplyingTweet } = useSelector((store: StoreTypes) => store.tweet);

  return (
    <div className="feeds">
      <FeedsHeader />
      <WhatIsHappening />
      {/* {isReplyingTweet && <ReplyTweet />} */}

      <div className="feeds__content">
        {isLoading && <Spinner />}
        {!navigator.onLine && !isLoading && <p>Error...</p>}
        {tweets && tweets.map((tweet) => <Tweet {...tweet} />)}
      </div>
    </div>
  );
};

export default Feeds;
