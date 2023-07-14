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
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../redux/store";
import Options from "../../../../components/options/Options";

interface Props {
  tweet: TweetTypes;
}

const Tweet: React.FC<Props> = ({ tweet }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isReplyingTweet } = useSelector((store: StoreTypes) => store.tweet);

  const { id, createdAt, tweetAuthorUID, tweetContent, tweetStats } = tweet;

  const { data: tweetAuthor } = useGetUser(tweetAuthorUID);

  const handleNavigate = () => {
    navigate(`/tweet/${id}`);
  };

  return (
    <>
      {isReplyingTweet && tweetAuthor && <ReplyTweet />}

      {tweetAuthor && (
        <div className="tweet">
          <div className="tweet__navigator" onClick={handleNavigate}></div>
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
                <Options list={<TweetOptions />} />
              </div>
            </div>

            <div className="tweet__info--text" onClick={handleNavigate}>
              <p>{tweetContent.text}</p>
            </div>
            {/* <TweetImages /> */}
            <TweetActions tweet={tweet} tweetAuthor={tweetAuthor} />
          </div>
        </div>
      )}
    </>
  );
};

export default Tweet;
