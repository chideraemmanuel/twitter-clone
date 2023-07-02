import { FaTimes } from "react-icons/fa";
import "./CardLayout.scss";
import Logo from "../../../../components/logo/Logo";
import { IconType } from "react-icons";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  icon?: IconType;
  iconClickHandler?: () => void;
}

const CardLayout: React.FC<Props> = ({ children, header, icon: Icon }) => {
  return (
    <div className="card-layout">
      {Icon && <Icon />}
      <div className="card-layout__header">{header}</div>
      {children}
    </div>
  );
};

export default CardLayout;
