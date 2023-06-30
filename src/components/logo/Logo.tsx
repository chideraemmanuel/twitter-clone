import "./Logo.scss";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <FaTwitter />
    </Link>
  );
};

export default Logo;
