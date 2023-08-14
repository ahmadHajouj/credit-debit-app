import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Navbar from "./../components/Navbar";
import user from "../services/usersService";

const ChangePasswordPage = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const theUser = await user.changePassword(data);
      reset();
    } catch ({ response }) {
      if (response.status === 404)
        setError("name", { type: "not found", message: t(response.data) });
      else
        setError("oldPassword", {
          type: "bad request",
          message: t(response.data),
        });
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <div className="mb-3 p-5">
          <label htmlFor="name" className="form-label">
            {t("Username")}
          </label>
          <input
            {...register("name", { required: t("The username is requirerd") })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && (
            <p className="text-danger">
              {t("ERROR")}: {errors.name.message}
            </p>
          )}
        </div>
        <div className="mb-3 p-5">
          <label htmlFor="oldPassword" className="form-label">
            {t("Old password")}
          </label>
          <input
            {...register("oldPassword", {
              required: t("The Old password is required"),
            })}
            id="oldPassword"
            type="password"
            className="form-control"
          />
          {errors.oldPassword && (
            <p className="text-danger">
              {t("ERROR")}: {errors.oldPassword.message}
            </p>
          )}
        </div>
        <div className="mb-3 p-5">
          <label htmlFor="password" className="form-label">
            {t("Password")}
          </label>
          <input
            {...register("password", {
              required: t("The password is required"),
            })}
            id="password"
            type="password"
            className="form-control"
          />
          {errors.password && (
            <p className="text-danger">
              {t("ERROR")}: {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-3 p-5">
          <label htmlFor="repassword" className="form-label">
            {t("Re-enter Password")}
          </label>
          <input
            {...register("repassword", {
              validate: (v) =>
                v === getValues("password") ||
                t("It should match the password"),
            })}
            id="repassword"
            type="password"
            className="form-control"
          />
          {errors.repassword && (
            <p className="text-danger">
              {t("ERROR")}: {errors.repassword.message}
            </p>
          )}
        </div>
        <button className="m-5" type="submit">
          {t("update")}
        </button>
      </form>
    </>
  );
};

export default ChangePasswordPage;
