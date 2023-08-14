import i18next from "i18next";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { BsGlobe } from "react-icons/bs";

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "العربية", dir: "rtl" },
];

function DropdownButton() {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <div className="d-flex justify-content-end">
      <div className="dropdown">
        <button
          className="btn btn-link dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsGlobe height={24} width={24} className="pb-1 " />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown">
          {languages.map(({ code, name }) => (
            <li key={code}>
              <button
                className="dropdown-item"
                onClick={() => i18next.changeLanguage(code)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownButton;
