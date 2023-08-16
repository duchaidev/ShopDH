import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { apiGetAllProductSeller } from "../../apiRequest/apiRequestProduct";

const HomeSellerPage = () => {
  const { id } = useSelector((state) => state.register.login.dataUser);
  const dispatch = useDispatch();

  useEffect(() => {
    apiGetAllProductSeller(id, dispatch);
  }, []);

  return (
    <div className="w-full">
      {/*============================ Info General ============================*/}
      <div className="flex items-center justify-center w-full gap-3">
        <ItemInfo data={"1"} category={"Thu nhập"} />
        <ItemInfo data={"1"} category={"Hoàn thành"} />
        <ItemInfo data={"1"} category={"Chờ xác nhận"} />
        <ItemInfo data={"1"} category={"Sản phẩm"} />
        <ItemInfo data={"1"} category={"Đã bán"} />
        <ItemInfo data={"1"} category={"Khách hàng"} />
      </div>
      {/*============================ List Work ============================*/}
      <div className="flex flex-col p-5 mt-5 bg-white pb-7">
        <span className="text-lg font-semibold">Danh sách cần làm</span>
        <span className="text-sm text-gray1">Những việc bạn sẽ phải làm</span>
        <div className="grid grid-cols-4 mt-5 gap-y-8">
          <ItemWork data={0} category={"Chờ xác nhận"} border />
          <ItemWork data={0} category={"Chờ xử lí"} border />
          <ItemWork data={0} category={"Đã xử lí"} border />
          <ItemWork data={0} category={"Đơn hủy"} />
          <ItemWork data={0} category={"Yêu cầu sửa lỗi"} border />
          <ItemWork data={0} category={"Sản phẩm bị khóa"} border />
          <ItemWork data={0} category={"Báo cáo/ Hoàn tiền chờ xử lí"} border />
          <ItemWork data={0} category={"Khuyến mãi"} />
        </div>
      </div>
      {/*============================ Channel Marketing ============================*/}
      <div className="flex flex-col p-5 mt-5 bg-white pb-7">
        <p className="flex items-center justify-between">
          <span className="text-lg font-semibold">Kênh Marketing</span>
          <NavLink
            to={"/seller"}
            className="text-[15px] text-blue6 flex items-center gap-2"
          >
            <span>Xem thêm</span>
            <svg
              width="7"
              height="12"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.299982 2.1L1.69998 0.700001L7.69998 6.7L1.69998 12.7L0.299982 11.3L4.89998 6.7L0.299982 2.1Z"
                fill="#00C09E"
              />
            </svg>
          </NavLink>
        </p>
        <span className="text-sm text-gray1">Những kênh marketing của bạn</span>
        <div className="grid grid-cols-4 mt-5 gap-y-8">
          <ItemMarketing
            category={"Mã giảm giá của shop"}
            data={" Tăng đơn hàng bằng cách tạo mã giảm giá tặng cho người mua"}
            url="/seller"
          />
          <ItemMarketing
            category={"Giám giá khi mua thêm gói bảo hành"}
            data={
              " Tăng đơn hàng bằng cách tạo mã giảm giá khi khách hàng mua bảo hành"
            }
            url="/seller"
          />
          <ItemMarketing
            category={"Ưu đãi Follower"}
            data={"Khuyến khích người mua theo dõi shop"}
            url="/seller"
          />
          <ItemMarketing
            category={"Mã giảm giá DH tặng bạn"}
            data={"Tăng đơn hàng bằng cách tạo mã giảm giá tặng cho người mua"}
            url="/seller"
          />
        </div>
      </div>
    </div>
  );
};

const ItemInfo = ({ data, category }) => {
  return (
    <p className="flex flex-col items-center justify-center gap-2 px-10 py-3 bg-[#e0fff9] border border-blue6">
      <span className="font-semibold text-[18px]">{data}</span>
      <span className="text-[15px] whitespace-nowrap">{category}</span>
    </p>
  );
};

const ItemWork = ({ data, category, border }) => {
  return (
    <p
      className={`${
        border ? "border-r border-grayE8" : ""
      } flex flex-col justify-center gap-2 text-center`}
    >
      <span className="text-lg font-semibold text-greenText ">{data}</span>
      <span className="text-[15px] ">{category}</span>
    </p>
  );
};

const ItemMarketing = ({ data, category, border, url }) => {
  return (
    <NavLink to={url}>
      <div
        className={`${
          border ? "border-r border-grayE8" : ""
        } flex flex-col items-center justify-center gap-3 px-6 cursor-pointer`}
      >
        <p className="w-[60px] h-[60px] bg-[#EBFFE9] flex items-center justify-center rounded-full">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0.530433 6 1.03914 6.21071 1.41421 6.58579C1.78929 6.96086 2 7.46957 2 8C2 8.53043 1.78929 9.03914 1.41421 9.41421C1.03914 9.78929 0.530433 10 0 10V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V10C19.4696 10 18.9609 9.78929 18.5858 9.41421C18.2107 9.03914 18 8.53043 18 8C18 7.46957 18.2107 6.96086 18.5858 6.58579C18.9609 6.21071 19.4696 6 20 6V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2ZM13.5 3L15 4.5L6.5 13L5 11.5L13.5 3ZM6.81 3.04C7.79 3.04 8.58 3.83 8.58 4.81C8.58 5.27943 8.39352 5.72964 8.06158 6.06158C7.72964 6.39352 7.27943 6.58 6.81 6.58C5.83 6.58 5.04 5.79 5.04 4.81C5.04 4.34057 5.22648 3.89036 5.55842 3.55842C5.89036 3.22648 6.34057 3.04 6.81 3.04ZM13.19 9.42C14.17 9.42 14.96 10.21 14.96 11.19C14.96 11.6594 14.7735 12.1096 14.4416 12.4416C14.1096 12.7735 13.6594 12.96 13.19 12.96C12.21 12.96 11.42 12.17 11.42 11.19C11.42 10.7206 11.6065 10.2704 11.9384 9.93842C12.2704 9.60648 12.7206 9.42 13.19 9.42Z"
              fill="#00CF08"
            />
          </svg>
        </p>
        <span className="text-lg text-center h-[50px]">{category}</span>
        <span className="text-center text-[#9F9F9F] leading-5">{data}</span>
      </div>
    </NavLink>
  );
};
export default HomeSellerPage;
