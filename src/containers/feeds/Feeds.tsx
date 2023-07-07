import { getTweets } from "../../utils/getTweets";
import "./Feeds.scss";
import FeedsHeader from "./components/feedsHeader/FeedsHeader";
import Tweet from "./components/tweet/Tweet";
import WhatIsHappening from "./components/whatIsHappening/WhatIsHappening";

const Feeds: React.FC = () => {
  const {} = getTweets();

  return (
    <div className="feeds">
      <FeedsHeader />
      <WhatIsHappening />

      <div className="feeds__content">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default Feeds;
