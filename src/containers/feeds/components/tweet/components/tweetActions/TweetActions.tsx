import "./TweetActions.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRetweet, FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { LiaRetweetSolid, LiaPollSolid } from "react-icons/lia";
import { BiPoll, BiUpload } from "react-icons/bi";
import { BsHeart, BsHeartFill, BsUpload } from "react-icons/bs";
import { FiShare, FiUpload } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";
import { MdOutlinePoll, MdOutlineFileUpload } from "react-icons/md";
import {
  TweetContentTypes,
  TweetStatsTypes,
} from "../../../../../../types/tweetTypes";
// import { likeTweet } from "../../../../../../utils/likeTweet";
import { auth } from "../../../../../../config/firebase";
import { useDispatch } from "react-redux";
import {
  openReplyTweet,
  resetTweetReplyContent,
  setRepliedTweetContent,
} from "../../../../../../redux/slices/tweetSlice";
import { useLikeTweet } from "../../../../../../hooks/useLikeTweet";
import { useFetchTweet } from "../../../../../../hooks/useFetchTweet";

interface Props {
  tweetStats: TweetStatsTypes;
  tweetId: string;
  tweetContent: TweetContentTypes;
  tweetAuthor: {
    name: string;
    username: string;
  };
}

const TweetActions: React.FC<Props> = ({
  tweetStats,
  tweetId,
  tweetContent,
  tweetAuthor,
}) => {
  const { comments, likes } = tweetStats;

  // console.log(tweetAuthor);

  const dispatch = useDispatch();

  const { mutate: likeTweet, isLoading, isError } = useLikeTweet();

  const handleLike = () => {
    if (!auth.currentUser) return;
    likeTweet({
      tweetId,
      tweetLikerUID: auth.currentUser.uid,
    });
  };

  const handleComment = () => {
    // const { data: tweetData, isLoading: isTweetDataLoading } =
    //   useFetchTweet(tweetId);

    dispatch(
      setRepliedTweetContent({
        id: tweetId,
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
