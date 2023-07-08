import "./FormTitle.scss";

const FormTitle: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="form-title">{text}</h2>;
};

export default FormTitle;
