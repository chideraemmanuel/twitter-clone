import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import Input from "../../../../input/Input";
import "./ManualSignUpStepOne.scss";
import {
  nextManualSignInStep,
  setDOB,
  setEmail,
  setName,
} from "../../../../../../../redux/slices/signInSlice";
import { StoreTypes } from "../../../../../../../redux/store";

const ManualSignUpStepOne: React.FC = () => {
  const dispatch = useDispatch();

  const { name, email, DOB, username, password } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  return (
    <div className="manualSignUpStepOne">
      <div className="manualSignUpStepOne__form">
        <FormHeader text="Create your account" />

        <div className="manualSignUpStepOne__form--inputs">
          <Input type="text" label="Name" value={name} setValue={setName} />
          <Input type="email" label="Email" value={email} setValue={setEmail} />

          {/* <input type="date" name="" id="" /> */}
          <Input type="date" value={DOB} setValue={setDOB} />
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
