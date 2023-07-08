import Spinner from "../../components/spinner/Spinner";
import { useGetTweets } from "../../hooks/useGetTweets";
import "./Feeds.scss";
import FeedsHeader from "./components/feedsHeader/FeedsHeader";
import Tweet from "./components/tweet/Tweet";
import WhatIsHappening from "./components/whatIsHappening/WhatIsHappening";

const Feeds: React.FC = () => {
  const { data: tweets, isLoading, error, isError } = useGetTweets();
  console.log(navigator.onLine);

  return (
    <div className="feeds">
      <FeedsHeader />
      <WhatIsHappening />

      <div className="feeds__content">
        {isLoading && <Spinner />}
        {!navigator.onLine && <p>Error...</p>}
        {tweets?.map((tweet) => (
          <Tweet {...tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
