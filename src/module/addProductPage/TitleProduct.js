import React from "react";
import { FormUIAddProduct } from "../../pages/Seller/AddProductSellerPage";

const TitleProduct = ({ values, setValue }) => {
  return (
    <FormUIAddProduct title={"Tên sản phẩm"} className={"items-center"}>
      <div className="relative">
        <p className="absolute top-[50%] flex gap-2 items-center -translate-y-[50%] right-3 text-gray1 text-sm">
          <svg
            width="1"
            height="17"
            viewBox="0 0 1 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18558e-08"
              x2="0.499999"
              y2="17"
              stroke="#8B8B8B"
            />
          </svg>
          <span>{values.title.length} /120</span>
        </p>
        <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
          value={values?.title}
          onChange={(e) => {
            setValue("title", e.target.value);
          }}
        />
      </div>
    </FormUIAddProduct>
  );
};

export default TitleProduct;
