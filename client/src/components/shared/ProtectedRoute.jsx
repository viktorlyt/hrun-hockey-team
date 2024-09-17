import { Navigate } from "react-router-dom";
import { useAccountContext } from "../../pages/Account/AccountLayout";

const ProtectedRoute = ({ children }) => {
  const { user } = useAccountContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
