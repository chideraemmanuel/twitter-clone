import { useDispatch } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ManualSignUpStepThree.scss";
import { nextManualSignInStep } from "../../../../../../../redux/slices/signInSlice";
import Input from "../../../../input/Input";

const ManualSignUpStepThree: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="manualSignUpStepThree">
      <div className="manualSignUpStepThree__form">
        <FormHeader text="What should we call you?" />
        <p>Your @username is unique. You can always change it later.</p>

        <Input type="text" label="Username" />
      </div>

      <Button
        text="Next"
        dark={true}
        onClick={() => dispatch(nextManualSignInStep())}
      />
    </div>
  );
};

export default ManualSignUpStepThree;
