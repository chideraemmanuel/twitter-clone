import { Navigate } from "react-router-dom";
import NavigationBar from "../../containers/navigationBar/NavigationBar";
import Sidebar from "../../containers/sidebar/Sidebar";
import "./Home.scss";
import { auth } from "../../config/firebase";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../redux/store";

interface Props {
  children: React.ReactNode;
}

const user = false;

const Home: React.FC<Props> = ({ children }) => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // if (!auth.currentUser) {
  //   return <Navigate to="/login" replace />;
  // }
  // console.log(auth.currentUser);

  return (
    <div className="home">
      <NavigationBar />

      <main className="home__main">{children}</main>

      <Sidebar />
    </div>
  );
};

export default Home;
