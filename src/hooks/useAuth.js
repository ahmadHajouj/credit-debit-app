import authService, { getCurrentUser } from "../services/authService";
import useUserStore from "../stores/userStore";

const useAuth = () => {
  const loginToStore = useUserStore.getState().login;
  const logoutFromStore = useUserStore.getState().logout;

  const login = async (data) => {
    await authService.login(data);
    loginToStore(getCurrentUser());
  };

  const logout = () => {
    authService.logout();
    logoutFromStore();
  };

  return { login, logout };
};

export default useAuth;
