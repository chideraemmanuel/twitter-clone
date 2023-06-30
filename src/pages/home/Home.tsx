import NavigationBar from "../../containers/navigationBar/NavigationBar";
import Sidebar from "../../containers/sidebar/Sidebar";
import "./Home.scss";

interface Props {
  children: React.ReactNode;
}

const Home: React.FC<Props> = ({ children }) => {
  return (
    <div className="home">
      <NavigationBar />

      <main className="home__main">{children}</main>

      <Sidebar />
    </div>
  );
};

export default Home;
