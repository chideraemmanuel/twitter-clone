import "./PreviousStepIcon.scss";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch } from "react-redux";

const PreviousStepIcon: React.FC<{ action: any }> = ({ action }) => {
  const dispatch = useDispatch();

  return (
    <div className="previousStepIcon" onClick={() => dispatch(action())}>
      <FiArrowLeft />
    </div>
  );
};

export default PreviousStepIcon;
