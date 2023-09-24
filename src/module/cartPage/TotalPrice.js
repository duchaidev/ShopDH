import React, { useEffect, useState } from "react";
import { FormControlLabel, Radio, RadioGroup, Tooltip } from "@mui/material";
const TotalPrice = ({ selectedProduct }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);
  const [checkDiscount, setCheckDiscount] = useState(false);
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

  return (
    <div className="flex flex-col w-full gap-5 p-5 mt-3 border rounded-sm border-blue1">
      <span className="text-[15px] font-semibold leading-5">
        Save up to 20% with a membership, or checkout without one and pay full
        price.
      </span>
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

      <button className="w-full py-4 text-[20px] font-bold text-white rounded-md bg-blue7">
        Thanh toán
      </button>
    </div>
  );
};

export default TotalPrice;
