import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiLogin } from "../../services/apiRequestAuth";
import InputForm from "../../components/input/InputForm";
import IconGoogle from "../../assets/icons/IconGoogle";

const Login = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [valueInput, setValueInput] = useState({
    email: "",
    passWord: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valueInput.email || !valueInput.passWord) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    } else {
      apiLogin(valueInput, dispatch, navigator);
    }
  };
  return (
    <div>
      <form
        className="flex flex-col col-span-1 gap-2 mt-10"
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <p className="mb-3 text-2xl font-medium">Log in to DH</p>
        <div className="flex flex-col gap-5">
          <InputForm
            type={"email"}
            placeholder={"Please enter your email"}
            name={"email"}
            label={"Email"}
            valueInput={valueInput.email}
            handleOnChange={handleOnChange}
            className="px-3 py-2 border rounded-md outline-none border-gray1"
          ></InputForm>
          <InputForm
            type={"password"}
            placeholder={"Please enter your password"}
            name={"passWord"}
            label={"Password"}
            valueInput={valueInput.passWord}
            handleOnChange={handleOnChange}
            className="px-3 py-2 border rounded-md outline-none border-gray1"
          ></InputForm>
        </div>
        <button
          type="submit"
          className="py-[10px] mt-2 text-base font-semibold text-white rounded-md bg-blue6"
        >
          Đăng nhập
        </button>
      </form>
      <div className="mt-4">
        <div className="flex items-center justify-center gap-3">
          <p className="w-full h-[1px] bg-grayE8" />
          <span>OR</span>
          <p className="w-full h-[1px] bg-grayE8" />
        </div>
      </div>
      <button
        type="submit"
        className="py-[10px] flex gap-3 items-center justify-center w-full mt-2 text-base font-semibold text-black rounded-md bg-white border-[2px] border-black"
      >
        <IconGoogle></IconGoogle>
        Login with Google
      </button>
      <p className="mt-4 text-center">
        Don’t have an account?{" "}
        <NavLink to="/sign-up" className="text-blue6">
          Sign up
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
