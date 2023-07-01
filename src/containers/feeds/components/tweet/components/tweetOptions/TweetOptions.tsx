import { Link } from "react-router-dom";
import "./TweetOptions.scss";
import { FiUser } from "react-icons/fi";

const TweetOptions: React.FC = () => {
  return (
    <div className="tweet-options">
      <Link to="/">
        <FiUser />
        <span>Not interested in Based on your likes</span>
      </Link>

      <Link to="/">
        <FiUser />
        <span>Not interested in Based on your likes</span>
      </Link>

      <Link to="/">
        <FiUser />
        <span>Not interested in Based on your likes</span>
      </Link>

      <Link to="/">
        <FiUser />
        <span>Not interested in Based on your likes</span>
      </Link>

      <Link to="/">
        <FiUser />
        <span>Not interested in Based on your likes</span>
      </Link>

      <Link to="/">
        <FiUser />
        <span>Not interested in Based on your likes</span>
      </Link>

      <Link to="/">
        <FiUser />
        <span>Not interested in Based on your likes</span>
      </Link>

      <Link to="/">
        <FiUser />
        <span>Not interested in Based on your likes</span>
      </Link>
    </div>
  );
};

export default TweetOptions;
