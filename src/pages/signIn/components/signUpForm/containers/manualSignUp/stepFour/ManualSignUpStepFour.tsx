import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormTitle from "../../../../formTitle/FormTitle";
import "./ManualSignUpStepFour.scss";
import {
  nextManualSignInStep,
  setPassword,
} from "../../../../../../../redux/slices/signInSlice";
import Input from "../../../../input/Input";
import { StoreTypes } from "../../../../../../../redux/store";

const ManualSignUpStepFour: React.FC = () => {
  const dispatch = useDispatch();

  const { password } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  const handleNext = () => {
    if (password === "") {
      alert("Please enter a password");
      return;
    } else if (password.length < 6) {
      alert("Password is too short");
      return;
    }

    dispatch(nextManualSignInStep());
  };

  return (
    <div className="manualSignUpStepFour">
      <div className="manualSignUpStepFour__form">
        <FormTitle text="Pick a password" />
        <p>Your password will be used to access your account</p>

        <Input
          type="password"
          label="Enter password"
          value={password}
          setValue={setPassword}
        />
        {/* <Input type="password" label="confirm password" /> */}
      </div>

      <Button text="Next" type="dark" onClick={handleNext} />
    </div>
  );
};

export default ManualSignUpStepFour;
