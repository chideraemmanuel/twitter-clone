import { useSelector } from "react-redux";
import "./ManualSignUp.scss";
import ManualSignUpStepOne from "./stepOne/ManualSignUpStepOne";
import ManualSignUpStepThree from "./stepThree/ManualSignUpStepThree";
import ManualSignUpStepTwo from "./stepTwo/ManualSignUpStepTwo";
import { StoreTypes } from "../../../../../../redux/store";
import ManualSignUpStepFour from "./stepFour/ManualSignUpStepFour";
import ManualSignUpStepFive from "./stepFive/ManualSignUpStepFive";

const ManualSignUp: React.FC = () => {
  const {
    signUpForm: {
      type: { manual },
    },
  } = useSelector((store: StoreTypes) => store.signIn);

  return (
    <div className="manualSignUp">
      {manual.active && manual.step === 1 && <ManualSignUpStepOne />}
      {manual.active && manual.step === 2 && <ManualSignUpStepTwo />}
      {manual.active && manual.step === 3 && <ManualSignUpStepThree />}
      {manual.active && manual.step === 4 && <ManualSignUpStepFour />}
      {manual.active && manual.step === 5 && <ManualSignUpStepFive />}
    </div>
  );
};

export default ManualSignUp;
