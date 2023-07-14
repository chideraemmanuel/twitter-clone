import { FaRegComment, FaRetweet } from "react-icons/fa";
import "./TweetReplyActions.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { TweetTypes } from "../../../../types/tweetTypes";
import { auth } from "../../../../config/firebase";
import { useLikeTweetReply } from "../../../../hooks/useLikeTweetReply";

interface Props {
  reply: TweetTypes;
  tweetAuthor: {
    name: string;
    username: string;
  };
  originalTweetId: string;
}

const TweetReplyActions: React.FC<Props> = ({
  reply,
  tweetAuthor,
  originalTweetId,
}) => {
  const { tweetStats, id, tweetContent } = reply;
  console.log(reply);
  const { comments, likes } = tweetStats;

  // CHECK IF CURRENT USER ALREADY LIKED TWEET
  const findLikerUID = tweetStats.likes.find(
    (like) => like.replyLikerUID === auth.currentUser?.uid
  );

  const { mutate: likeTweetReply, isLoading, isError } = useLikeTweetReply();

  const handleLike = () => {
    if (!auth.currentUser) return;
    likeTweetReply({
      originalTweetId,
      replyId: id,
      replyLikerUID: auth.currentUser.uid,
    });
  };

  return (
    <div className="tweetReplyActions">
      <button
        className="tweetReplyActions__comment"
        //   onClick={handleComment}
      >
        <FaRegComment />
        {comments > 0 && <span>{comments}</span>}
      </button>

      <button className="tweetReplyActions__retweet">
        <FaRetweet />
        {/* <span>638</span> */}
      </button>

      <button
        className={
          findLikerUID
            ? "tweetReplyActions__like liked"
            : "tweetReplyActions__like"
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

      <button className="tweetReplyActions__activity">
        <BiPoll />
        {/* <span>169k</span> */}
      </button>

      <button className="tweetReplyActions__share">
        <FiUpload />
      </button>
    </div>
  );
};

export default TweetReplyActions;
