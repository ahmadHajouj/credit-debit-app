import { useForm } from "react-hook-form";

function TextboxAlert({ isOpen, onOk, onConcel, inputType, label }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOk = (data) => {
    onOk(data.text);
    reset();
  };

  if (isOpen) return null;

  return (
    <>
      <div className="alert-background" />
      <form onSubmit={handleSubmit(handleOk)} className="alert-box">
        <h4>{label}</h4>
        <input
          {...register("text", { required: true })}
          id="text"
          type={inputType}
        />
        {errors.text && <p className="text-danger">{errors.text.message}</p>}
        <button type="submit">ok</button>
        <button onClick={onConcel}>cancel</button>
      </form>
    </>
  );
}

export default TextboxAlert;
