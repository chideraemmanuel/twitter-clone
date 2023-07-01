import { Link } from "react-router-dom";
import "./GetVerified.scss";

const GetVerified: React.FC = () => {
  return (
    <div className="get-verified">
      <h2>Get Verified</h2>
      <h3>Subscribe to unlock new features</h3>
      <Link to="/">Get verified</Link>
    </div>
  );
};

export default GetVerified;
