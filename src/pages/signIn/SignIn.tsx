import { Navigate, useLocation } from "react-router-dom";
import "./SignIn.scss";
import CardLayout from "./components/card/CardLayout";
import LoginForm from "./components/loginForm/LoginForm";
import SignUpForm from "./components/signUpForm/SignUpForm";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../redux/store";
import PreviousStepIcon from "./components/previousStepIcon/PreviousStepIcon";
import {
  previousLoginStep,
  previousManualSignInStep,
  previousProviderSignInStep,
} from "../../redux/slices/signInSlice";
import FormHeader from "./components/formHeader/FormHeader";

const SignIn: React.FC = () => {
  const { signUpForm, loginForm, currentUser } = useSelector(
    (store: StoreTypes) => store.signIn
  );

  const { manual, provider } = signUpForm.type;

  //  NAVIGATE TO HOMEPAGE IF USER IS AVAILABLE (PROTECTING THE ROUTE)
  const location = useLocation();
  const redirectPath = location.state?.path || "/home";

  if (currentUser.active) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <>
      {!currentUser.isLoading && (
        <div className="sign-in">
          {/* ONLY RENDER ANYTHING WHEN USER ISN'T LOADING */}

          <CardLayout>
            <FormHeader
              icon={
                // ONLY SHOW PREVIOUS STEP ICON WHEN NEEDED (SIGN UP)
                manual.step > 0 || provider.step > 0 ? (
                  <PreviousStepIcon
                    action={
                      manual.active
                        ? previousManualSignInStep
                        : previousProviderSignInStep
                    }
                  />
                ) : // ONLY SHOW PREVIOUS STEP ICON WHEN NEEDED (LOGIN)
                loginForm.step > 1 ? (
                  <PreviousStepIcon action={previousLoginStep} />
                ) : null
              }
            />

            {signUpForm.active && <SignUpForm />}
            {loginForm.active && <LoginForm />}
          </CardLayout>
        </div>
      )}
    </>
  );
};

export default SignIn;
