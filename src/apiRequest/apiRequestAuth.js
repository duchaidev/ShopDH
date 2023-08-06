import axios from "axios";

import { toast } from "react-toastify";
import {
  loginError,
  loginStart,
  loginSuccess,
  registerError,
  registerStart,
  registerSuccess,
} from "../redux/authSlice";

export const apiRegister = async (user, dispatch, navigator) => {
  dispatch(registerStart());
  try {
    await axios.post("http://localhost:8000/v1/auth/register", user);
    dispatch(registerSuccess());
    toast.success("Đăng ký thành công");
    navigator("/");
  } catch (e) {
    dispatch(registerError());
    console.log(e);
    toast.error("Đăng ký thất bại");
  }
};

export const apiLogin = async (user, dispatch, navigator) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/v1/auth/login", user);
    // const res = await axios.post("http://localhost:8000/v1/auth/login", user, {
    //   withCredentials: true,
    // });
    dispatch(loginSuccess(res.data));
    navigator("/");
  } catch (e) {
    dispatch(loginError());
    toast.error("Đăng nhập thất bại");
  }
};

export const apiEditUser = async (accessToken, newUser, dispatch, axiosJWT) => {
  dispatch(loginStart());
  // console.log(accessToken);
  try {
    const res = await axiosJWT.put(
      "http://localhost:8000/v1/user/edit",
      newUser,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    dispatch(loginSuccess({ ...res.data, accessToken }));
    toast.success("Cập nhật thành công");
  } catch (e) {
    dispatch(loginError());
    toast.error("Cập nhật thất bại");
  }
};

export const apiLogout = async (dispatch, navigator) => {
  dispatch(loginStart());
  try {
    await axios.post("http://localhost:8000/v1/auth/logout", {
      withCredentials: true,
    });
    dispatch(loginSuccess(null));
    navigator("/login");
  } catch (e) {
    dispatch(loginError());
    toast.error("Đăng xuất thất bại");
  }
};
