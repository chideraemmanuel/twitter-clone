import "./ReplyTweet.scss";
import InterceptionHOC from "../../../../../../components/interceptionHOC/InterceptionHOC";
import ProfileImageAlt from "../../../../../../components/profileImageAlt/ProfileImageAlt";
import { Link } from "react-router-dom";
import TweetInput from "../../../../../createTweet/components/tweetInput/TweetInput";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../../../../../redux/store";
import {
  closeReplyTweet,
  setReplyTweetContent,
} from "../../../../../../redux/slices/tweetSlice";

const isPosting = false;

const ReplyTweet: React.FC = () => {
  const { replyTweetContent } = useSelector((store: StoreTypes) => store.tweet);

  const handleReplyTweet = () => {
    console.log("Replied!");
  };

  return (
    <InterceptionHOC closeInterceptionAction={closeReplyTweet}>
      <div className="replyTweet">
        <ProfileImageAlt />

        <div className="replyTweet__info">
          <div className="replyTweet__info--header">
            <span>Whatever the name is</span>
            <span>@whatever</span>
            {/* {data && <p>{data.name}</p>}
              {data && <span>@{data.username}</span>} */}
            <span>- 19h</span>
          </div>

          {/* <p className="replyTweet__info--text">{replyTweetContent.text}</p> */}
          <p className="replyTweet__info--text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            iusto eligendi? Ad veritatis neque explicabo alias temporibus
            nostrum. Ipsam beatae earum, autem atque, ab deserunt, quo odio sunt
            assumenda neque consectetur eum reprehenderit a corporis. Officia
            iusto facere repellendus similique.
          </p>

          <span className="replyTweet__info--replyingTo">
            Replying to <Link to="/">@whatever</Link>
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
          disabled={replyTweetContent === "" || isPosting ? true : false}
          onClick={handleReplyTweet}
        >
          {isPosting ? "Posting reply..." : "Reply"}
        </button>
      </form>
    </InterceptionHOC>
  );
};

export default ReplyTweet;
