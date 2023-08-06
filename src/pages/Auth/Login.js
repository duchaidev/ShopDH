import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiLogin } from "../../apiRequest/apiRequestAuth";

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
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mt-2">
        <a href="/">LOGO</a>
      </div>
      <form className="flex flex-col gap-2 mt-10" onSubmit={handleSubmit}>
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
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
