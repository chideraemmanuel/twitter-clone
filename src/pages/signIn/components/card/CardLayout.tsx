import { FaTimes } from "react-icons/fa";
import "./CardLayout.scss";
import Logo from "../../../../components/logo/Logo";
import { IconType } from "react-icons";

interface Props {
  children: React.ReactNode;
}

const CardLayout: React.FC<Props> = ({ children }) => {
  return <div className="card-layout">{children}</div>;
};

export default CardLayout;
