import "./CardLayout.scss";
interface Props {
  children: React.ReactNode;
}

const CardLayout: React.FC<Props> = ({ children }) => {
  return <div className="card-layout">{children}</div>;
};

export default CardLayout;
