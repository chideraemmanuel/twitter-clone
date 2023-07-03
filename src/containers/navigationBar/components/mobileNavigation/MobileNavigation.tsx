import { FaFeather } from "react-icons/fa";
import Logo from "../../../../components/logo/Logo";
import { navigationConstants } from "../../constants";
import NavigationLink from "../navigationLink/NavigationLink";
import "./MobileNavigation.scss";
import ProfileImage from "../../../../components/profileImage/ProfileImage";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../redux/store";
import { closeMobileMenu } from "../../../../redux/slices/navigationSlice";
import ProfileImageAlt from "../../../../components/profileImageAlt/ProfileImageAlt";

const MobileNavigation: React.FC = () => {
  const { mobileMenuOpen } = useSelector(
    (store: StoreTypes) => store.navigation
  );

  const dispatch = useDispatch();

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="mobileNavigation-overlay"
          onClick={() => dispatch(closeMobileMenu())}
        ></div>
      )}

      <div
        className={
          mobileMenuOpen ? "mobileNavigation active" : "mobileNavigation"
        }
      >
        {/* <div className="mobileNavigation__logo">
        <Logo />
    </div> */}
        <div className="mobileNavigation__profile">
          <ProfileImageAlt />
          <div>
            <span>Chidera Emmanuel</span>
            <span>@chideraemmanuel</span>
          </div>
        </div>

        <div className="mobileNavigation__navigation">
          <ul className="mobileNavigation__navigation--links">
            {navigationConstants.map((item, index) => (
              <li key={index}>
                <NavigationLink {...item} />
              </li>
            ))}
          </ul>

          <button className="mobileNavigation__navigation--button">
            Tweet
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
