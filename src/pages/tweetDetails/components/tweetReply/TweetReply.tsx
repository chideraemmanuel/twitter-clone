import { Link } from "react-router-dom";
import Options from "../../../../components/options/Options";
import TweetOptions from "../../../../containers/feeds/components/tweet/components/tweetOptions/TweetOptions";
import useGetUser from "../../../../hooks/useGetUser";
import { TweetTypes } from "../../../../types/tweetTypes";
import "./TweetReply.scss";
import ProfileImage from "../../../../components/profileImage/ProfileImage";
import TweetReplyActions from "../tweetReplyActions/TweetReplyActions";

interface Props {
  reply: TweetTypes;
  originalTweetId: string;
}

const TweetReply: React.FC<Props> = ({ reply, originalTweetId }) => {
  const { tweetAuthorUID, tweetContent } = reply;

  const { data: tweetAuthor } = useGetUser(tweetAuthorUID);

  return (
    <>
      {/* {isReplyingTweet && tweetAuthor && <ReplyTweet />} */}

      {tweetAuthor && (
        <div className="tweetReply">
          <div
            className="tweetReply__navigator"
            //   onClick={handleNavigate}
          ></div>
          <div className="tweetReply__profileImage">
            <ProfileImage />
          </div>

          <div className="tweetReply__info">
            <div className="tweetReply__info--header">
              <Link to="/">
                {/* @ts-ignore */}
                {tweetAuthor && <p>{tweetAuthor.name}</p>}
                {/* @ts-ignore */}
                {tweetAuthor && <span>@{tweetAuthor.username}</span>}
                <span>- 19h</span>
              </Link>

              <div className="tweetReply__info--header_options">
                <Options list={<TweetOptions />} />
              </div>
            </div>

            <div
              className="tweetReply__info--text"
              //  onClick={handleNavigate}
            >
              <p>{tweetContent.text}</p>
            </div>
            {/* <TweetImages /> */}
            <TweetReplyActions
              reply={reply}
              // @ts-ignore
              tweetAuthor={tweetAuthor}
              originalTweetId={originalTweetId}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TweetReply;
