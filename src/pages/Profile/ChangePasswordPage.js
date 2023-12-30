import React, { useEffect, useRef, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  sendMailChangePassword,
} from "../../services/apiRequestAuth";
import { createAxios } from "../../createInstance";
import { loginSuccess } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../untils/componentHandle";

const ChangePasswordPage = () => {
  const StyledRadio = styled(Radio)`
    & .MuiSvgIcon-root {
      font-size: 20px;
      color: #00c09e;
    }
  `;
  const dispatch = useDispatch();
  const { dataUser } = useSelector((state) => state.register.login);
  const toastId = useRef(null);
  const [value, setValue] = useState({
    email: dataUser?.email,
    password: "",
    newPassword: "",
    reNewPassword: "",
    code: "",
  });

  useEffect(() => {
    setValue({
      ...value,
      email: dataUser?.email,
    });
  }, [dataUser]);
  const handleChange = (key, e) => {
    setValue({
      ...value,
      [key]: e.target.value,
    });
  };
  // Submit form
  const handleSubmit = async () => {
    if (value.code === "") {
      toast.error("Vui lòng nhập mã xác nhận");
      return;
    }
    if (
      value.password === "" ||
      value.newPassword === "" ||
      value.reNewPassword === ""
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (value?.newPassword?.length < 6 || value?.reNewPassword?.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (value.newPassword !== value.reNewPassword) {
      toast.error("Mật khẩu mới không trùng khớp");
      return;
    }
    if (value.password === value.newPassword) {
      toast.error("Mật khẩu mới không được trùng với mật khẩu cũ");
      return;
    }
    if (
      value.newPassword === value.reNewPassword &&
      value.password !== "" &&
      value.newPassword !== "" &&
      value.reNewPassword !== "" &&
      value.newPassword.length >= 6 &&
      value.reNewPassword.length >= 6 &&
      value.password !== value.newPassword
    ) {
      const res = await changePassword(
        dataUser.accessToken,
        value,
        createAxios(dataUser, dispatch, loginSuccess)
      );
      if (res?.success === true) {
        setValue({
          email: dataUser?.email,
          password: "",
          newPassword: "",
          reNewPassword: "",
          code: "",
        });
      }
    } else {
      return;
    }
  };
  return (
    <div className="p-8 mb-32 bg-white">
      <div className="flex flex-col gap-2 pb-8 text-black border-b border-blue1">
        <span className="font-bold text-[18px]">Hồ Sơ Của Tôi</span>
        <span className="text-[14px]">
          Quản lí thông tin hồ sơ để bảo mật tài khoản
        </span>
      </div>
      <div className="grid grid-cols-10 mt-6">
        {/*--------------------------------------Information--------------------------------------*/}
        <div className="flex flex-col col-span-6 gap-6 border-r border-blue1">
          <div className="grid items-center grid-cols-10 gap-10">
            <label
              htmlFor=""
              className="col-span-3 row-span-1 font-normal text-end text-gray2"
            >
              Tên đăng nhập
            </label>
            <span className="col-span-7 row-span-1 font-medium">
              {dataUser?.firstName + " " + dataUser?.lastName}
            </span>
          </div>
          <div className="grid items-center grid-cols-10 gap-10">
            <label
              htmlFor=""
              className="col-span-3 row-span-1 font-normal text-end text-gray2"
            >
              Email
            </label>
            <p className="flex items-end col-span-7 row-span-1 gap-3">
              <span className="font-medium text-black">{dataUser?.email}</span>
              <button
                className="text-[14px] cursor-pointer font-semibold text-blue6 underline"
                onClick={async () => {
                  try {
                    await sendMailChangePassword(dataUser?.email, toastId);
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                Gửi mã
              </button>
            </p>
          </div>
          <div className="grid items-center grid-cols-10 gap-10">
            <label
              htmlFor=""
              className="col-span-3 row-span-1 font-normal text-end text-gray2"
            >
              Số điện thoại
            </label>
            <span className="row-span-1 font-medium text-black whitespace-nowrap">
              {dataUser?.phone || "Chưa có"}
            </span>
          </div>
          <div className="grid items-center grid-cols-10 gap-10">
            <label
              htmlFor="password"
              className="col-span-3 row-span-1 font-normal text-end text-gray2"
            >
              Nhập mật khẩu
            </label>
            <input
              type="text"
              placeholder="Nhập mật khẩu"
              autoComplete="off"
              name="password"
              value={value.password}
              onChange={(e) => handleChange("password", e)}
              className="row-span-1 px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none col-span-7 rounded-sm text-[14px] border"
            />
          </div>
          <div className="grid items-center grid-cols-10 gap-10">
            <label
              htmlFor="newPassword"
              className="col-span-3 row-span-1 font-normal text-end text-gray2"
            >
              Nhập mật khẩu mới
            </label>
            <input
              type="text"
              placeholder="Nhập mật khẩu mới"
              autoComplete="off"
              name="newPassword"
              value={value.newPassword}
              onChange={(e) => handleChange("newPassword", e)}
              className="row-span-1 px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none col-span-7 rounded-sm text-[14px] border"
            />
          </div>
          <div className="grid items-center grid-cols-10 gap-10">
            <label
              htmlFor="reNewPassword"
              className="col-span-3 row-span-1 font-normal text-end text-gray2"
            >
              Xác nhận mật khẩu
            </label>
            <input
              type="text"
              placeholder="Xác nhận mật khẩu mới"
              autoComplete="off"
              name="reNewPassword"
              value={value.reNewPassword}
              onChange={(e) => handleChange("reNewPassword", e)}
              className="row-span-1 px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none col-span-7 rounded-sm text-[14px] border"
            />
          </div>
          <div className="grid items-center grid-cols-10 gap-10">
            <label
              htmlFor="code"
              className="col-span-3 row-span-1 font-normal text-end text-gray2"
            >
              Nhập mã xác nhận
            </label>
            <input
              type="text"
              placeholder="Nhập mã gửi về email"
              autoComplete="off"
              name="code"
              value={value.code}
              onChange={(e) => handleChange("code", e)}
              className="row-span-1 px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none col-span-7 rounded-sm text-[14px] border"
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <button
              className="m-auto py-3 px-8 border-[2px] border-blue6 bg-blue6 text-white font-semibold"
              onClick={() => {
                handleSubmit();
              }}
            >
              Lưu
            </button>
          </div>
        </div>
        {/*--------------------------------------Avatar--------------------------------------*/}
        <div className="flex flex-col items-center justify-center col-span-4 gap-6">
          <div className="border w-44 h-44 border-blue1">
            <img
              src={
                convertBase64ToImage(dataUser?.avatar || "") ||
                "/avatar-def.jpg"
              }
              alt="avatar"
              className="object-cover w-full h-full"
            />
          </div>
          {/* <div className="flex flex-col gap-2">
            <button className="py-3 px-6 font-semibold text-blue6 border-blue6 border-[2px]">
              Chọn ảnh
            </button>
            <span className="text-[14px] text-gray1">
              Dung lượng file tối đa 3mb <br /> Định dạng: .JPEG, .PNG
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
