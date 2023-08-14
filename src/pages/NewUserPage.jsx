import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Navbar from "./../components/Navbar";
import user from "../services/usersService";

const NewUserPage = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const newUser = await user.signUp(data);
      console.log(newUser);
    } catch ({ response }) {
      setError("name", { type: "used", message: t(response.data) });
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
          {t("Register")}
        </button>
      </form>
    </>
  );
};

export default NewUserPage;
