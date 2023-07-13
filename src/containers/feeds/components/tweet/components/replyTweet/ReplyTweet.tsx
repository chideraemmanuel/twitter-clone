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
import { TweetContentTypes } from "../../../../../../types/tweetTypes";
import { useReplyTweet } from "../../../../../../hooks/useReplyTweet";
import { auth, db } from "../../../../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useGetTweet } from "../../../../../../hooks/useGetTweet";

// interface Props {
//   tweetId: string;
//   tweetContent: TweetContentTypes;
//   tweetAuthor: {
//     name: string;
//     username: string;
//   };
// }

const ReplyTweet: React.FC = () => {
  const { tweetReplyContent, repliedTweet } = useSelector(
    (store: StoreTypes) => store.tweet
  );

  const dispatch = useDispatch();

  const {
    mutate: replyTweet,
    isLoading: isPostingReply,
    isError,
  } = useReplyTweet();

  const handleReplyTweet = () => {
    // console.log("Replied!");

    if (!auth.currentUser) return;

    replyTweet({
      tweetId: repliedTweet.id,
      reply: {
        replyAuthorUID: auth.currentUser.uid,
        comment: tweetReplyContent,
      },
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

      <form className="replyTweetInput">
        <TweetInput
          value={tweetReplyContent}
          setValue={setTweetReplyContent}
          placeholder="Reply Tweet!"
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
