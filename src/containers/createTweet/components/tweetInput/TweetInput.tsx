import "./TweetInput.scss";
import ProfileImageAlt from "../../../../components/profileImageAlt/ProfileImageAlt";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../redux/store";
import { setTweetContent } from "../../../../redux/slices/tweetSlice";

const TweetInput: React.FC = () => {
  const { tweetContent } = useSelector((store: StoreTypes) => store.tweet);

  const dispatch = useDispatch();

  return (
    <div className="tweetInput">
      <ProfileImageAlt />
      <textarea
        // name=""
        // id=""
        // cols="30"
        // rows="10"
        placeholder="What is happening?!"
        autoFocus
        value={tweetContent}
        onChange={(e) => dispatch(setTweetContent(e.target.value))}
      ></textarea>
    </div>
  );
};

export default TweetInput;
