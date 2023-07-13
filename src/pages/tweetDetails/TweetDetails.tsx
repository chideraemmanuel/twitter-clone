import { useSelector } from "react-redux";
import "./TweetDetails.scss";
import { StoreTypes } from "../../redux/store";
import { Navigate, useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import { FiArrowLeft, FiChevronLeft } from "react-icons/fi";
import { useGetTweet } from "../../hooks/useGetTweet";

const TweetDetails: React.FC = () => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);

  const { tweetId } = useParams();

  //   if (!currentUser.active) {
  //     return <Navigate to="/login" replace />;
  //   }

  const { data: tweet } = useGetTweet(tweetId);

  return (
    <div className="tweet-details">
      <div className="tweet-details__header">
        <div
          className="tweet-details__header--icon"
          onClick={() => history.back()}
        >
          <FiArrowLeft />
        </div>
        <h2>Tweet</h2>
      </div>
    </div>
  );
};

export default TweetDetails;
