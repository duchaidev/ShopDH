import React, { useEffect, useState } from "react";
import AllProduct from "./../../module/manageProduct/AllProduct";
import ItemManageProduct from "../../components/product/ItemManageProduct";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllProductSeller } from "../../apiRequest/apiRequestProduct";
import { toast } from "react-toastify";

const classNameHeader =
  "py-5 text-center  border-b-[2px] cursor-pointer transition-all";
const ManageProduct = () => {
  const [isShow, setIsShow] = useState(0);
  const { id } = useSelector((state) => state.register.login.dataUser);
  const { loading } = useSelector((state) => state.product.getAllProductSeller);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product.getAllProductSeller);
  const handleSetShow = (index) => {
    setIsShow(index);
  };
  useEffect(() => {
    if (!data) {
      apiGetAllProductSeller(id, dispatch);
    }
  }, [data, id]);
  return (
    <div>
      <div className="p-5 pb-8 bg-white">
        <h2 className="text-lg font-semibold">Tìm kiếm sản phẩm</h2>
        <div className="mt-3">
          <div className="grid grid-cols-5 gap-10">
            <input
              type="text"
              placeholder="Nhập tên sản phẩm"
              className="w-full h-[38px] col-span-3 px-3 border rounded-sm border-blue1 outline-none focus:border-blue6 transition-all"
            />
            <div className="flex items-center col-span-2 gap-2">
              <label htmlFor="" className="whitespace-nowrap">
                Ngành hàng
              </label>
              <button className="border border-blue1 w-full h-[38px] flex items-center justify-center relative">
                <span>Chọn ngành hàng</span>
                <svg
                  width="12"
                  height="8"
                  className="absolute right-2"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 -5.72205e-06L12 1.39999L6 7.39999L0 1.39999L1.4 -5.72205e-06L6 4.59999L10.6 -5.72205e-06Z"
                    fill="#626262"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-3 h-[36px] flex items-center bg-blue6 text-white rounded-sm justify-center hover:bg-grayEC transition-all hover:text-blue6 border-[2px] border-blue6">
              Tìm kiếm
            </button>
            <button className="px-3 h-[36px] flex items-center justify-center border-[2px] rounded-sm transition-all hover:text-white hover:bg-blue7 text-blue6 border-blue6">
              Đặt lại
            </button>
          </div>
        </div>
      </div>
      <div className="pb-8 mt-3 bg-white">
        {/*============================ Nav Menu ============================*/}
        <div className="grid grid-cols-6 pt-1">
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
        {/*============================ View Product ============================*/}
        <div className="px-6 py-4">
          <AllProduct quantityProduct={data?.modifiedProducts?.length}>
            <ItemManageProduct></ItemManageProduct>
          </AllProduct>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
