import { FaTimes } from "react-icons/fa";
import "./CardLayout.scss";
import Logo from "../../../../components/logo/Logo";
import { IconType } from "react-icons";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  icon?: React.ReactNode;
  iconClickHandler?: () => void;
}

const CardLayout: React.FC<Props> = ({ children, header, icon }) => {
  return (
    <div className="card-layout">
      <div className="card-layout__icon">{icon}</div>
      <div className="card-layout__header">{header}</div>
      <div className="card-layout__body">{children}</div>
    </div>
  );
};

export default CardLayout;
