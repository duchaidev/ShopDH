import React from "react";
import { FormUIAddProduct } from "../../pages/Seller/AddProductSellerPage";

const UrlDemo = ({ values, handleSetValue }) => {
  return (
    <FormUIAddProduct title={"Url Demo"} className={"items-center"}>
      <input
        type="text"
        value={values.urlDemo}
        placeholder="Nhập link demo (nếu có)"
        className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
        onChange={(e) => {
          handleSetValue("urlDemo", e.target.value);
        }}
      />
    </FormUIAddProduct>
  );
};

export default UrlDemo;
