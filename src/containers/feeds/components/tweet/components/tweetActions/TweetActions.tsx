import "./TweetActions.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRetweet, FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { LiaRetweetSolid, LiaPollSolid } from "react-icons/lia";
import { BiPoll, BiUpload } from "react-icons/bi";
import { BsHeart, BsHeartFill, BsUpload } from "react-icons/bs";
import { FiShare, FiUpload } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";
import { MdOutlinePoll, MdOutlineFileUpload } from "react-icons/md";
import { TweetStats } from "../../../../../../types/tweetTypes";

const TweetActions: React.FC<TweetStats> = ({ likes, comments }) => {
  return (
    <div className="tweet-actions">
      <button className="tweet-actions__comment">
        <FaRegComment />
        {comments.amount > 0 && <span>{comments.amount}</span>}
      </button>

      <button className="tweet-actions__retweet">
        <FaRetweet />
        <span>638</span>
      </button>

      <button className="tweet-actions__like">
        <AiOutlineHeart />
        {likes.amount > 0 && <span>{likes.amount}</span>}
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
