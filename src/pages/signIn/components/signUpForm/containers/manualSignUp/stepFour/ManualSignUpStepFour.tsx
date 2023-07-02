import { useDispatch } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ManualSignUpStepFour.scss";
import { nextManualSignInStep } from "../../../../../../../redux/slices/signInSlice";
import Input from "../../../../input/Input";

const ManualSignUpStepFour: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="manualSignUpStepFour">
      <div className="manualSignUpStepFour__form">
        <FormHeader text="Pick a password" />
        <p>Your password will be used to access your account</p>

        <Input type="password" label="Enter password" />
        <Input type="password" label="confirm password" />
      </div>

      <Button
        text="Next"
        dark={true}
        onClick={() => dispatch(nextManualSignInStep())}
      />
    </div>
  );
};

export default ManualSignUpStepFour;
