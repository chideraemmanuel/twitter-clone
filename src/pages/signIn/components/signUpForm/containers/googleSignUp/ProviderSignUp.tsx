import { useSelector } from "react-redux";
import "./ProviderSignUp.scss";
import { StoreTypes } from "../../../../../../redux/store";
import ProviderSignUpStepOne from "./stepOne/ProviderSignUpStepOne";
import ProviderSignUpStepTwo from "./stepTwo/ProviderSignUpStepTwo";
import ProviderSignUpStepThree from "./stepThree/ProviderSignUpStepThree";
import ProviderSignUpStepFour from "./stepFour/ProviderSignUpStepFour";
import ProviderSignUpStepFive from "./stepFive/ProviderSignUpStepFive";

const ProviderSignUp: React.FC = () => {
  const {
    signUpForm: {
      type: { provider },
    },
  } = useSelector((store: StoreTypes) => store.signIn);

  return (
    <div className="providerSignUp">
      {provider.active && provider.step === 1 && <ProviderSignUpStepOne />}
      {provider.active && provider.step === 2 && <ProviderSignUpStepTwo />}
      {provider.active && provider.step === 3 && <ProviderSignUpStepThree />}
      {provider.active && provider.step === 4 && <ProviderSignUpStepFour />}
      {provider.active && provider.step === 5 && <ProviderSignUpStepFive />}
    </div>
  );
};

export default ProviderSignUp;
