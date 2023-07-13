import { FaTwitter } from "react-icons/fa";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./Home.scss";
import Logo from "../../components/logo/Logo";
import Feeds from "../../containers/feeds/Feeds";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../redux/store";
import { Navigate } from "react-router-dom";

const Home: React.FC = () => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);

  // if (!currentUser.active) {
  //   return <Navigate to="/login" replace />;
  // }

  return (
    <div className="home">
      <PageHeader title="Home" mobileHeader={<Logo />} />

      <main className="home__main">
        <Feeds />
      </main>
    </div>
  );
};

export default Home;
