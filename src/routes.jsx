import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./pages/PrivateRoutes";
import CustomersPage from "./pages/CustomersPage";
import CreditDebitPage from "./pages/CreditDebitPage";
import LoginPage from "./pages/LoginPage";
import NewUserPage from "./pages/NewUserPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "",
        element: <CustomersPage />,
      },
      {
        path: "user/:name/:id",
        element: <CreditDebitPage />,
      },
    ],
  },
  {
    path: "/newuser",
    element: <NewUserPage />,
  },
  {
    path: "/changepassword",
    element: <ChangePasswordPage />,
  },
]);

export default router;
