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
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  startProviderSignUp,
} from "./redux/slices/signInSlice";
import { StoreTypes } from "./redux/store";
import { subscribe } from "./utils/onAuthStateChange";
import NavigationLayout from "./layouts/navigationLayout/NavigationLayout";
import Router from "./pages/Router";
import TweetDetails from "./pages/tweetDetails/TweetDetails";
import ProtectedRoutes from "./pages/ProtectedRoutes";

const App: React.FC = () => {
  const dispatch = useDispatch();
  // signOut(auth);
  // console.log(auth);

  const { providerId } = useSelector((store: StoreTypes) => store.signIn);

  //  SET CURRENT USER STATE ON AUTH STATE CHANGE
  onAuthStateChanged(auth, (user) => {
    // if (user && !user.emailVerified) {
    //   dispatch(setCurrentUser());
    // }

    // if (user) {
    //   dispatch(setCurrentUser(true));
    // } else {
    //   dispatch(setCurrentUser(false));
    // }

    if (user && !user.emailVerified && !providerId) {
      dispatch(setCurrentUser(true));
    } else if (user && providerId === "google.com") {
      // dispatch(startProviderSignUp({ provider: "google" }));
      // dispatch(setCurrentUser(false));
      // SET PROVIDERID, MAYBE
    } else if (user && providerId === "apple.com") {
      // dispatch(startProviderSignUp({ provider: "google" }));
    } else if (!user) {
      dispatch(setCurrentUser(false));
    } else {
      dispatch(setCurrentUser(false));
    }

    // console.log(user);

    return;
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Router />} />

        <Route element={<ProtectedRoutes />}>
          {/* HOME PAGE */}
          <Route path="home" element={<NavigationLayout />}>
            <Route index element={<Home />} />
          </Route>
          {/* TWEET DETAILS */}
          <Route path="tweet/:tweetId" element={<NavigationLayout />}>
            <Route index element={<TweetDetails />} />
          </Route>
        </Route>
        {/* LOGIN PAGE */}
        <Route path="login" element={<SignIn />} />
      </Route>
    )
  );

  return <div className="App">{<RouterProvider router={router} />}</div>;
};

export default App;
