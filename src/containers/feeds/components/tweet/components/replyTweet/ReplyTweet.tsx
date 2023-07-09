import "./ReplyTweet.scss";
import InterceptionHOC from "../../../../../../components/interceptionHOC/InterceptionHOC";
import ProfileImageAlt from "../../../../../../components/profileImageAlt/ProfileImageAlt";
import { Link } from "react-router-dom";
import TweetInput from "../../../../../createTweet/components/tweetInput/TweetInput";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../../../redux/store";
import {
  closeReplyTweet,
  resetReplyTweetContent,
  setReplyTweetContent,
} from "../../../../../../redux/slices/tweetSlice";
import { TweetContentTypes } from "../../../../../../types/tweetTypes";
import { useReplyTweet } from "../../../../../../hooks/useReplyTweet";
import { auth } from "../../../../../../config/firebase";

// const isPosting = false;

interface Props {
  tweetId: string;
  tweetContent: TweetContentTypes;
  tweetAuthor: {
    name: string;
    username: string;
  };
  // tweetAuthorName: string;
  // tweetAuthorUsername: string;
}

const ReplyTweet: React.FC<Props> = ({
  // tweetAuthorName,
  // tweetAuthorUsername,
  tweetId,
  tweetContent,
  tweetAuthor,
}) => {
  const { replyTweetContent } = useSelector((store: StoreTypes) => store.tweet);

  const dispatch = useDispatch();

  const {
    mutate: replyTweet,
    isLoading: isPostingReply,
    isError,
  } = useReplyTweet();

  const handleReplyTweet = () => {
    console.log("Replied!");

    if (!auth.currentUser) return;

    replyTweet({
      tweetId,
      reply: {
        replyAuthorUID: auth.currentUser.uid,
        comment: replyTweetContent,
      },
    });

    dispatch(resetReplyTweetContent());
    dispatch(closeReplyTweet());
  };

  return (
    <InterceptionHOC closeInterceptionAction={closeReplyTweet}>
      <div className="replyTweet">
        <ProfileImageAlt />

        <div className="replyTweet__info">
          <div className="replyTweet__info--header">
            {/* <span>{tweetAuthorName}</span>
            <span>@{tweetAuthorUsername}</span> */}
            <span>{tweetAuthor.name}</span>
            <span>@{tweetAuthor.username}</span>
            <span>- 19h</span>
          </div>

          {/* <p className="replyTweet__info--text">{replyTweetContent.text}</p> */}
          <p className="replyTweet__info--text">{tweetContent.text}</p>

          <span className="replyTweet__info--replyingTo">
            Replying to <Link to="/">@{tweetAuthor.username}</Link>
          </span>
        </div>
      </div>

      <form className="replyTweetInput">
        <TweetInput
          value={replyTweetContent}
          setValue={setReplyTweetContent}
          placeholder="Reply Tweet!"
        />

        <button
          disabled={replyTweetContent === "" || isPostingReply ? true : false}
          onClick={handleReplyTweet}
        >
          {isPostingReply ? "Posting reply..." : "Reply"}
        </button>
      </form>
    </InterceptionHOC>
  );
};

export default ReplyTweet;
