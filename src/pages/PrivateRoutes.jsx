import useUserStore from "../stores/userStore";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

const PrivateRoutes = () => {
  const user = useUserStore((s) => s.user);

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
