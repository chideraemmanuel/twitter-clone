import "./ReplyTweet.scss";
import InterceptionHOC from "../../../../../../components/interceptionHOC/InterceptionHOC";
import ProfileImageAlt from "../../../../../../components/profileImageAlt/ProfileImageAlt";
import { Link } from "react-router-dom";
import TweetInput from "../../../../../createTweet/components/tweetInput/TweetInput";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../../../redux/store";
import {
  closeReplyTweet,
  resetTweetReplyContent,
  setTweetReplyContent,
} from "../../../../../../redux/slices/tweetSlice";
import { useReplyTweet } from "../../../../../../hooks/useReplyTweet";
import { auth } from "../../../../../../config/firebase";
import { getTweetConstants } from "../../../../../../hooks/usePostTweet";

const ReplyTweet: React.FC = () => {
  const { tweetReplyContent, repliedTweet } = useSelector(
    (store: StoreTypes) => store.tweet
  );

  const dispatch = useDispatch();

  const { mutate: replyTweet, isLoading: isPostingReply } = useReplyTweet();

  const handleReplyTweet = () => {
    // console.log(auth);
    // console.log(repliedTweet.id);

    if (!auth.currentUser) return;

    replyTweet({
      data: getTweetConstants(auth.currentUser.uid, tweetReplyContent),
      tweetId: repliedTweet?.id,
    });

    // MIGHT ALSO RESET REPLIED TWEET CONTENT
    dispatch(resetTweetReplyContent());
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
            <span>{repliedTweet.author.displayName}</span>
            <span>@{repliedTweet.author.username}</span>
            <span>- 19h</span>
          </div>

          {/* <p className="replyTweet__info--text">{replyTweetContent.text}</p> */}
          <p className="replyTweet__info--text">{repliedTweet.content}</p>

          <span className="replyTweet__info--replyingTo">
            Replying to <Link to="/">@{repliedTweet.author.username}</Link>
          </span>
        </div>
      </div>

      <form className="replyTweetInput" onSubmit={handleReplyTweet}>
        <TweetInput
          value={tweetReplyContent}
          setValue={setTweetReplyContent}
          placeholder="Tweet your reply!"
        />

        <button
          disabled={tweetReplyContent === "" || isPostingReply ? true : false}
          onClick={handleReplyTweet}
        >
          {isPostingReply ? "Posting reply..." : "Reply"}
        </button>
      </form>
    </InterceptionHOC>
  );
};

export default ReplyTweet;
