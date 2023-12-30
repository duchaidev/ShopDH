import React, { useEffect, useState } from "react";
import { FormControlLabel, Radio, RadioGroup, Tooltip } from "@mui/material";
import { updatePaymentProduct } from "../../services/apiRequestCart";
import ModalWriteReview from "../productDetails/ModalWriteReview";
import { convertBase64ToImage } from "../../untils/componentHandle";
import ModalPaymentPrice from "./ModalPaymentPrice";

const TotalPrice = ({ selectedProduct }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);
  const [checkDiscount, setCheckDiscount] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  useEffect(() => {
    let totalPrice = selectedProduct?.reduce(
      (total, item) => total + item?.productInCart?.price,
      0
    );
    setTotalPrice(totalPrice);
    if (checkDiscount) {
      setTotalPriceAfterDiscount(totalPrice - totalPrice * 0.2);
    }
  }, [selectedProduct]);
  console.log(selectedProduct);
  return (
    <div className="flex flex-col w-full gap-5 p-5 mt-3 border rounded-sm border-blue1">
      <span className="text-[15px] font-semibold leading-5">
        Save up to 20% with a membership, or checkout without one and pay full
        price.
      </span>
      <div
        className={`${
          showWriteReview ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-40 bg-gray1 transition-all`}
        onClick={() => {
          setShowWriteReview(false);
        }}
      >
        <form
          className={`${
            showWriteReview ? "translate-y-0" : "-translate-y-[100%]"
          } bg-white w-[50%] p-8 rounded-md transition-all flex flex-col gap-6`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between">
            <h3 className="text-[30px] text-blue6 font-semibold">Payment</h3>
            <svg
              width="28"
              height="28"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => {
                setShowWriteReview(false);
              }}
            >
              <path
                d="M9 0.25C4.125 0.25 0.25 4.125 0.25 9C0.25 13.875 4.125 17.75 9 17.75C13.875 17.75 17.75 13.875 17.75 9C17.75 4.125 13.875 0.25 9 0.25ZM12.375 13.375L9 10L5.625 13.375L4.625 12.375L8 9L4.625 5.625L5.625 4.625L9 8L12.375 4.625L13.375 5.625L10 9L13.375 12.375L12.375 13.375Z"
                fill="#CCCCCC"
              />
            </svg>
          </div>

          <ModalPaymentPrice
            selectedProduct={selectedProduct}
            totalPriceAfterDiscount={totalPriceAfterDiscount}
            totalPrice={totalPrice}
          ></ModalPaymentPrice>
          <div className="flex items-center justify-around px-[15%]">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
              className={`${
                selectedProduct?.length === 0
                  ? "bg-blue7 text-grayEC cursor-default"
                  : "border-blue6 hover:border-blue7 bg-blue6 hover:text-blue7 hover:bg-white hover:scale-95"
              } w-[140px] py-3 font-semibold text-white border-[2px]  transition-all rounded-md `}
            >
              Thanh toán
            </button>
          </div>
        </form>
      </div>
      {/*--------------------------------------Choose Type--------------------------------------*/}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="full"
        name="radio-buttons-group"
        className="flex flex-col gap-5 p-5 border rounded-lg border-blue1"
        onChange={(e) => {
          if (e.target.value === "discount20") {
            setCheckDiscount(true);
            setTotalPriceAfterDiscount(totalPrice - totalPrice * 0.2);
          } else {
            setCheckDiscount(false);
            setTotalPriceAfterDiscount(0);
          }
        }}
      >
        <div className="flex">
          <FormControlLabel value="full" control={<Radio />} />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-gray2">Pay full amount</span>
            <span className="text-[15px] text-gray2">${totalPrice} USD</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-blue5">Subscribe and Save</span>
          <div className="flex">
            <FormControlLabel value="discount20" control={<Radio />} />
            <div className="flex flex-col gap-2">
              <span className="font-bold text-gray2">
                Save up to 20% on my cart
              </span>
              <span className="text-[15px] text-gray2">Renews monthly</span>
            </div>
          </div>
        </div>
      </RadioGroup>
      {/*--------------------------------------Show Price--------------------------------------*/}
      <div className="w-full">
        <div className="flex items-center justify-between w-full mt-4 text-base font-bold text-gray2">
          <span>Cart Subtotal</span>
          <span
            className={`${
              totalPriceAfterDiscount ? "line-through text-gray1" : "text-blue6"
            }  `}
          >
            ${totalPrice} USD
          </span>
        </div>
        {totalPriceAfterDiscount ? (
          <div className="flex items-center justify-between w-full mt-2 text-base font-bold text-gray2">
            <span>Your total after membership</span>
            <span className="text-blue6">${totalPriceAfterDiscount} USD</span>
          </div>
        ) : (
          ""
        )}
      </div>

      <button
        className="w-full py-4 text-[20px] font-bold text-white rounded-md bg-blue7"
        // onClick={() => {
        // let producId = selectedProduct.map((item) => item.id);
        // updatePaymentProduct(selectedProduct[0].user.id, producId, "Success");
        // }}
        onClick={() => {
          setShowWriteReview(true);
        }}
      >
        Thanh toán
      </button>
    </div>
  );
};

export default TotalPrice;
