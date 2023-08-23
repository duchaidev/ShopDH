import React from "react";
import { FormUIAddProduct } from "../../pages/Seller/AddProductSellerPage";

const TechnologyUse = ({ values, handleSetValue }) => {
  return (
    <FormUIAddProduct title={"Công nghệ sử dụng"} className={"items-center"}>
      <div className="relative w-full">
        <input
          type="text"
          value={values.technology}
          className="border h-[38px] px-3 border-grayE8 outline-none focus:border-blue6 transition-all w-full text-sm rounded-sm col-span-1"
          placeholder="Công nghệ sử dụng"
          onChange={(e) => handleSetValue("technology", e.target.value)}
        />
      </div>
    </FormUIAddProduct>
  );
};

export default TechnologyUse;
