import { getTweets } from "../../utils/getTweets";
import "./Feeds.scss";
import FeedsHeader from "./components/feedsHeader/FeedsHeader";
import Tweet from "./components/tweet/Tweet";
import WhatIsHappening from "./components/whatIsHappening/WhatIsHappening";

const Feeds: React.FC = () => {
  const { data: tweets, isLoading, error } = getTweets();

  return (
    <div className="feeds">
      <FeedsHeader />
      <WhatIsHappening />

      <div className="feeds__content">
        {tweets?.map((tweet) => (
          <Tweet {...tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
