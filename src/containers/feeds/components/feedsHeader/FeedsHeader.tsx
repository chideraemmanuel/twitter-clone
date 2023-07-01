import "./FeedsHeader.scss";

const FeedsHeader: React.FC = () => {
  return (
    <div className="feeds-header">
      <h1>Home</h1>

      <div className="feeds-header__filter">
        <div className="feeds-header__filter--button">
          <input type="radio" name="feedFilter" id="forYou" checked />
          <label htmlFor="forYou">
            <span>For you</span>
          </label>
        </div>

        <div className="feeds-header__filter--button">
          <input type="radio" name="feedFilter" id="following" />
          <label htmlFor="following">
            <span>Following</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FeedsHeader;
