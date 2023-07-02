import { useDispatch } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import Input from "../../../../input/Input";
import "./ManualSignUpStepOne.scss";
import { nextManualSignInStep } from "../../../../../../../redux/slices/signInSlice";

const ManualSignUpStepOne: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="manualSignUpStepOne">
      <div className="manualSignUpStepOne__form">
        <FormHeader text="Create your account" />

        <div className="manualSignUpStepOne__form--inputs">
          <Input type="text" label="Name" />
          <Input type="email" label="Email" />

          {/* <input type="date" name="" id="" /> */}
          <Input type="date" />
        </div>
      </div>

      <Button
        text="Next"
        dark={true}
        onClick={() => dispatch(nextManualSignInStep())}
      />
    </div>
  );
};

export default ManualSignUpStepOne;
