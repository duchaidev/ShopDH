import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { apiRegister } from "../../services/apiRequestAuth";
import InputForm from "../../components/input/InputForm";

const Register = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const referrerId = searchParams.get("referrerId");

  const [valueInput, setValueInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passWord: "",
    referrerId: "",
    rePassWord: "",
  });

  useEffect(() => {
    setValueInput({
      ...valueInput,
      referrerId: referrerId,
    });
  }, [referrerId]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      const regex = /^[a-zA-Z0-9]+$/;
      if (value && !regex.test(value)) {
        toast.error("Tên đăng nhập không được chứa kí tự đặc biệt");
      }
    }
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !valueInput.firstName ||
      !valueInput.lastName ||
      !valueInput.email ||
      !valueInput.passWord ||
      !valueInput.rePassWord
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    } else if (valueInput.passWord !== valueInput.rePassWord) {
      toast.error("Mật khẩu không khớp");
    } else {
      const { rePassWord, ...rest } = valueInput;
      apiRegister(rest, dispatch, navigator);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col col-span-1 gap-2 mt-10"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <p className="mb-3 text-2xl font-medium">Register to DH</p>
        <div className="flex flex-col gap-5">
          <div className="grid items-center w-full grid-cols-2 gap-5">
            <InputForm
              type={"text"}
              placeholder={"Please enter your first name"}
              name={"firstName"}
              label={"FirstName"}
              valueInput={valueInput.firstName}
              handleOnChange={handleOnChange}
              className="px-3 py-2 border rounded-md outline-none border-gray1"
            ></InputForm>
            <InputForm
              type={"text"}
              placeholder={"Please enter your last name"}
              name={"lastName"}
              label={"LastName"}
              valueInput={valueInput.lastName}
              handleOnChange={handleOnChange}
              className="px-3 py-2 border rounded-md outline-none border-gray1"
            ></InputForm>
          </div>
          <InputForm
            type={"text"}
            placeholder={"Please enter your email"}
            name={"email"}
            label={"Email"}
            valueInput={valueInput.email}
            handleOnChange={handleOnChange}
            className="px-3 py-2 border rounded-md outline-none border-gray1"
            autoComplete="new-username"
          ></InputForm>

          <InputForm
            type={"password"}
            placeholder={"Please enter your passWord"}
            name={"passWord"}
            label={"Password"}
            valueInput={valueInput.passWord}
            handleOnChange={handleOnChange}
            className="px-3 py-2 border rounded-md outline-none border-gray1"
            autoComplete="new-password"
          ></InputForm>
          <InputForm
            type={"password"}
            placeholder={"Please enter your repassWord"}
            name={"rePassWord"}
            label={"Repassword"}
            valueInput={valueInput.rePassWord}
            handleOnChange={handleOnChange}
            className="px-3 py-2 border rounded-md outline-none border-gray1"
            autoComplete="off"
          ></InputForm>
          <InputForm
            type={"text"}
            placeholder={"Please enter your referrer"}
            name={"referrerId"}
            label={"Nhập mã giới thiệu(nếu có)"}
            valueInput={valueInput.referrerId}
            disabled={referrerId ? true : false}
            handleOnChange={handleOnChange}
            className="px-3 py-2 border rounded-md outline-none border-gray1"
            autoComplete="off"
          ></InputForm>
        </div>
        <button
          type="submit"
          className="py-[10px] mt-2 text-base font-semibold text-white rounded-md bg-blue6"
        >
          Đăng ký
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue6">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
