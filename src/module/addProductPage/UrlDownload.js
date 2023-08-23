import React from "react";
import { FormUIAddProduct } from "../../pages/Seller/AddProductSellerPage";

const UrlDownload = ({ values, handleSetValue }) => {
  return (
    <FormUIAddProduct title={"Url Download"} className={"items-center"}>
      <input
        type="text"
        value={values.urlDownload}
        placeholder="Nhập link download (github, drive, ...)"
        className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
        onChange={(e) => {
          handleSetValue("urlDownload", e.target.value);
        }}
      />
    </FormUIAddProduct>
  );
};

export default UrlDownload;
