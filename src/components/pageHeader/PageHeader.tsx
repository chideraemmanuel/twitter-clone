import { useDispatch } from "react-redux";
import "./PageHeader.scss";
import ProfileImageAlt from "../profileImageAlt/ProfileImageAlt";
import { openMobileMenu } from "../../redux/slices/navigationSlice";

interface Props {
  title: string;
  mobileHeader: React.ReactNode;
}

const PageHeader: React.FC<Props> = ({ title, mobileHeader }) => {
  const dispatch = useDispatch();

  return (
    <div className="page-header">
      <div className="page-header__desktop">
        <h2 className="page-header__desktop--title">{title}</h2>
      </div>
      <div className="page-header__mobile">
        <ProfileImageAlt onClick={() => dispatch(openMobileMenu())} />
        <div className="page-header__mobile--header">{mobileHeader}</div>
      </div>
    </div>
  );
};

export default PageHeader;
