import "./ConfirmationBox.scss";

interface Props {
  label: string;
  value: string;
}

const ConfirmationBox: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="confirmationBox">
      <span>{label}</span>
      <h5>
        {/* render at symbol if label is username */}
        {label === "username" && "@"}
        {value}
      </h5>
    </div>
  );
};

export default ConfirmationBox;
