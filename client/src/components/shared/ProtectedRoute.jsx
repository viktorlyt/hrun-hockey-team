import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();

  console.log("ProtectedRoute - loading:", loading);
  console.log("ProtectedRoute - user:", user);

  if (loading) return <div>Loading...</div>; // TODO spinner

  if (!user) {
    console.log("ProtectedRoute - Redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("ProtectedRoute - Rendering children");
  return children;
};

export default ProtectedRoute;
