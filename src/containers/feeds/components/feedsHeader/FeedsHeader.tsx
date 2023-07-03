import { useDispatch } from "react-redux";
import Logo from "../../../../components/logo/Logo";
import ProfileImage from "../../../../components/profileImage/ProfileImage";
import ProfileImageAlt from "../../../../components/profileImageAlt/ProfileImageAlt";
import "./FeedsHeader.scss";
import { openMobileMenu } from "../../../../redux/slices/navigationSlice";

const FeedsHeader: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="feeds-header">
      <div className="feeds-header__top">
        <h1>Home</h1>

        <div className="feeds-header__top--mobile">
          <ProfileImageAlt onClick={() => dispatch(openMobileMenu())} />
          <Logo />
        </div>
      </div>

      <div className="feeds-header__filter">
        <div className="feeds-header__filter--button">
          <input type="radio" name="feedFilter" id="forYou" checked />
          <label htmlFor="forYou">
            <span>For you</span>
          </label>
        </div>

        <div className="feeds-header__filter--button">
          <input type="radio" name="feedFilter" id="following" />
          <label htmlFor="following">
            <span>Following</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FeedsHeader;
