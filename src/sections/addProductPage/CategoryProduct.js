import React, { useState } from "react";
import { FormUIAddProduct } from "../../pages/Seller/AddProductSellerPage";
import { useQuery } from "react-query";
import { apiGetCategories } from "../../services/apiRequestProduct";
import { toast } from "react-toastify";

const CategoryProduct = ({ values, handleSetValue }) => {
  const [isShow, setIsShow] = useState(false);
  const { data: category } = useQuery({
    queryKey: ["apiGetCategories"],
    queryFn: () => apiGetCategories(),
  });

  const handleRemoveCategory = (index) => {
    // Tạo một bản sao của mảng category để không ảnh hưởng đến state gốc
    const updatedCategories = [...values.category];
    updatedCategories.splice(index, 1); // Xóa phần tử tại vị trí index

    // Cập nhật state category với mảng đã xóa phần tử
    handleSetValue("category", updatedCategories);
  };

  console.log(values);
  console.log(category);
  return (
    <FormUIAddProduct title={"Ngành hàng"} className={"items-center !pb-3"}>
      <div className="relative grid grid-cols-2 gap-10">
        <div
          className="relative w-full"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          <input
            type="text"
            placeholder="Chọn ngành hàng"
            className="border h-[38px] text-black px-3 absolute opacity-0 placeholder-black border-grayE8 bg-grayE8 cursor-pointer outline-none focus:border-blue6 transition-all w-full text-sm rounded-sm col-span-1"
            onBlur={() => {
              setIsShow(false);
            }}
          />
          <p className="border h-[38px] text-black px-3 flex items-center placeholder-black border-grayE8 bg-grayE8 cursor-pointer outline-none focus:border-blue6 transition-all w-full text-sm rounded-sm col-span-1">
            Chọn ngành hàng
          </p>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[50%] right-3 -translate-y-[50%]"
          >
            <path
              d="M10.6 -5.72205e-06L12 1.39999L6 7.39999L0 1.39999L1.4 -5.72205e-06L6 4.59999L10.6 -5.72205e-06Z"
              fill="#626262"
            />
          </svg>
        </div>
        <div className="absolute flex text-sm gap-1 text-black top-[40px] transition-all">
          {values?.category.length > 0 &&
            values?.category?.map((item, index) => (
              <p
                key={index}
                className="flex items-center gap-1 px-2 rounded-sm bg-greenBorder bg-opacity-30"
              >
                {item}
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  onClick={() => handleRemoveCategory(index)}
                >
                  <path
                    d="M1.04321 0.833374L9.37655 9.16671M1.04321 9.16671L9.37655 0.833374"
                    stroke="black"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            ))}
        </div>
        <div
          className={`absolute z-30 top-[40px] shadow-md max-w-max flex bg-white flex-col border border-blue1 rounded-md dropdown-content ${
            isShow ? "open" : ""
          }`}
        >
          {category?.categories?.map((item) => (
            <span
              className="px-5 py-2 cursor-pointer hover:bg-blue1"
              key={item.id}
              onMouseDown={() => {
                if (values.category.length > 2) {
                  return toast.error("Chỉ được chọn tối đa 3 ngành hàng");
                } else if (!values.category.includes(item.name)) {
                  handleSetValue("category", [item.name, ...values.category]);
                }
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="whitespace-nowrap">Nhập giá</span>
          <input
            type="text"
            value={values.price}
            className="border h-[38px] px-3 border-grayE8 outline-none focus:border-blue6 transition-all text-sm rounded-sm col-span-1 w-full"
            placeholder="Nhập giá"
            onChange={(e) => handleSetValue("price", e.target.value)}
          />
        </div>
      </div>
    </FormUIAddProduct>
  );
};

export default CategoryProduct;
