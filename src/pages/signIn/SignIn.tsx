import { Link, Navigate } from "react-router-dom";
import "./SignIn.scss";
import CardLayout from "./components/card/CardLayout";
import LoginForm from "./components/loginForm/LoginForm";
import SignUpForm from "./components/signUpForm/SignUpForm";
import { auth } from "../../config/firebase";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../redux/store";
import Logo from "../../components/logo/Logo";
import { FaTimes } from "react-icons/fa";
import PreviousStepIcon from "./components/previousStepIcon/PreviousStepIcon";
import { previousManualSignInStep } from "../../redux/slices/signInSlice";

const SignIn: React.FC = () => {
  const { signUpForm, currentUser } = useSelector(
    (store: StoreTypes) => store.signIn
  );

  //  NAVIGATE TO HOMEPAGE IF USER IS AVAILABLE (PROTECTING THE ROUTE)
  if (currentUser.active) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="sign-in">
      <div className="sign-in__overlay"></div>

      {/* ONLY RENDER ANYTHING WHEN USER ISN'T LOADING */}

      {!currentUser.isLoading && (
        <CardLayout
          header={<Logo />}
          icon={<PreviousStepIcon action={previousManualSignInStep} />}
        >
          {signUpForm.active && <SignUpForm />}
          {/* <LoginForm /> */}

          {/* <div className="sign-in__footer">
          <p>
            Don't have an account? <span>Sign up</span>
          </p>
        </div> */}
        </CardLayout>
      )}
    </div>
  );
};

export default SignIn;
