import { BiBookmark } from "react-icons/bi";
import "./TweetDetailsActions.scss";
import { FiUpload } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { useLikeTweet } from "../../../../hooks/useLikeTweet";
import { auth } from "../../../../config/firebase";
import { TweetStatsTypes } from "../../../../types/tweetTypes";
import { useDispatch } from "react-redux";
import { focusReplyInput } from "../../../../redux/slices/tweetSlice";

const liked = false;

interface Props {
  tweetId: string;
  tweetStats: TweetStatsTypes;
}

const TweetDetailsActions: React.FC<Props> = ({ tweetId, tweetStats }) => {
  const dispatch = useDispatch();

  const { mutate: likeTweet, isLoading, isError } = useLikeTweet();

  // CHECK IF CURRENT USER ALREADY LIKED TWEET
  const findLikerUID = tweetStats.likes.find(
    (like) => like.tweetLikerUID === auth.currentUser?.uid
  );

  const handleLike = () => {
    if (!auth.currentUser) return;

    likeTweet({ tweetId, tweetLikerUID: auth?.currentUser?.uid });
  };

  return (
    <div className="tweetDetailsActions">
      <button
        className="tweetDetailsActions__comment"
        // onClick={() => dispatch(focusReplyInput())}
      >
        <FaRegComment />
      </button>

      <button className="tweetDetailsActions__retweet">
        <FaRetweet />
      </button>

      <button
        className={
          findLikerUID
            ? "tweetDetailsActions__like liked"
            : "tweetDetailsActions__like"
        }
        onClick={handleLike}
      >
        {findLikerUID ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>

      <button className="tweetDetailsActions__bookmark">
        <BiBookmark />
      </button>

      <button className="tweetDetailsActions__share">
        <FiUpload />
      </button>
    </div>
  );
};

export default TweetDetailsActions;
