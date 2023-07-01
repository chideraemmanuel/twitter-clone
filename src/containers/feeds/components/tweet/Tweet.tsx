import ProfileImage from "../../../../components/profileImage/ProfileImage";
import "./Tweet.scss";
import { Link } from "react-router-dom";
import TweetActions from "./components/tweetActions/TweetActions";
import { VscEllipsis } from "react-icons/vsc";
import { IoEllipsisHorizontal } from "react-icons/io5";
import TweetImages from "./components/tweetImages/TweetImages";
import TweetOptions from "./components/tweetOptions/TweetOptions";
import { useState } from "react";

const Tweet: React.FC = () => {
  const [optionsActive, setOptionsActive] = useState(false);

  return (
    <div className="tweet">
      <ProfileImage />

      <div className="tweet__info">
        <div className="tweet__info--header">
          <Link to="/">
            <p>Chidera Emmanuel</p>
            <span>@chideraemmanuel</span>
            <span>- 19h</span>
          </Link>

          <div className="tweet__info--header_options">
            <button onClick={() => setOptionsActive(!optionsActive)}>
              <IoEllipsisHorizontal />
            </button>

            {optionsActive && <TweetOptions />}
          </div>
        </div>

        <Link to="/" className="tweet__info--text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt,
            fugit eveniet odio amet officiis ipsa, enim illum earum tempore
            architecto, ea laudantium libero a excepturi perspiciatis? Sunt,
            impedit eveniet.
          </p>
        </Link>

        {/* <TweetImages /> */}

        <TweetActions />
      </div>
    </div>
  );
};

export default Tweet;
