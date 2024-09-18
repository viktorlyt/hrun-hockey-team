import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await customFetch("/user");
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  const logoutUser = async () => {
    await customFetch.get("/auth/logout");
    setUser(null);
    // localStorage.removeItem("user");
    // toast.success("Logging out...");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logoutUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
