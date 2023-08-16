import React, { useState } from "react";

const classNameHeader =
  "py-5 text-center  border-b-[2px] cursor-pointer transition-all";
const OrderSellerPage = () => {
  const [isShow, setIsShow] = useState(0);

  const handleSetShow = (index) => {
    setIsShow(index);
  };
  return (
    <div className="pb-10 bg-white ">
      <div className="grid grid-cols-6 pt-5">
        <span
          className={` ${classNameHeader} ${
            isShow === 0 ? "border-blue6 text-blue6 " : "border-grayE8"
          }`}
          onClick={() => handleSetShow(0)}
        >
          Tất cả
        </span>
        <span
          className={` ${classNameHeader} ${
            isShow === 1 ? "border-blue6 text-blue6" : "border-grayE8"
          }`}
          onClick={() => handleSetShow(1)}
        >
          Thành công
        </span>
        <span
          className={` ${classNameHeader} ${
            isShow === 2 ? "border-blue6 text-blue6" : "border-grayE8"
          }`}
          onClick={() => handleSetShow(2)}
        >
          Chờ xử lí
        </span>
        <span
          className={` ${classNameHeader} ${
            isShow === 3 ? "border-blue6 text-blue6" : "border-grayE8"
          }`}
          onClick={() => handleSetShow(3)}
        >
          Yêu cầu bảo hành
        </span>
        <span
          className={` ${classNameHeader} ${
            isShow === 4 ? "border-blue6 text-blue6" : "border-grayE8"
          }`}
          onClick={() => handleSetShow(4)}
        >
          Đã hủy
        </span>
        <span
          className={` ${classNameHeader} ${
            isShow === 5 ? "border-blue6 text-blue6" : "border-grayE8"
          }`}
          onClick={() => handleSetShow(5)}
        >
          Báo cáo/Hoàn tiền
        </span>
      </div>
      <div>123</div>
    </div>
  );
};

export default OrderSellerPage;
