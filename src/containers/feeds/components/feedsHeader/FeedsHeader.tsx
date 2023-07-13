import { useDispatch } from "react-redux";
import Logo from "../../../../components/logo/Logo";
import ProfileImage from "../../../../components/profileImage/ProfileImage";
import ProfileImageAlt from "../../../../components/profileImageAlt/ProfileImageAlt";
import "./FeedsHeader.scss";
import { openMobileMenu } from "../../../../redux/slices/navigationSlice";
import { useState } from "react";

const FeedsHeader: React.FC = () => {
  // const [feedsType, setFeedsType] = useState<"for you" | "following">(
  //   "for you"
  // );
  const dispatch = useDispatch();

  return (
    <div className="feeds-header">
      <div className="feeds-header__filter">
        <div className="feeds-header__filter--button">
          <input
            type="radio"
            name="feedFilter"
            id="forYou"
            // checked={feedsType === 'for you'}
            onChange={(e) => console.log(e.target.value)}
          />
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
