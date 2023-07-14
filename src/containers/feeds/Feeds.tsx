import Spinner from "../../components/spinner/Spinner";
import { useGetTweets } from "../../hooks/useGetTweets";
import "./Feeds.scss";
import FeedsHeader from "./components/feedsHeader/FeedsHeader";
import Tweet from "./components/tweet/Tweet";
import WhatIsHappening from "./components/whatIsHappening/WhatIsHappening";

const Feeds: React.FC = () => {
  const {
    data: tweets,
    isLoading: isFetchingTweets,
    // error: fetchError,
  } = useGetTweets();

  return (
    <div className="feeds">
      <FeedsHeader />
      <WhatIsHappening />

      <div className="feeds__content">
        {isFetchingTweets && <Spinner />}
        {!navigator.onLine && !isFetchingTweets && <p>Error...</p>}
        {tweets &&
          tweets.map((tweet) => (
            // @ts-ignore
            <Tweet tweet={tweet} key={tweet.id} />
          ))}
      </div>
    </div>
  );
};

export default Feeds;
