import { FaTimes } from "react-icons/fa";
import "./CardLayout.scss";
import Logo from "../../../../components/logo/Logo";

const CardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="card-layout">
      <FaTimes />
      <Logo />
      {children}
    </div>
  );
};

export default CardLayout;
