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

const App: React.FC = () => {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Home children={<Feeds />} />}>
  //       <Route path="login" element={<SignIn />} />
  //     </Route>
  //   )
  // );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home children={<Feeds />} />} />
        <Route path="login" element={<SignIn />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
