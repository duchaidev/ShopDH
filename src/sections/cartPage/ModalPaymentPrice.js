import React from "react";
import { convertBase64ToImage } from "../../untils/componentHandle";

const ModalPaymentPrice = ({
  selectedProduct,
  totalPriceAfterDiscount,
  totalPrice,
}) => {
  console.log();
  return (
    <>
      {selectedProduct?.length === 0 ? (
        <div>
          {" "}
          <span>Vui lòng chọn sản phẩm để thanh toán</span>{" "}
        </div>
      ) : (
        <div>
          {selectedProduct?.length > 0 &&
            selectedProduct?.map((item) => (
              <div
                className={`grid grid-cols-20 px-[10%] py-4 mt-3 border-t border-blue1`}
                key={item.id}
              >
                <div className="flex items-center gap-5 col-span-15">
                  <div className="w-48 p-[6px] border rounded-sm border-blue1">
                    <img
                      src={convertBase64ToImage(
                        item?.productInCart?.image || ""
                      )}
                      alt="img"
                      className="w-full object-cover aspect-[7/4] rounded-sm border border-blue2"
                    />
                  </div>
                  <div className="flex flex-col gap-3 text-base">
                    <div>
                      <h3 className="text-lg font-medium">{item?.title}</h3>
                      <p>
                        <span>by </span>
                        <span className="font-medium text-blue6">
                          {item?.user?.username ||
                            item?.user?.firstName + " " + item?.user?.lastName}
                        </span>
                      </p>
                    </div>
                    <div className="relative">
                      <span className="text-[15px] font-medium">
                        Category:{" "}
                        <span className="text-blue6">
                          {item?.productInCart?.category || "Default"}
                        </span>
                      </span>

                      {/* ======================== DropDown Category ======================== */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end col-span-4">
                  <span className="text-lg font-bold">
                    ${item?.productInCart?.price}
                  </span>
                </div>
              </div>
            ))}
          <div className="grid grid-cols-20 px-[10%] py-4 mt-3 border-t border-blue1">
            <div className="flex items-center gap-5 col-span-15">
              <span className="text-lg font-semibold text-red">Tổng</span>
            </div>
            <div className="flex flex-col items-end col-span-4">
              <span className="text-lg font-bold text-red">
                $
                {totalPriceAfterDiscount ? totalPriceAfterDiscount : totalPrice}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Nhập mật khẩu xác nhận"
              className="px-3 py-2 w-[40%] transition-all border outline-none border-blue1 focus:border-blue6"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPaymentPrice;
