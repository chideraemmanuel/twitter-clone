import { FaFeather } from "react-icons/fa";
import Logo from "../../../../components/logo/Logo";
import { navigationConstants } from "../../constants";
import NavigationLink from "../navigationLink/NavigationLink";
import "./DesktopNavigation.scss";
import { useDispatch } from "react-redux";
import { openTweetCreation } from "../../../../redux/slices/tweetSlice";
import AccountAction from "../accountAction/AccountAction";
import { auth } from "../../../../config/firebase";

const DesktopNavigation: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="desktopNavigation">
      <div className="desktopNavigation__logo">
        <Logo />
      </div>

      <div className="desktopNavigation__navigation">
        <ul className="desktopNavigation__navigation--links">
          {navigationConstants.map((item, index) => (
            <li key={index}>
              <NavigationLink {...item} />
            </li>
          ))}
        </ul>

        <button
          className="desktopNavigation__navigation--button"
          onClick={() => dispatch(openTweetCreation())}
        >
          <FaFeather />
          <span>Tweet</span>
        </button>
      </div>

      {auth.currentUser && <AccountAction />}
    </div>
  );
};

export default DesktopNavigation;
