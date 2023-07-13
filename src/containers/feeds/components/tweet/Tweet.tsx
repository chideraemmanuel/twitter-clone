import ProfileImage from "../../../../components/profileImage/ProfileImage";
import "./Tweet.scss";
import { Link, useNavigate } from "react-router-dom";
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
import Options from "../../../../components/options/Options";

const Tweet: React.FC<TweetTypes> = ({
  id,
  createdAt,
  tweetAuthorUID,
  tweetContent,
  tweetStats,
}) => {
  const [optionsActive, setOptionsActive] = useState(false);

  // const { data } = useGetUser(tweetAuthorUID);
  const { data: tweetAuthor } = useGetUser(tweetAuthorUID);
  // const { name, username } = data;
  // console.log(data);
  // console.log(createdAt.toDate());

  const { isReplyingTweet } = useSelector((store: StoreTypes) => store.tweet);

  const navigate = useNavigate();

  return (
    <>
      {isReplyingTweet && tweetAuthor && (
        <ReplyTweet
        // tweetAuthor={tweetAuthor}
        // tweetContent={tweetContent}
        // tweetId={id}
        />
      )}

      {tweetAuthor && (
        <div className="tweet">
          <div
            className="tweet__navigator"
            onClick={() => navigate(`/tweet/${id}`)}
          ></div>
          <div className="tweet__profileImage">
            <ProfileImage />
          </div>

          <div className="tweet__info">
            <div className="tweet__info--header">
              <Link to="/">
                {tweetAuthor && <p>{tweetAuthor.name}</p>}
                {tweetAuthor && <span>@{tweetAuthor.username}</span>}
                <span>- 19h</span>
              </Link>

              <div className="tweet__info--header_options">
                {/* <button onClick={() => setOptionsActive(!optionsActive)}>
                  <IoEllipsisHorizontal />
                </button>

                {optionsActive && <TweetOptions />} */}
                <Options list={<TweetOptions />} />
              </div>
            </div>

            <div
              className="tweet__info--text"
              onClick={() => navigate(`/tweet/${id}`)}
            >
              <p>{tweetContent.text}</p>
            </div>
            {/* <TweetImages /> */}
            <TweetActions
              tweetStats={tweetStats}
              tweetId={id}
              tweetAuthor={tweetAuthor}
              tweetContent={tweetContent}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Tweet;
