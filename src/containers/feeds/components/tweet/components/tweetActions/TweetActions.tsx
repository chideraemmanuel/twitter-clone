import "./TweetActions.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRetweet, FaRegComment } from "react-icons/fa";
import { BiPoll } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { TweetTypes } from "../../../../../../types/tweetTypes";
import { auth } from "../../../../../../config/firebase";
import { useDispatch } from "react-redux";
import {
  openReplyTweet,
  resetTweetReplyContent,
  setRepliedTweetContent,
} from "../../../../../../redux/slices/tweetSlice";
import { useLikeTweet } from "../../../../../../hooks/useLikeTweet";
// import Confetti from "react-confetti";

interface Props {
  tweet: TweetTypes;
  tweetAuthor: {
    name: string;
    username: string;
  };
}

const TweetActions: React.FC<Props> = ({ tweet, tweetAuthor }) => {
  const { tweetStats, id, tweetContent } = tweet;
  const { comments, likes } = tweetStats;

  // console.log(tweetAuthor);

  const dispatch = useDispatch();

  // CHECK IF CURRENT USER ALREADY LIKED TWEET
  const findLikerUID = tweetStats.likes.find(
    (like) => like.tweetLikerUID === auth.currentUser?.uid
  );

  // console.log(findLikerUID);

  const { mutate: likeTweet } = useLikeTweet();

  const handleLike = () => {
    if (!auth.currentUser) return;
    likeTweet({
      // @ts-ignore
      tweetId: id,
      tweetLikerUID: auth.currentUser.uid,
    });
  };

  const handleComment = () => {
    // const { data: tweetData, isLoading: isTweetDataLoading } =
    //   useFetchTweet(tweetId);

    dispatch(
      setRepliedTweetContent({
        // @ts-ignore
        id,
        author: {
          displayName: tweetAuthor.name,
          username: tweetAuthor.username,
        },
        content: tweetContent.text,
      })
    );
    dispatch(resetTweetReplyContent());
    dispatch(openReplyTweet());
  };

  return (
    <div className="tweet-actions">
      <button
        className="tweet-actions__comment"
        // onClick={() => dispatch(openReplyTweet())}
        onClick={handleComment}
      >
        <FaRegComment />
        {comments > 0 && <span>{comments}</span>}
      </button>

      <button className="tweet-actions__retweet">
        <FaRetweet />
        {/* <span>638</span> */}
      </button>

      <button
        className={
          findLikerUID ? "tweet-actions__like liked" : "tweet-actions__like"
        }
        onClick={handleLike}
      >
        {findLikerUID ? (
          <>
            {/* <Confetti
              width={5}
              height={5}
              recycle={false}
              numberOfPieces={100}
            /> */}
            <AiFillHeart />{" "}
          </>
        ) : (
          <AiOutlineHeart />
        )}

        {likes.length > 0 && <span>{likes.length}</span>}
      </button>

      <button className="tweet-actions__activity">
        <BiPoll />
        {/* <span>169k</span> */}
      </button>

      <button className="tweet-actions__share">
        {/* <LuUpload />
        <MdOutlineFileUpload /> */}
        <FiUpload />
      </button>
    </div>
  );
};

export default TweetActions;
