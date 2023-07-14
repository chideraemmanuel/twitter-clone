import "./TweetInput.scss";
import ProfileImageAlt from "../../../../components/profileImageAlt/ProfileImageAlt";
import { useDispatch } from "react-redux";

interface Props {
  value: string;
  setValue: any;
  placeholder: string;
}

const TweetInput: React.FC<Props> = ({ value, setValue, placeholder }) => {
  const dispatch = useDispatch();

  return (
    <div className="tweetInput">
      <ProfileImageAlt />
      <textarea
        // name=""
        // id=""
        // cols="30"
        // rows="10"
        placeholder={placeholder}
        // autoFocus
        value={value}
        onChange={(e) => dispatch(setValue(e.target.value))}
      ></textarea>
    </div>
  );
};

export default TweetInput;
