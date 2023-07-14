import Tweet from "../../../../containers/feeds/components/tweet/Tweet";
import { useGetTweetReplies } from "../../../../hooks/useGetTweetReplies";
import "./TweetDetailsReplies.scss";

interface Props {
  tweetId: string;
}

const TweetDetailsReplies: React.FC<Props> = ({ tweetId }) => {
  const { data: tweetReplies, isLoading } = useGetTweetReplies(tweetId);
  //   console.log(tweetReplies);

  return (
    <div className="tweetDetailsReplies">
      {tweetReplies?.map((tweetReply) => (
        <Tweet tweet={tweetReply} />
      ))}
    </div>
  );
};

export default TweetDetailsReplies;
