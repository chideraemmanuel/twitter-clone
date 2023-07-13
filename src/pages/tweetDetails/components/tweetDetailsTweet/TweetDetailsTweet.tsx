import Options from "../../../../components/options/Options";
import ProfileImage from "../../../../components/profileImage/ProfileImage";
import "./TweetDetailsTweet.scss";

const TweetDetailsTweet: React.FC = () => {
  return (
    <div className="tweetDetailsTweet">
      <div className="tweetDetailsTweet__header">
        <div className="tweetDetailsTweet__header--author">
          <ProfileImage />

          <div className="tweetDetailsTweet__header--author_name">
            <h4>Chidera Emmanuel</h4>
            <span>@chideraemmanuel</span>
          </div>
        </div>

        <Options />
      </div>

      <div className="tweetDetailsTweet__content">
        <p className="tweetDetailsTweet__content--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          accusantium ipsum voluptas nihil recusandae. Laboriosam expedita
          doloremque qui praesentium adipisci. Lorem ipsum dolor sit amet
          <br />
          consectetur adipisicing elit. Perspiciatis, doloremque?
        </p>

        <div className="tweetDetailsTweet__content--date">
          <span>10:10 PM</span>
          <span>•</span>
          <span>Jul 12, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default TweetDetailsTweet;
