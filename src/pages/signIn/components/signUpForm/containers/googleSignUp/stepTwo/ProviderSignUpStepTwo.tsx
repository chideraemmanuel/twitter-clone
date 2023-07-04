import { useDispatch } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ProviderSignUpStepTwo.scss";
import { nextProviderSignInStep } from "../../../../../../../redux/slices/signInSlice";

const ProviderSignUpStepTwo: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="providerSignUpStepTwo">
      <div className="providerSignUpStepTwo__info">
        <FormHeader text="Customize your experience" />
      </div>

      <Button
        text="Next"
        type="dark"
        onClick={() => dispatch(nextProviderSignInStep())}
      />
    </div>
  );
};

export default ProviderSignUpStepTwo;
