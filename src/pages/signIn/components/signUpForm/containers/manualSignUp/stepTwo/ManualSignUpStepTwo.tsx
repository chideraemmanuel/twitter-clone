import { useDispatch } from "react-redux";
import Button from "../../../../button/Button";
import FormTitle from "../../../../formTitle/FormTitle";
import "./ManualSignUpStepTwo.scss";
import { nextManualSignInStep } from "../../../../../../../redux/slices/signInSlice";

const ManualSignUpStepTwo: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="manualSignUpStepTwo">
      <div className="manualSignUpStepTwo__info">
        <FormTitle text="Customize your experience" />
      </div>

      <Button
        text="Next"
        type="dark"
        onClick={() => dispatch(nextManualSignInStep())}
      />
    </div>
  );
};

export default ManualSignUpStepTwo;
