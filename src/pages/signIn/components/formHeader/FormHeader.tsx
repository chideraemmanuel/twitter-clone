import "./FormHeader.scss";

const FormHeader: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="form-header">{text}</h2>;
};

export default FormHeader;
