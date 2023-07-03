import "./ProfileImageAlt.scss";
import avatar from "../../assets/avatar.jpg";

interface Props {
  onClick?: () => void;
}

const ProfileImageAlt: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="profile-image-alt" onClick={onClick}>
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default ProfileImageAlt;
