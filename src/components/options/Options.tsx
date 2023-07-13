import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import "./Options.scss";

interface Props {
  list: React.ReactNode;
}

const Options: React.FC<Props> = ({ list }) => {
  //   const [optionsActive, setOptionsActive] = useState(false);

  return (
    <div className="options">
      <button
        className="options__button"
        // onClick={() => setOptionsActive(!optionsActive)}
      >
        <IoEllipsisHorizontal />
      </button>

      {/* {optionsActive && <div className="options__content">{list}</div>} */}
    </div>
  );
};

export default Options;
