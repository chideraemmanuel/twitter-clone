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

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          veniam consectetur illo cupiditate ratione alias repudiandae minima
          obcaecati pariatur? Sed labore quaerat, magnam optio vel
          necessitatibus repellat est neque in.
        </p>
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
