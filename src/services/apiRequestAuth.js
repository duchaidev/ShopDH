import { toast } from "react-toastify";
import {
  loginError,
  loginStart,
  loginSuccess,
  registerError,
  registerStart,
  registerSuccess,
} from "../redux/authSlice";
import axiosCustom from "./api";

const apiRegister = async (user, dispatch, navigator) => {
  dispatch(registerStart());
  try {
    const res = await axiosCustom.post(`/auth/register`, user);
    dispatch(registerSuccess());
    if (res?.status === 200) {
      toast.success("Đăng ký thành công");

      navigator("/login");
    }
  } catch (e) {
    dispatch(registerError());
    console.log(e);
    toast.error(e?.response?.data || "Đăng ký thất bại");
  }
};

const apiLogin = async (user, dispatch, navigator) => {
  dispatch(loginStart());
  try {
    const res = await axiosCustom.post(`/auth/login`, user, {
      withCredentials: true,
    });
    dispatch(loginSuccess(res.data));
    navigator("/");
    toast.success("Login Success!");
  } catch (e) {
    dispatch(loginError());
    toast.error("Đăng nhập thất bại");
  }
};

const apiEditUser = async (accessToken, newUser, dispatch, axiosJWT) => {
  console.log(accessToken);
  dispatch(loginStart());
  try {
    const res = await axiosJWT.put(
      `${process.env.REACT_APP_BACKEND_URL}/user/edit`,
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

const apiLogout = async (dispatch, navigator) => {
  dispatch(loginStart());
  try {
    await axiosCustom.post(`/auth/logout`, {
      withCredentials: true,
    });
    dispatch(loginSuccess(null));
    navigator("/login");
  } catch (e) {
    dispatch(loginError());
    toast.error("Đăng xuất thất bại");
  }
};

const sendMailChangePassword = async (email, toastId) => {
  const notify = () =>
    (toastId.current = toast("Đang gửi mã xác nhận...", {
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
      type: toast.TYPE.DEFAULT,
      icon: "⏳",
      style: {
        background: "#CCD4DA", // Đặt màu nền thành màu xám
        color: "black",
      },
    }));
  notify();
  try {
    const res = await axiosCustom.post(`/mail/changepassword`, {
      email,
    });
    toast.update(toastId.current, {
      render: "Gửi mã thành công!",
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
      icon: "🎉",
    });
    return res.data;
  } catch (e) {
    toast.update(toastId.current, {
      render: "Có lỗi xảy ra. Vui lòng thử lại!",
      type: toast.TYPE.ERROR,
      autoClose: 1000,
      icon: "🎉",
    });
  }
};
const changePassword = async (accessToken, dataUser, axiosJWT) => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/change-password`,
      dataUser,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    toast.success("Cập nhật thành công");
    return res.data;
  } catch (e) {
    toast.error(e?.response?.data || "Cập nhật thất bại");
  }
};

export {
  apiRegister,
  apiLogin,
  apiEditUser,
  apiLogout,
  changePassword,
  sendMailChangePassword,
};
