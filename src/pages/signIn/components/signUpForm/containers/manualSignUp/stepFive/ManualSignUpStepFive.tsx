import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ManualSignUpStepFive.scss";

const ManualSignUpStepFive: React.FC = () => {
  return (
    <div className="manualSignUpStepFive">
      <div className="">
        <FormHeader text="Create your account" />
        {/* CONFIRMATION */}
      </div>

      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni non
          aliquam cum nesciunt, ea voluptate laboriosam minus sunt ut repellat
          doloremque, quia reprehenderit assumenda. Explicabo debitis unde
          necessitatibus at accusantium!
        </p>

        <Button
          text="Sign up"
          dark={true}
          onClick={() => console.log("hurray!!!")}
        />
      </div>
    </div>
  );
};

export default ManualSignUpStepFive;
