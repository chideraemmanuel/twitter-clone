import { IoEllipsisHorizontal } from "react-icons/io5";
import "./Trend.scss";
import { Link } from "react-router-dom";

const Trend: React.FC = () => {
  return (
    <div className="trend">
      <Link to="/" className="trend__info">
        <span>Technology - Trending</span>
        <h3>Typescript</h3>
        <span>1,355 Tweets</span>
      </Link>

      <button className="trend__ellipsis">
        <IoEllipsisHorizontal />
      </button>
    </div>
  );
};

export default Trend;
