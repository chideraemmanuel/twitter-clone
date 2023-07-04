import {
  mobileSideMenuConstants,
  navigationConstants,
} from "../../../constants";
import "./MobileSideMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../../redux/store";
import { closeMobileMenu } from "../../../../../redux/slices/navigationSlice";
import ProfileImageAlt from "../../../../../components/profileImageAlt/ProfileImageAlt";
import NavigationLink from "../../navigationLink/NavigationLink";

const MobileSideMenu: React.FC = () => {
  const { mobileMenuOpen } = useSelector(
    (store: StoreTypes) => store.navigation
  );

  const dispatch = useDispatch();

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="mobileSideMenu-overlay"
          onClick={() => dispatch(closeMobileMenu())}
        ></div>
      )}

      <div
        className={mobileMenuOpen ? "mobileSideMenu active" : "mobileSideMenu"}
      >
        {/* <div className="mobileSideMenu__logo">
        <Logo />
    </div> */}
        <div className="mobileSideMenu__profile">
          <ProfileImageAlt />
          <div className="mobileSideMenu__profile--name">
            <span>Chidera Emmanuel</span>
            <span>@chideraemmanuel</span>
          </div>
        </div>

        <div className="mobileSideMenu__navigation">
          <ul className="mobileSideMenu__navigation--links">
            {mobileSideMenuConstants.map((item, index) => (
              <li key={index}>
                <NavigationLink {...item} />
              </li>
            ))}
          </ul>

          {/* <button className="mobileSideMenu__navigation--button">Tweet</button> */}
        </div>
      </div>
    </>
  );
};

export default MobileSideMenu;
