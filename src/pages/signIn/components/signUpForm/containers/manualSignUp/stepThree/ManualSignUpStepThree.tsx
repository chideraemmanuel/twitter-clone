import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ManualSignUpStepThree.scss";
import {
  nextManualSignInStep,
  setUsername,
} from "../../../../../../../redux/slices/signInSlice";
import Input from "../../../../input/Input";
import { StoreTypes } from "../../../../../../../redux/store";

const ManualSignUpStepThree: React.FC = () => {
  const dispatch = useDispatch();

  const { name, email, DOB, username, password } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  return (
    <div className="manualSignUpStepThree">
      <div className="manualSignUpStepThree__form">
        <FormHeader text="What should we call you?" />
        <p>Your @username is unique. You can always change it later.</p>

        <Input
          type="text"
          label="Username"
          value={username}
          setValue={setUsername}
        />
      </div>

      <Button
        text="Next"
        type="dark"
        onClick={() => dispatch(nextManualSignInStep())}
      />
    </div>
  );
};

export default ManualSignUpStepThree;
