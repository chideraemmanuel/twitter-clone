import { IoEllipsisHorizontal } from "react-icons/io5";
import "./Trend.scss";

const Trend: React.FC = () => {
  return (
    <div className="trend">
      <div className="trend__info">
        <span>Technology - Trending</span>
        <h3>Typescript</h3>
        <span>1,355 Tweets</span>
      </div>

      <button className="trend__ellipsis">
        <IoEllipsisHorizontal />
      </button>
    </div>
  );
};

export default Trend;
