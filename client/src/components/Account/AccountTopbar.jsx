import { useLocation } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import Wrapper from "../../assets/wrappers/Account/AccountTopbar";
import { useAccountContext } from "../../pages/Account/AccountLayout";

const AccountTopbar = () => {
  const { user } = useAccountContext();
  const location = useLocation();

  const getHeading = () => {
    switch (location.pathname) {
      case "/account":
        return `Nice to see you here, ${user.firstName}`;
      case "/account/register":
        return "Choose suitable class for Hockey team";
      case "/account/orders":
        return "Here you can see your latest orders";
      case "/account/settings":
        return "Your profile settings";
      default:
        return `Nice to see you here, ${user.firstName}`;
    }
  };

  return (
    <Wrapper>
      <div className="welcome-message-container">
        <h3>{getHeading()}</h3>
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
