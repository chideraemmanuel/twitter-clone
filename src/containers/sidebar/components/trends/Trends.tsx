import "./Trends.scss";
import Trend from "./components/trend/Trend";

const Trends: React.FC = () => {
  return (
    <div className="trends">
      <h2 className="trends__header">Trends for you</h2>

      <div className="trends__list">
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
};

export default Trends;
