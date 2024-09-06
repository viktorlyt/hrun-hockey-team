import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Account/AccountLayout";
import AccountBigSidebar from "../../components/Account/AccountBigSidebar";
import AccountTopbar from "../../components/Account/AccountTopbar";
import { createContext, useContext, useState } from "react";

const AccountContext = createContext();

const AccountLayout = () => {
  const user = {
    userId: 1,
    firstName: "Barbara",
    lastName: "Watson",
    dob: null,
    image: "",
    email: "barbara@gmail.com",
    phone: "506 456 6677",
    kids: [
      { id: 1, name: "Nick Watson", dob: "2016-05-25" },
      { id: 3, name: "Emma Watson", dob: "2014-05-25" },
    ],
  };
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("user logged out");
  };

  return (
    <AccountContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <AccountBigSidebar />
        <div className="account-container">
          <AccountTopbar />
          <div className="account-page">
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => useContext(AccountContext);
export default AccountLayout;
