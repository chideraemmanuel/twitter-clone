import Tweet from "../../../../containers/feeds/components/tweet/Tweet";
import { useGetTweetReplies } from "../../../../hooks/useGetTweetReplies";
import TweetReply from "../tweetReply/TweetReply";
import "./TweetDetailsReplies.scss";

interface Props {
  originalTweetId: string;
}

const TweetDetailsReplies: React.FC<Props> = ({ originalTweetId }) => {
  const { data: tweetReplies, isLoading } = useGetTweetReplies(originalTweetId);
  //   console.log(tweetReplies);

  return (
    <div className="tweetDetailsReplies">
      {tweetReplies?.map((tweetReply) => (
        <TweetReply reply={tweetReply} originalTweetId={originalTweetId} />
      ))}
    </div>
  );
};

export default TweetDetailsReplies;
