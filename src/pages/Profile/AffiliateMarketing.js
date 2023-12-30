import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AffiliateMarketing = () => {
  const [show, setShow] = useState(1);
  const origin = window.location.origin;
  const { dataUser } = useSelector((state) => state.register.login);
  const handleCopyToClipboard = (textToCopy) => {
    // Sử dụng API clipboard để sao chép nội dung vào clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Đã sao chép vào clipboard: ${textToCopy}`,
          showConfirmButton: false,
          timer: 900,
        });
      })
      .catch((error) => {
        toast.error(`Lỗi khi sao chép vào clipboard`);
      });
  };

  console.log(dataUser);
  return (
    <div className="bg-white mb-[50px]">
      <div className="flex justify-around border-b border-b-blue1">
        <span
          className={`py-5 border-b-[2px] w-full text-center font-medium cursor-pointer ${
            show === 1 ? "border-blue6 text-blue6" : "border-transparent"
          }`}
          onClick={() => {
            setShow(1);
          }}
        >
          Tổng quan
        </span>
        <span
          className={`py-5 border-b-[2px] w-full text-center font-medium cursor-pointer ${
            show === 2 ? "border-blue6 text-blue6" : "border-transparent"
          }`}
          onClick={() => {
            setShow(2);
          }}
        >
          Thành viên
        </span>
        <span
          className={`py-5 border-b-[2px] w-full text-center font-medium cursor-pointer ${
            show === 3 ? "border-blue6 text-blue6" : "border-transparent"
          }`}
          onClick={() => {
            setShow(3);
          }}
        >
          Lịch sử
        </span>
        <span
          className={`py-5 border-b-[2px] w-full text-center font-medium cursor-pointer ${
            show === 4 ? "border-blue6 text-blue6" : "border-transparent"
          }`}
          onClick={() => {
            setShow(4);
          }}
        >
          Mức hoa hồng
        </span>
      </div>

      {show === 1 && (
        <div className="flex flex-col p-6">
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-[15px] text-gray2">
                Thành viên đăng kí mới
              </p>
              <span className="text-xl font-medium">0 thành viên</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase text-[15px] text-gray2">
                Hoa hồng đã nhận
              </p>
              <span className="text-xl font-medium">0</span>
            </div>
          </div>
          <div className="flex px-[2%] gap-[2%]">
            <div className="w-[50%] flex flex-col gap-5">
              <span className="mt-7 text-[15px] font-bold text-gray2">
                THÔNG TIN CHI TIẾT
              </span>
              <div className="flex items-center mt-4">
                <label htmlFor="" className="w-[50%]">
                  Email:{" "}
                </label>
                <span>leduchai2k3@gmail.com</span>
              </div>
              <div className="flex items-center">
                <label htmlFor="" className="w-[50%]">
                  Mức hoa hồng:{" "}
                </label>
                <span>10% - 20%</span>
              </div>
              <div className="flex items-center">
                <label htmlFor="" className="w-[50%]">
                  Số dư hoa hồng khả dụng:{" "}
                </label>
                <span>0</span>
              </div>
              <div className="flex flex-col gap-2 mt-8">
                <label htmlFor="" className="">
                  Mã giới thiệu của bạn:{" "}
                </label>
                <div className="flex items-center w-[60%]">
                  <input
                    type="text"
                    value={dataUser.referralCode || "admin"}
                    className="px-3 h-[32px] border w-full border-blue1 outline-none"
                    readOnly
                  />
                  <button
                    className="h-[32px] min-w-[70px] bg-blue6 text-white"
                    onClick={() => {
                      handleCopyToClipboard(dataUser.referralCode || "admin");
                    }}
                  >
                    COPY
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="">
                  Link giới thiệu của bạn:{" "}
                </label>
                <div className="flex items-center w-[60%]">
                  <input
                    type="text"
                    value={`${origin}/sign-up?referrerId=${dataUser.referralCode}
                    `}
                    className="px-3 h-[32px] border w-full border-blue1 outline-none"
                    readOnly
                  />
                  <button
                    className="h-[32px] min-w-[70px] bg-blue6 text-white"
                    onClick={() => {
                      handleCopyToClipboard(`${origin}/sign-up?referrerId=${dataUser.referralCode}
                    `);
                    }}
                  >
                    COPY
                  </button>
                </div>
                <span className="text-xs text-red">
                  Bạn chỉ cần copy link hoặc mã giới thiệu để đi giới thiệu!
                </span>
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-6">
              <span className="mt-7 text-[15px] font-bold text-gray2">
                LƯU Ý
              </span>
              <p className="p-5 bg-blue6 bg-opacity-20 text-gray2 text-[14px] leading-6">
                GIỚI THIỆU NGƯỜI DÙNG ĐĂNG KÝ TÀI KHOẢN, VÀ MUA HÀNG BẠN SẼ NHẬN
                ĐƯỢC 20% TIỀN HOA HỒNG VỚI ĐƠN HÀNG ĐẦU VÀ 10% TỪ GIAO DỊCH TIẾP
                THEO CỦA KHÁCH HÀNG ĐÓ, NẾU TIỀN HOA HỒNG TỔNG CỘNG ĐƯỢC
                50.000VNĐ BẠN SẼ ĐƯỢC RÚT SỐ TIỀN ĐÓ RA HOẶC SẢN PHẨM ĐỂ SỰ DỤNG
                TÙY VÀO NHU CẦU CỦA BẠN!
              </p>

              <p className="p-5 bg-blue6 bg-opacity-20 text-gray2 text-[14px] leading-6 flex flex-col">
                <span className="text-red">Mẹo nhỏ</span>
                BẠN CÓ THỂ KIẾM NHIỀU % HOA HỒNG HƠN NẾU BẠN GIỚI THIỆU NHIỀU
                NGƯỜI DÙNG
                <span
                  className="underline cursor-pointer text-blue5"
                  onClick={() => {
                    setShow(4);
                  }}
                >
                  Chi tiết các mốc
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {show === 2 && (
        <div className="flex flex-col gap-8 p-6">
          <span className=" text-[15px] font-bold text-gray2">
            DANH SÁCH BẠN BÈ ĐƯỢC BẠN GIỚI THIỆU
          </span>
          <table className="w-full ">
            <thead className="border-b border-blue1">
              <tr className="">
                <th className="px-5 pb-3 text-start">#</th>
                <th className="pb-3 text-start">TÊN ĐĂNG NHẬP</th>
                <th className="pb-3 text-start">THỜI GIAN THAM GIA</th>
                <th className="pb-3 text-start">SỐ HOA HỒNG NHẬN ĐƯỢC</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b border-grayEC">
                <td className="px-5 py-4">123</td>
                <td className="py-4">MB Bank</td>
                <td className="py-4">50,500 VNĐ</td>
                <td className="">
                  <span className="px-3 py-1 text-xs font-medium border border-blue6">
                    50,5000 VNĐ
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {show === 3 && (
        <div className="flex flex-col gap-8 p-6">
          <span className=" text-[15px] font-bold text-gray2">
            LỊCH SỬ HOA HỒNG
          </span>
          <table className="w-full ">
            <thead className="border-b border-blue1">
              <tr className="">
                <th className="px-5 pb-3 text-start">#</th>
                <th className="pb-3 text-start">Số tiền trước</th>
                <th className="pb-3 text-start">Sô tiền thay đổi</th>
                <th className="pb-3 text-start">Số tiền hiện tại</th>
                <th className="pb-3 text-start">Thời gian</th>
                <th className="pb-3 text-start">Nội dung</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b border-grayEC">
                <td className="px-5 py-4">123</td>
                <td className="py-4">200312</td>
                <td className="py-4">MB Bank</td>
                <td className="py-4">50,500 VNĐ</td>
                <td className="py-4">2023-05-22 21:49:10</td>
                <td className="">
                  <span className="px-3 py-1 text-xs font-medium border border-blue6">
                    Thành công
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {show === 4 && (
        <div className="flex flex-col gap-8 p-6">
          <span className=" text-[15px] font-bold text-gray2">
            MỨC HOA HỒNG
          </span>
          <table className="w-full ">
            <thead className="border-b border-blue1">
              <tr className="">
                <th className="px-5 pb-3 text-start">Mức</th>
                <th className="pb-3 text-start">Số tiền kiếm từ giới thiệu</th>
                <th className="pb-3 text-start">% hoa hồng</th>
                <th className="pb-3 text-start">Sô tiền kiếm được hiện tại</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b border-grayEC">
                <td className="px-5 py-4">1</td>
                <td className="py-4">0đ - 1.000.000đ</td>
                <td className="py-4">20% - 10%</td>
                <td className="py-4">50,500 VNĐ</td>
              </tr>
              <tr className="border-b border-grayEC">
                <td className="px-5 py-4">2</td>
                <td className="py-4">1.000.001đ - 3.000.000đ</td>
                <td className="py-4">30% - 15%</td>
                <td className="py-4">50,500 VNĐ</td>
              </tr>
              <tr className="border-b border-grayEC">
                <td className="px-5 py-4">3</td>
                <td className="py-4">{"> "}3.000.001đ</td>
                <td className="py-4">35% - 25%</td>
                <td className="py-4">50,500 VNĐ</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AffiliateMarketing;
