import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
