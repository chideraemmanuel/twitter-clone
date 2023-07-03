import "./ProfileImage.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";

const ProfileImage: React.FC = () => {
  return (
    <Link to={`/`} className="profile-image">
      <img src={avatar} alt="avatar" />
    </Link>
  );
};

export default ProfileImage;
