import React from "react";

const NotiLayoutSeller = () => {
  return (
    <div>
      <div className="flex justify-between">
        <span className="font-semibold text-[18px]">Thông báo</span>
        <p className="flex items-center justify-center gap-1 text-sm cursor-pointer text-blue6 hover:text-blue7 hover:fill-blue7">
          <span className="text-end">Xem thêm</span>
          <svg
            width="6"
            height="12"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.0001 0L0.600098 1.5L8.0001 9L0.600098 16.5L2.0001 18L11.0001 9L2.0001 0Z"
              fill="#00C09E"
            />
          </svg>
        </p>
      </div>
      <div className="">
        {/*================== Item Noti ==================*/}
        <div className="flex flex-col gap-1 mt-4 transition-all cursor-pointer group">
          <span className="font-semibold text-black group-hover:text-blue5">
            Vourcher đăng sản phẩm
          </span>
          <span className="text-sm group-hover:text-blue5">
            ⭐Tạo Mua kèm deal sock để có cơ hội: ✅ X2 đơn hàng ✅ Ưu tiên hiển
            thị ✅ Giới thiệu sản phẩm mới
          </span>
          <p className="flex gap-3 text-sm">
            <span className=" text-greenText">Mới</span>
            <span className="text-gray1">5 tháng 8 2023</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotiLayoutSeller;
