import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const DropdownSettingButton = () => {
  const { t } = useTranslation();
  const list = [
    { label: t("change password"), url: "/changepassword" },
    { label: t("make a new user"), url: "/newuser" },
  ];

  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-end">
      <div className="dropdown">
        <button
          className="btn btn-link dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <AiOutlineSetting height={24} width={24} className="pb-1 " />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown">
          {list.map((l) => (
            <li key={l.url}>
              <button className="dropdown-item" onClick={() => navigate(l.url)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownSettingButton;
