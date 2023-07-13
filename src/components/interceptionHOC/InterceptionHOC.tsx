import { FaTimes } from "react-icons/fa";
import "./InterceptionHOC.scss";
import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";

interface Props {
  children: React.ReactNode;
  closeInterceptionAction: any;
}

const InterceptionHOC: React.FC<Props> = ({
  children,
  closeInterceptionAction,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="interception">
      <div className="interception__box">
        <div
          className="interception__box--icon"
          onClick={() => dispatch(closeInterceptionAction())}
        >
          {/* <FaTimes /> */}
          <FiX />
        </div>

        {children}
      </div>
    </div>
  );
};

export default InterceptionHOC;
