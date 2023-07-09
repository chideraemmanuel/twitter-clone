import "./TweetActions.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRetweet, FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { LiaRetweetSolid, LiaPollSolid } from "react-icons/lia";
import { BiPoll, BiUpload } from "react-icons/bi";
import { BsHeart, BsHeartFill, BsUpload } from "react-icons/bs";
import { FiShare, FiUpload } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";
import { MdOutlinePoll, MdOutlineFileUpload } from "react-icons/md";
import { TweetStatsTypes } from "../../../../../../types/tweetTypes";
import { likeTweet } from "../../../../../../utils/likeTweet";
import { auth } from "../../../../../../config/firebase";
import { useDispatch } from "react-redux";
import { openReplyTweet } from "../../../../../../redux/slices/tweetSlice";

interface Props {
  tweetStats: TweetStatsTypes;
  tweetId: string;
}

const TweetActions: React.FC<Props> = ({ tweetStats, tweetId }) => {
  const { comments, likes } = tweetStats;

  const dispatch = useDispatch();

  const handleLike = () => {
    if (!auth.currentUser) return;
    likeTweet(tweetId, auth.currentUser?.uid);
  };

  return (
    <div className="tweet-actions">
      <button
        className="tweet-actions__comment"
        onClick={() => dispatch(openReplyTweet())}
      >
        <FaRegComment />
        {comments.length > 0 && <span>{comments.length}</span>}
      </button>

      <button className="tweet-actions__retweet">
        <FaRetweet />
        <span>638</span>
      </button>

      <button className="tweet-actions__like" onClick={handleLike}>
        <AiOutlineHeart />
        {likes.length > 0 && <span>{likes.length}</span>}
      </button>

      <button className="tweet-actions__activity">
        <BiPoll />
        <span>169k</span>
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
