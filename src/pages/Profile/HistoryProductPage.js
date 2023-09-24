import React, { useState } from "react";
import ModalWriteReview from "../../module/productDetails/ModalWriteReview";
import ItemProductHistory from "./../../module/historyProductPage/ItemProductHistory";

const HistoryProductPage = () => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <div className="mb-32">
      <ModalWriteReview
        showWriteReview={showWriteReview}
        setShowWriteReview={setShowWriteReview}
      ></ModalWriteReview>
      {/*----------------------------------------Header History-----------------------------------*/}
      <div className="flex items-center justify-between w-full bg-white">
        <span
          className={`flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] ${
            active === 1
              ? "text-blue6 border-blue6"
              : "text-black border-transparent"
          }`}
          onClick={() => {
            setActive(1);
          }}
        >
          Tất cả
        </span>
        <span
          className={`flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] ${
            active === 2
              ? "text-blue6 border-blue6"
              : "text-black border-transparent"
          }`}
          onClick={() => {
            setActive(2);
          }}
        >
          Đang xử lí
        </span>
        <span
          className={`flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] ${
            active === 3
              ? "text-blue6 border-blue6"
              : "text-black border-transparent"
          }`}
          onClick={() => {
            setActive(3);
          }}
        >
          Hoàn thành
        </span>
        <span
          className={`flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] ${
            active === 4
              ? "text-blue6 border-blue6"
              : "text-black border-transparent"
          }`}
          onClick={() => {
            setActive(4);
          }}
        >
          Khiếu nại/ Hoàn tiền
        </span>
        {/* <span
          className={`flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] border-transparent`}
          onClick={() => {
            setActive(5);
          }}
        >
          Đã hủy
        </span> */}
      </div>
      {/*----------------------------------------Search History-----------------------------------*/}
      <div className="w-full mt-3 h-[45px]">
        <input
          type="text"
          className="w-full h-full px-6 py-2 outline-none bg-blue1"
        />
      </div>
      {/*----------------------------------------Item History-----------------------------------*/}
      <ItemProductHistory></ItemProductHistory>
    </div>
  );
};

export default HistoryProductPage;
