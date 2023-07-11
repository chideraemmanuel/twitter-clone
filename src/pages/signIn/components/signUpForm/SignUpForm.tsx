import "./SignUpForm.scss";
import SignUpInitial from "./containers/initial/SignUpInitial";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../../../redux/store";
import ManualSignUp from "./containers/manualSignUp/ManualSignUp";
import ProviderSignUp from "./containers/googleSignUp/ProviderSignUp";

const SignUpForm: React.FC = () => {
  const {
    signUpForm: {
      active,
      initialPageActive,
      type: { manual, provider },
    },
  } = useSelector((store: StoreTypes) => store.signIn);

  return (
    <div className="sign-up-form">
      {active && initialPageActive && <SignUpInitial />}

      {manual.active && <ManualSignUp />}
      {provider.active && <ProviderSignUp />}
    </div>
  );
};

export default SignUpForm;
