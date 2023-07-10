import { Navigate } from "react-router-dom";
import NavigationBar from "../../containers/navigationBar/NavigationBar";
import Sidebar from "../../containers/sidebar/Sidebar";
import "./Home.scss";
import { auth } from "../../config/firebase";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../redux/store";
import MobileTweetButton from "../../containers/navigationBar/components/mobileNavigation/mobileTweetButton/MobileTweetButton";
import CreateTweet from "../../containers/createTweet/CreateTweet";

interface Props {
  children: React.ReactNode;
}

const user = false;

const Home: React.FC<Props> = ({ children }) => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);
  const { isCreatingTweet } = useSelector((store: StoreTypes) => store.tweet);

  //  NAVIGATE TO LOGIN PAGE IF USER IS NOT AVAILABLE (PROTECTING THE ROUTE)
  if (!currentUser.active) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="home">
      <NavigationBar />
      <MobileTweetButton />
      {isCreatingTweet && <CreateTweet />}

      <main className="home__main">{children}</main>

      <Sidebar />
    </div>
  );
};

export default Home;
