import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import ProfileImageAlt from "../../../../components/profileImageAlt/ProfileImageAlt";
import "./AccountAction.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebase";
import useGetUser from "../../../../hooks/useGetUser";

const AccountAction: React.FC = () => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  // @ts-ignore
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
                {/* @ts-ignore */}
                Log out @{currentUser.username}
              </button>
            </div>
          )}
          <ProfileImageAlt />

          <div className="accountAction__user">
            {/* @ts-ignore */}
            <h5>{currentUser.name}</h5>
            {/* @ts-ignore */}
            <h4>@{currentUser.username}</h4>
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
