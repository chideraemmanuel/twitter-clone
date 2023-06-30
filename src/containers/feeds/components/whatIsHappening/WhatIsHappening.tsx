import ProfileImage from "../../../../components/profileImage/ProfileImage";
import "./WhatIsHappening.scss";
import { FaImage, FaListAlt, FaList } from "react-icons/fa";

const WhatIsHappening: React.FC = () => {
  return (
    <div className="what-is-happening">
      <ProfileImage />
      <div className="what-is-happening__form">
        <form>
          <input type="text" placeholder="What is happening?!" />

          <div className="what-is-happening__form--bottom">
            <div className="what-is-happening__form--bottom_icons">
              <FaImage />
              <FaListAlt />
              <FaImage />
              <FaList />
              <FaImage />
              <FaImage />
            </div>

            <button>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhatIsHappening;
