import Spinner from "../../../../components/spinner/Spinner";
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
      {isLoading && <Spinner />}
      {tweetReplies?.map((tweetReply) => (
        // @ts-ignore
        <TweetReply reply={tweetReply} originalTweetId={originalTweetId} />
      ))}
    </div>
  );
};

export default TweetDetailsReplies;
