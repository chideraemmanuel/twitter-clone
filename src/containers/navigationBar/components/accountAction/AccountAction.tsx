import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import ProfileImageAlt from "../../../../components/profileImageAlt/ProfileImageAlt";
import "./AccountAction.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebase";
import useGetUser from "../../../../hooks/useGetUser";

const AccountAction: React.FC = () => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const { data: currentUser } = useGetUser(auth.currentUser?.uid);

  return (
    <>
      {currentUser && (
        <button
          className={isActionsOpen ? "accountAction active" : "accountAction"}
          onClick={() => setIsActionsOpen((prev) => !prev)}
        >
          {isActionsOpen && (
            <div className="accountAction__actions">
              <button
                className="accountAction__actions--logout"
                onClick={() => signOut(auth)}
              >
                Log out @{currentUser?.username}
              </button>
            </div>
          )}
          <ProfileImageAlt />

          <div className="accountAction__user">
            <h5>{currentUser?.name}</h5>
            <h4>@{currentUser?.username}</h4>
          </div>

          <div className="accountAction__ellipsis">
            <IoEllipsisHorizontal />
          </div>
        </button>
      )}
    </>
  );
};

export default AccountAction;
