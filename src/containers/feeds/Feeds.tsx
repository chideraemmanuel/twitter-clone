import "./Feeds.scss";
import FeedsHeader from "./components/feedsHeader/FeedsHeader";
import Tweet from "./components/tweet/Tweet";
import WhatIsHappening from "./components/whatIsHappening/WhatIsHappening";

const Feeds: React.FC = () => {
  return (
    <div className="feeds">
      <FeedsHeader />
      <WhatIsHappening />

      <div className="feeds__content">
        <Tweet />
      </div>
    </div>
  );
};

export default Feeds;
