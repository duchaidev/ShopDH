import React from "react";
import { inputOnlyNumber } from "../../until/componentHandle";
import { toast } from "react-toastify";

const Withdrawal = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <h3 className="font-semibold text-gray2">TẠO YÊU CẦU RÚT TIỀN</h3>
      <form action="POST" className="flex flex-wrap justify-around">
        <div className="flex flex-col gap-6 mt-3 w-[45%]">
          <LayoutInput label={"Ngân hàng cần rút"}>
            <select
              name="bank"
              id="bank"
              className="w-full px-1 py-1 transition-all border rounded-md outline-none border-blue1"
            >
              <option value="">Ngân hàng A</option>
              <option value="">Ngân hàng B</option>
              <option value="">Ngân hàng C</option>
            </select>
          </LayoutInput>
          <LayoutInput label={"Số tài khoản"}>
            <input
              type="text"
              onKeyPress={(event) => {
                inputOnlyNumber(event, toast);
              }}
              placeholder="Số tài khoản"
              className="px-3 py-[6px] border rounded-md outline-none border-blue1 w-full focus:border-blue6 transition-all"
            />
          </LayoutInput>
          <LayoutInput label={"Chủ tài khoản"}>
            <input
              type="text"
              placeholder="Chủ tài khoản"
              className="px-3 py-[6px] border rounded-md outline-none border-blue1 w-full focus:border-blue6 transition-all"
            />
          </LayoutInput>
          <LayoutInput label={"Số tiền cần rút"}>
            <input
              type="text"
              onKeyPress={(event) => {
                inputOnlyNumber(event, toast);
              }}
              placeholder="Số tiền cần rút"
              className="px-3 py-[6px] border rounded-md outline-none border-blue1 w-full focus:border-blue6 transition-all"
            />
          </LayoutInput>
        </div>
        <div className="flex flex-col gap-6 mt-3 w-[45%]">
          <LayoutInput label={"Email"}>
            <div className="flex gap-2">
              <input
                type="text"
                value={"leduchai2k3@gmail.com"}
                readOnly
                className="px-3 py-[6px] border rounded-md outline-none border-blue1 w-full"
              />
              <button
                type="button"
                className="min-w-[85px] py-1 text-white rounded-md whitespace-nowrap bg-blue6"
              >
                Gửi mã
              </button>
            </div>
            <span className="text-[12px] text-red">
              Nếu mất quyền truy cập gmail nhắn tin admin để được hỗ trợ!
            </span>
          </LayoutInput>
          <LayoutInput label={"Mã xác nhận"}>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Mã xác nhận được gửi về mail"
                className="px-3 py-[6px] border rounded-md outline-none border-blue1 w-full focus:border-blue6 transition-all"
              />
              <button
                type="button"
                className="min-w-[85px] py-1 text-white rounded-md whitespace-nowrap bg-blue6"
              >
                Kiểm tra
              </button>
            </div>
          </LayoutInput>
          <LayoutInput label={"Nhập mật khẩu"}>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nhập mật khẩu"
                className="px-3 py-[6px] border rounded-md outline-none border-blue1 w-full focus:border-blue6 transition-all"
              />
              <button
                type="button"
                className="min-w-[85px] py-1 text-white rounded-md whitespace-nowrap bg-blue6"
              >
                Kiểm tra
              </button>
            </div>
          </LayoutInput>
        </div>
        <button
          type="button"
          className="w-[20%] bg-blue6 mt-5 py-3 rounded-md text-white"
        >
          Gửi yêu cầu
        </button>
      </form>
    </div>
  );
};

const LayoutInput = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="bank" className="text-gray2">
        {label}
      </label>
      {children}
    </div>
  );
};
export default Withdrawal;
