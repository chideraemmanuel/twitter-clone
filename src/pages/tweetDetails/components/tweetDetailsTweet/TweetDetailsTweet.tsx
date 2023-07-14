import { useSelector } from "react-redux";
import Options from "../../../../components/options/Options";
import ProfileImage from "../../../../components/profileImage/ProfileImage";
import "./TweetDetailsTweet.scss";
import { StoreTypes } from "../../../../redux/store";
import { TweetTypes } from "../../../../types/tweetTypes";
import moment from "moment";

interface Props {
  tweet: TweetTypes;
  tweetAuthor: {
    name: string;
    username: string;
  };
}

const TweetDetailsTweet: React.FC<Props> = ({ tweet, tweetAuthor }) => {
  // const { tweetContent, tweetAuthorUID, createdAt, } = useSelector((store: StoreTypes) => store.tweet.tweetDetails)

  const { tweetContent, createdAt } = tweet;

  return (
    <div className="tweetDetailsTweet">
      <div className="tweetDetailsTweet__header">
        <div className="tweetDetailsTweet__header--author">
          <ProfileImage />

          <div className="tweetDetailsTweet__header--author_name">
            {/* <h4>Chidera Emmanuel</h4>
            <span>@chideraemmanuel</span> */}
            <h4>{tweetAuthor.name}</h4>
            <span>@{tweetAuthor.username}</span>
          </div>
        </div>

        <Options />
      </div>

      <div className="tweetDetailsTweet__content">
        <p className="tweetDetailsTweet__content--text">{tweetContent.text}</p>

        <div className="tweetDetailsTweet__content--date">
          {/* <span>{createdAt?.toDate().getTime()}</span> */}
          <span>{moment(createdAt?.toDate()).format("h:mm a")}</span>
          <span>•</span>
          <span>{moment(createdAt?.toDate()).format("MMM Do, YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default TweetDetailsTweet;
