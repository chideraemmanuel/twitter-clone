import { useDispatch } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ManualSignUpStepTwo.scss";
import { nextManualSignInStep } from "../../../../../../../redux/slices/signInSlice";

const ManualSignUpStepTwo: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="manualSignUpStepTwo">
      <div className="manualSignUpStepTwo__info">
        <FormHeader text="Customize your experience" />
      </div>

      <Button
        text="Next"
        dark={true}
        onClick={() => dispatch(nextManualSignInStep())}
      />
    </div>
  );
};

export default ManualSignUpStepTwo;
