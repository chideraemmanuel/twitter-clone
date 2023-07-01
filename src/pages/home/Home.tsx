import { Navigate } from "react-router-dom";
import NavigationBar from "../../containers/navigationBar/NavigationBar";
import Sidebar from "../../containers/sidebar/Sidebar";
import "./Home.scss";

interface Props {
  children: React.ReactNode;
}

const user = false;

const Home: React.FC<Props> = ({ children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="home">
      <NavigationBar />

      <main className="home__main">{children}</main>

      <Sidebar />
    </div>
  );
};

export default Home;
