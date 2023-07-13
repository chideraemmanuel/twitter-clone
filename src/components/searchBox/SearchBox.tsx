import { FiSearch } from "react-icons/fi";
import "./SearchBox.scss";

const SearchBox: React.FC = () => {
  return (
    <form className="search-box">
      <input type="text" placeholder="Search" />
      <FiSearch />
    </form>
  );
};

export default SearchBox;
