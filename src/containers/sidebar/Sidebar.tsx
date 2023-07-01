import "./Sidebar.scss";
import GetVerified from "./components/getVerified/GetVerified";
import Trends from "./components/trends/Trends";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <span>Search box here!</span>

      <GetVerified />

      <Trends />
    </div>
  );
};

export default Sidebar;
