import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBarLayoutSeller = () => {
  const [isShow, setIsShow] = useState(Array(5).fill(true));

  const handleSetShow = (index) => {
    let temp = [...isShow];
    temp[index] = !temp[index];
    setIsShow(temp);
  };
  return (
    <div className="!w-[250px] fixed bg-white pb-8 overflow-auto max-h-[calc(100vh_-_60px)]">
      <div className="flex px-[12%] items-center justify-around mt-5">
        <button className="px-3 py-2 text-sm font-semibold text-white border-[2px] border-blue7 bg-blue7">
          View Shop
        </button>
        <button className="px-3 py-2 text-sm font-semibold text-blue7 border-[2px] border-blue7">
          Thêm SP
        </button>
      </div>
      {/*============================== Quản lí đơn hàng ==============================*/}
      <div className="px-[8%] flex flex-col mt-5 cursor-pointer">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => handleSetShow(0)}
        >
          <span className="font-semibold">Quản lí đơn hàng</span>
          <button className={`${isShow[0] ? "" : "rotate-90"}`}>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                fill="#626262"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isShow[0] ? "opacity-100 h-auto" : "h-0 opacity-0"
          } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
        >
          <NavLink to={"order"} className="itemMenuProfile">
            <li className="cursor-pointer">Tất cả</li>
          </NavLink>
          <li className="cursor-pointer">Đơn hủy</li>
          <li className="cursor-pointer">Trả hàng/ hoàn tiền</li>
          <li className="cursor-pointer">Đơn đặt theo yêu cầu</li>
        </ul>
      </div>

      {/*============================== Quản lí sản phẩm ==============================*/}
      <div className="px-[8%] flex flex-col mt-5">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => handleSetShow(1)}
        >
          <span className="font-semibold">Quản lí sản phẩm</span>
          <button className={`${isShow[1] ? "" : "rotate-90"}`}>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                fill="#626262"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isShow[1] ? "opacity-100 h-auto" : "h-0 opacity-0"
          } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
        >
          {" "}
          <NavLink to={"product"} className="itemMenuProfile">
            <li className="cursor-pointer ">Tất cả sản phẩm</li>
          </NavLink>
          <NavLink to={"add-product"} className="itemMenuProfile">
            <li className="cursor-pointer">Thêm sản phẩm</li>
          </NavLink>
          <li className="cursor-pointer">Sản phẩm vi phạm</li>
        </ul>
      </div>

      {/*============================== Kênh Marketing ==============================*/}
      <div className="px-[8%] flex flex-col mt-5">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => handleSetShow(2)}
        >
          <span className="font-semibold">Kênh marketing</span>
          <button className={`${isShow[2] ? "" : "rotate-90"}`}>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                fill="#626262"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isShow[2] ? "opacity-100 h-auto" : "h-0 opacity-0"
          } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
        >
          <li className="cursor-pointer">Quảng bá sản phẩm</li>
          <li className="cursor-pointer">Tạo Voucher</li>
        </ul>
      </div>

      {/*============================== Tài chính ==============================*/}
      <div className="px-[8%] flex flex-col mt-5">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => handleSetShow(3)}
        >
          <span className="font-semibold">Tài chính</span>
          <button className={`${isShow[3] ? "" : "rotate-90"}`}>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                fill="#626262"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isShow[3] ? "opacity-100 h-auto" : "h-0 opacity-0"
          } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
        >
          <li className="cursor-pointer">Doanh thu</li>
          <li className="cursor-pointer">Số dư tài khoản</li>
          <li className="cursor-pointer">Rút/Nạp số dư</li>
        </ul>
      </div>

      {/*============================== Quản lí Shop ==============================*/}
      <div className="px-[8%] flex flex-col mt-5">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => handleSetShow(4)}
        >
          <span className="font-semibold">Quản lí shop</span>
          <button className={`${isShow[4] ? "" : "rotate-90"}`}>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6 2.47955e-05L12 1.40002L6 7.40002L0 1.40002L1.4 2.47955e-05L6 4.60002L10.6 2.47955e-05Z"
                fill="#626262"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isShow[4] ? "opacity-100 h-auto" : "h-0 opacity-0"
          } mt-2 flex flex-col gap-[4px] text-sm list-disc px-[12%]`}
        >
          <li className="cursor-pointer">Đánh giá shop</li>
          <li className="cursor-pointer">Hồ sơ shop</li>
        </ul>
      </div>
      <div className="px-[8%] flex flex-col mt-5">
        <span className="font-semibold">Quản lí đơn hàng</span>
      </div>
      <div className="px-[8%] flex flex-col mt-5">
        <span className="font-semibold">Góp ý, cải thiện chất lượng</span>
      </div>
    </div>
  );
};

export default NavBarLayoutSeller;
