import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Feeds from "./containers/feeds/Feeds";
import SignIn from "./pages/signIn/SignIn";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/slices/signInSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  //  SET CURRENT USER STATE ON AUTH STATE CHANGE
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setCurrentUser());
    }
    return;
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home children={<Feeds />} />} />
        <Route path="login" element={<SignIn />} />
      </Route>
    )
  );

  return <div className="App">{<RouterProvider router={router} />}</div>;
};

export default App;
