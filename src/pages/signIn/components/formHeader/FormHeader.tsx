import { FaTwitter } from "react-icons/fa";
import "./FormHeader.scss";

interface Props {
  icon: React.ReactNode;
}

const FormHeader: React.FC<Props> = ({ icon }) => {
  return (
    <div className="form-header">
      <div className="form-header__icon">{icon}</div>

      <div className="form-header__logo">
        <FaTwitter />
      </div>
    </div>
  );
};

export default FormHeader;
