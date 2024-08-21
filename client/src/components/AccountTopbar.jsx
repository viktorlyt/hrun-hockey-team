import { FaAlignJustify } from "react-icons/fa";
import Wrapper from "../assets/wrappers/AccountTopbar";
import { useAccountContext } from "../pages/Account/AccountLayout";

const AccountTopbar = () => {
  const { user } = useAccountContext();
  return (
    <Wrapper>
      <div className="welcome-message-container">
        <h3>Nice to see you here, {user.firstName}</h3>
      </div>
      <div className="image-container">
        <span className="username b2">
          {user.firstName} {user.lastName}
        </span>
        <img
          className="avatar"
          src={`${
            user.image !== "" ? user.image : "/assets/images/avatar.png"
          }`}
        />
      </div>
    </Wrapper>
  );
};

export default AccountTopbar;
