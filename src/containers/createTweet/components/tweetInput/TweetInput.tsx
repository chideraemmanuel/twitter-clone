import "./TweetInput.scss";
import ProfileImageAlt from "../../../../components/profileImageAlt/ProfileImageAlt";

const TweetInput: React.FC = () => {
  return (
    <div className="tweetInput">
      <ProfileImageAlt />
      {/* <input type="text" placeholder="What is happening?!" /> */}
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="What is happening?!"
        autoFocus
      ></textarea>
    </div>
  );
};

export default TweetInput;
