import { useDispatch, useSelector } from "react-redux";
import "./TweetDetails.scss";
import { StoreTypes } from "../../redux/store";
import { Navigate, useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import { FiArrowLeft, FiChevronLeft } from "react-icons/fi";
import { useGetTweet } from "../../hooks/useGetTweet";
import TweetDetailsTweet from "./components/tweetDetailsTweet/TweetDetailsTweet";
import TweetDetailsActions from "./components/tweetDetailsActions/TweetDetailsActions";
import TweetInput from "../../containers/createTweet/components/tweetInput/TweetInput";
import {
  closeReplyTweet,
  resetTweetReplyContent,
  setTweetReplyContent,
} from "../../redux/slices/tweetSlice";
import { useReplyTweet } from "../../hooks/useReplyTweet";
import { auth } from "../../config/firebase";
import { getTweetConstants } from "../../hooks/usePostTweet";
import Spinner from "../../components/spinner/Spinner";
import useGetUser from "../../hooks/useGetUser";
import TweetDetailsReplies from "./components/tweetDetailsReplies/TweetDetailsReplies";

const TweetDetails: React.FC = () => {
  const { tweetId } = useParams();

  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);

  const { tweetReplyContent, replyInputFocused } = useSelector(
    (store: StoreTypes) => store.tweet
  );

  const dispatch = useDispatch();

  //   if (!currentUser.active) {
  //     return <Navigate to="/login" replace />;
  //   }

  const { data: tweet, isLoading: isFetchingTweet } = useGetTweet(tweetId);
  // console.log(tweet);

  const { data: tweetAuthor } = useGetUser(tweet?.tweetAuthorUID);

  const {
    mutate: replyTweet,
    isLoading: isPostingReply,
    isError,
  } = useReplyTweet();

  const handleReplyTweet = () => {
    if (!auth.currentUser || !tweetId) return;

    replyTweet({
      data: getTweetConstants(auth.currentUser.uid, tweetReplyContent),
      // tweetId: tweet?.id,
      tweetId: tweetId,
    });

    // MIGHT ALSO RESET REPLIED TWEET CONTENT
    dispatch(resetTweetReplyContent());
    // dispatch(closeReplyTweet());
  };

  // const isPostingReply = false

  return (
    <div className="tweet-details">
      <div className="tweet-details__header">
        <div
          className="tweet-details__header--icon"
          onClick={() => history.back()}
        >
          <FiArrowLeft />
        </div>
        <h2>Tweet</h2>
      </div>

      {isFetchingTweet && <Spinner />}
      {tweet && (
        <>
          <TweetDetailsTweet tweet={tweet} tweetAuthor={tweetAuthor} />

          <div className="tweet-details__stats">
            <div>
              <span>0</span>
              <span>Retweets</span>
            </div>
            <div>
              {/* <span>2</span>
              <span>Quotes</span> */}
              <span>{tweet.tweetStats.comments}</span>
              <span>
                {tweet.tweetStats.comments === 1 ? "Comment" : "Comments"}
              </span>
            </div>
            <div>
              {/* <span>100</span> */}
              <span>{tweet.tweetStats.likes.length}</span>
              <span>
                {tweet.tweetStats.likes.length === 1 ? "Like" : "Likes"}
              </span>
            </div>
            <div>
              <span>0</span>
              <span>Bookmarks</span>
            </div>
          </div>

          <TweetDetailsActions
            tweetId={tweet.id}
            tweetStats={tweet.tweetStats}
          />

          <form className="replyTweetInput" onSubmit={handleReplyTweet}>
            <TweetInput
              value={tweetReplyContent}
              setValue={setTweetReplyContent}
              placeholder="Tweet your reply!"
            />

            <button
              disabled={
                tweetReplyContent === "" || isPostingReply ? true : false
              }
              onClick={handleReplyTweet}
            >
              {isPostingReply ? "Posting reply..." : "Reply"}
            </button>
          </form>

          <TweetDetailsReplies originalTweetId={tweet.id} />
        </>
      )}
    </div>
  );
};

export default TweetDetails;
