import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/AccountLayout";
// import {
//   AccountBigSidebar,
//   AccountTopbar,
//   AccountSmallSidebar,
// } from "../../components";
import AccountBigSidebar from "../../components/AccountBigSidebar";
import AccountSmallSidebar from "../../components/AccountSmallSidebar";
import AccountTopbar from "../../components/AccountTopbar";
import { createContext, useContext, useState } from "react";

const AccountContext = createContext();

const AccountLayout = () => {
  const user = {
    firstName: "Barbara",
    lastName: "Watson",
    dob: null,
    image: "",
    email: "barbara@gmail.com",
    phoneNumber: "+1506 456 6677",
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
