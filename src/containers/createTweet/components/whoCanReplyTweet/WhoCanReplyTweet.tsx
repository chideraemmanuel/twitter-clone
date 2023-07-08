import { FaAt, FaCheck, FaGlobe, FaUserCheck } from "react-icons/fa";
import "./WhoCanReplyTweet.scss";

const WhoCanReplyTweet: React.FC = () => {
  return (
    <div className="whoCanReplyTweet">
      <button className="whoCanReplyTweet__button">
        <FaGlobe />
        <span>Everyone can reply</span>
      </button>

      <div className="whoCanReplyTweet__box">
        <div className="whoCanReplyTweet__box--header">
          <h6>Who can reply?</h6>
          <span>Choose who can reply to this Tweet.</span>
          <span>Anyone mentioned can always reply.</span>
        </div>

        <div className="whoCanReplyTweet__box--options">
          <div className="whoCanReplyTweet__box--options_option">
            <input type="radio" name="whoCanReplyTweet" id="everyone" />
            <label htmlFor="everyone">
              <div>
                <FaGlobe />
                <span>Everyone</span>
              </div>
              <FaCheck />
            </label>
          </div>
          <div className="whoCanReplyTweet__box--options_option">
            <input type="radio" name="whoCanReplyTweet" id="peopleFollowed" />
            <label htmlFor="peopleFollowed">
              <div>
                <FaUserCheck />
                <span>People you follow</span>
              </div>
              <FaCheck />
            </label>
          </div>
          <div className="whoCanReplyTweet__box--options_option">
            <input type="radio" name="whoCanReplyTweet" id="peopleMentioned" />
            <label htmlFor="peopleMentioned">
              <div>
                <FaAt />
                <span>Only people you mention</span>
              </div>
              <FaCheck />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanReplyTweet;
