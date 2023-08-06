import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiRegister } from "../../apiRequest/apiRequestAuth";

const Register = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [valueInput, setValueInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passWord: "",
    rePassWord: "",
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
      console.log(rest);
      apiRegister(rest, dispatch, navigator);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mt-2">
        <a href="/">LOGO</a>
      </div>
      <form className="flex flex-col gap-2 mt-10" onSubmit={handleSubmit}>
        <div className="flex items-center gap-1">
          <label htmlFor="firstName">FirstName</label>
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="firstName"
            name="firstName"
            id="firstName"
            className="border"
          />
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="lastName">LastName</label>
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="lastName"
            className="border"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="email"
            className="border"
            id="email"
            name="email"
          />
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="passWord">Mật khẩu</label>
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="passWord"
            id="passWord"
            name="passWord"
            className="border"
          />
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="rePassWord">Nhập lại mật khẩu</label>
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="Nhập lại MK"
            className="border"
            name="rePassWord"
            id="rePassWord"
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default Register;
