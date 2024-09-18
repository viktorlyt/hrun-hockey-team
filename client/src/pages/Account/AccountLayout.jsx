import { createContext, useContext, useState } from "react";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import customFetch from "../../utils/customFetch";
import AccountBigSidebar from "../../components/Account/AccountBigSidebar";
import AccountTopbar from "../../components/Account/AccountTopbar";
import Wrapper from "../../assets/wrappers/Account/AccountLayout";

export const loader = async () => {
  try {
    const { data } = await customFetch("/user");
    return data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return redirect("/login");
    }
    console.log("error", error);
    return redirect("/");
  }
};

const AccountContext = createContext();

const AccountLayout = () => {
  const navigate = useNavigate();
  const { user: initialUser } = useLoaderData();
  const [user, setUser] = useState(initialUser);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };

  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  return (
    <AccountContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logoutUser,
        updateUser,
      }}
    >
      <Wrapper>
        <AccountBigSidebar />
        <div className="account-container">
          <AccountTopbar />
          <div className="account-page">
            <Outlet context={{ user }} />
          </div>
        </div>
      </Wrapper>
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => useContext(AccountContext);
export default AccountLayout;
