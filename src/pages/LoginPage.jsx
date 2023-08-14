import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import DropdownButton from "../components/DropdownLanguageButton";
import useAuth from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import useUserStore from "../stores/userStore";

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    await login(data);
    navigate("/");
  };

  const user = useUserStore((s) => s.user);

  if (user) return <Navigate to="/" />;

  return (
    <>
      <div className="nav-container px-5 d-flex">
        <h4 className="text-white px-5">{t("app name")}</h4>
        <DropdownButton className="d-flex justify-content-start" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <div className="mb-3 p-5">
          <label htmlFor="name" className="form-label">
            {t("Name")}
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3 p-5">
          <label htmlFor="password" className="form-label">
            {t("Password")}
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="form-control"
          />
          {errors.name && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>
        <button className="m-5" type="submit">
          {t("login")}
        </button>
      </form>
    </>
  );
};

export default LoginPage;
