import { useTranslation } from "react-i18next";

import "./App.css";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const { t } = useTranslation();

  return <LoginPage />;
};

export default App;
