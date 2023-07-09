import ProfileImage from "../../../../components/profileImage/ProfileImage";
import "./Tweet.scss";
import { Link } from "react-router-dom";
import TweetActions from "./components/tweetActions/TweetActions";
import { VscEllipsis } from "react-icons/vsc";
import { IoEllipsisHorizontal } from "react-icons/io5";
import TweetImages from "./components/tweetImages/TweetImages";
import TweetOptions from "./components/tweetOptions/TweetOptions";
import { useState } from "react";
import useGetUser from "../../../../hooks/useGetUser";
import { TweetTypes } from "../../../../types/tweetTypes";
import ReplyTweet from "./components/replyTweet/ReplyTweet";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../../../redux/store";

const Tweet: React.FC<TweetTypes> = ({
  id,
  createdAt,
  tweetAuthorUID,
  tweetContent,
  tweetStats,
}) => {
  const [optionsActive, setOptionsActive] = useState(false);

  // const { data } = useGetUser(tweetAuthorUID);
  const { data } = useGetUser(tweetAuthorUID);
  // const { name, username } = data;
  // console.log(data);
  // console.log(createdAt.toDate());

  const { isReplyingTweet } = useSelector((store: StoreTypes) => store.tweet);

  return (
    <>
      {isReplyingTweet && <ReplyTweet />}

      <div className="tweet">
        <ProfileImage />

        <div className="tweet__info">
          <div className="tweet__info--header">
            <Link to="/">
              {data && <p>{data.name}</p>}
              {data && <span>@{data.username}</span>}
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
            <p>{tweetContent.text}</p>
          </Link>

          {/* <TweetImages /> */}

          <TweetActions {...tweetStats} />
        </div>
      </div>
    </>
  );
};

export default Tweet;
