import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/slices/signInSlice";
import { StoreTypes } from "./redux/store";
import NavigationLayout from "./layouts/navigationLayout/NavigationLayout";
import TweetDetails from "./pages/tweetDetails/TweetDetails";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import RootLayout from "./layouts/RootLayout";

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
      <Route path="/" element={<RootLayout />}>
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
