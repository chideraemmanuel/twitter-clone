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
import {
  previousManualSignInStep,
  previousProviderSignInStep,
} from "../../redux/slices/signInSlice";
import FormHeader from "./components/formHeader/FormHeader";

const SignIn: React.FC = () => {
  const { signUpForm, currentUser } = useSelector(
    (store: StoreTypes) => store.signIn
  );

  const { manual, provider } = signUpForm.type;

  //  NAVIGATE TO HOMEPAGE IF USER IS AVAILABLE (PROTECTING THE ROUTE)
  if (currentUser.active) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="sign-in">
      {/* ONLY RENDER ANYTHING WHEN USER ISN'T LOADING */}

      {!currentUser.isLoading && (
        <CardLayout>
          <FormHeader
            icon={
              // ONLY SHOW PREVIOUS STEP ICON WHEN NEEDED
              manual.step > 0 || provider.step > 0 ? (
                <PreviousStepIcon
                  action={
                    manual.active
                      ? previousManualSignInStep
                      : previousProviderSignInStep
                  }
                />
              ) : null
            }
          />

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
