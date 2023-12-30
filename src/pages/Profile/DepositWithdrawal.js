import { Pagination, PaginationItem, Stack } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Deposit from "../../sections/depositWithdrawal/Deposit";
import Withdrawal from "../../sections/depositWithdrawal/Withdrawal";

const DepositWithdrawal = () => {
  const [deposit, setDeposit] = useState(true);
  return (
    <div className="flex flex-col gap-3 mb-32">
      {/*--------------------------------------Chuyển khoản--------------------------------------*/}
      <div className="flex flex-col bg-white">
        <div className=" font-semibold text-[18px] border-b border-blue1 flex items-center justify-between">
          <button
            className={`${
              deposit ? "border-blue6 text-blue6" : "border-transparent"
            } p-5 border-b-[2px] w-[50%] transition-all`}
            onClick={() => {
              setDeposit(true);
            }}
          >
            Nạp tiền qua ngân hàng - ATM - Ví điện tử
          </button>
          <button
            className={`${
              !deposit ? "border-blue6 text-blue6" : "border-transparent"
            } p-5 w-[50%] border-b-[2px] transition-all`}
            onClick={() => {
              setDeposit(false);
            }}
          >
            Rút tiền
          </button>
        </div>
        {/*--------------------------------------Lưu ý--------------------------------------*/}
        {deposit ? <Deposit></Deposit> : <Withdrawal></Withdrawal>}
      </div>
      {/*--------------------------------------Lịch sử nạp tiền --------------------------------------*/}
      <div className="bg-white">
        <div className="flex items-center justify-between w-full p-5 border-b border-blue1">
          <span className="font-semibold">
            {deposit ? "Lịch sử nạp tiền" : "Lịch sử rút tiền"}
          </span>
          <button className="px-5 py-3 font-medium text-white rounded-md bg-blue6">
            Sắp xếp theo
          </button>
        </div>
        <div className="w-full p-5 ">
          <table className="w-full ">
            <thead className="border-b border-blue1">
              <tr className="">
                <th className="px-5 pb-3 text-start">#</th>
                <th className="pb-3 text-start">Mã giao dịch</th>
                <th className="pb-3 text-start">Loại Bank</th>
                <th className="pb-3 text-start">Số tiền</th>
                <th className="pb-3 text-start">Thời gian nạp</th>
                <th className="pb-3 text-start">Trạng thái</th>
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
        <div className="flex justify-center py-6 text-center">
          <Stack spacing={2}>
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default DepositWithdrawal;
