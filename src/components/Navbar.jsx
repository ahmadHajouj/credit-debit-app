import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import useAuth from "../hooks/useAuth";
import useUserStore from "../stores/userStore";
import DropdownButton from "./DropdownLanguageButton";
import TextboxAlert from "./TextboxAlert";
import { Link } from "react-router-dom";
import DropdownSettingButton from "./DropdownSettingButton";

const Navbar = ({ onOk, inputType, formLabel, title }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);

  const { logout } = useAuth();
  const user = useUserStore((s) => s.user);

  const handleOk = (value) => {
    onOk(value);
    setIsOpen(!isOpen);
  };

  const onLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <>
      <TextboxAlert
        isOpen={isOpen}
        onOk={handleOk}
        onConcel={() => setIsOpen(!isOpen)}
        inputType={inputType}
        label={formLabel}
      />
      <div className="nav-container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <h4>
              <Link to="/" className="link-unstyled">
                {title ? `< ${title}` : t("app name")}
              </Link>
            </h4>
            <DropdownButton className="d-flex justify-content-start justify-content-start" />
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>+</button>
          <div className="d-flex align-items-center ">
            <p className="d-inline">{user?.name}</p>
            <button className="d-inline" onClick={onLogout}>
              {t("logout")}
            </button>
            <DropdownSettingButton className="d-flex justify-content-start" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
