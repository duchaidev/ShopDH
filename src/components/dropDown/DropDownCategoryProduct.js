import React, { useState } from "react";
import { updateCategoryProductInCart } from "../../apiRequest/apiRequestCart";

const DropDownCategoryProduct = ({
  product,
  dataInCart,
  setDataInCart,
  userId,
}) => {
  const [expandedItems, setExpandedItems] = useState();
  const handleToggleExpand = (itemId) => {
    if (!(expandedItems === itemId)) {
      setExpandedItems(itemId);
    } else {
      setExpandedItems();
    }
  };

  const handleSetValueCategory = (classify, price, id) => {
    let newData = [...dataInCart?.data];
    if (newData.length > 0) {
      newData[id] = {
        ...newData[id],
        productInCart: {
          ...newData[id].productInCart,
          category: classify,
          price: price,
        },
      };
    }
    setDataInCart({
      data: newData,
      message: "Get product in cart successfully",
      success: true,
    });
    setExpandedItems();
    updateCategoryProductInCart(userId, newData[id].id, classify, price);
  };
  return (
    <div
      className="flex relative w-[340px] h-[42px] items-center px-3 justify-between border bg-blue2 mt-1 rounded-sm border-blue1"
      onClick={() => handleToggleExpand(product.id)}
    >
      <span className="text-[15px] font-medium">
        {product?.productInCart?.category || "Default"}
      </span>
      <span className="flex items-center gap-3 text-[15px] font-medium">
        <span>${product?.productInCart?.price}USD</span>
        <span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              product?.classification?.length === 0
                ? "hidden"
                : expandedItems === product.id
                ? "transform rotate-180"
                : ""
            } transition-all`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.58905 7.08917C6.43277 7.24539 6.22085 7.33316 5.99988 7.33316C5.77891 7.33316 5.56699 7.24539 5.41071 7.08917L0.696546 2.375C0.616954 2.29813 0.553469 2.20617 0.509794 2.1045C0.46612 2.00283 0.443132 1.89348 0.44217 1.78284C0.441209 1.67219 0.462294 1.56245 0.504194 1.46004C0.546095 1.35763 0.607973 1.26458 0.686217 1.18634C0.764461 1.10809 0.857504 1.04622 0.959917 1.00432C1.06233 0.962415 1.17206 0.941331 1.28271 0.942292C1.39336 0.943254 1.50271 0.966242 1.60438 1.00992C1.70605 1.05359 1.79801 1.11708 1.87488 1.19667L5.99988 5.32167L10.1249 1.19667C10.282 1.04487 10.4925 0.960874 10.711 0.962772C10.9295 0.964671 11.1386 1.05231 11.2931 1.20682C11.4476 1.36133 11.5352 1.57034 11.5371 1.78883C11.539 2.00733 11.455 2.21783 11.3032 2.375L6.58905 7.08917Z"
              fill="black"
            />
          </svg>
        </span>
      </span>

      <div
        className={`${
          expandedItems === product.id
            ? "opacity-100 visible"
            : "invisible opacity-0"
        } absolute z-50 top-[100%] mt-1 left-[-2px] border overflow-hidden rounded-sm shadow-md bg-blue2 border-blue1 transition-opacity duration-200 ease-in-out`}
      >
        {product?.classification?.length > 0 && (
          <button
            className="flex w-[339px] h-[42px] items-center px-3 justify-between border-b border-b-blue1"
            onClick={() =>
              handleSetValueCategory("Default", product?.price, product?.id - 1)
            }
          >
            <span className="text-[15px] font-medium">{"Default"}</span>
            <span className="flex items-center gap-3 text-[15px] font-medium">
              <span>${product?.price}USD</span>
            </span>
          </button>
        )}
        {product?.classification?.length > 0 &&
          product?.classification?.map((itemm, index) => (
            <button
              className="flex w-[339px] h-[42px] items-center px-3 justify-between border-b border-b-blue1"
              key={index}
              onClick={() =>
                handleSetValueCategory(
                  itemm.classify,
                  itemm.price,
                  product.id - 1
                )
              }
            >
              <span className="text-[15px] font-medium">{itemm?.classify}</span>
              <span className="flex items-center gap-3 text-[15px] font-medium">
                <span>${itemm?.price}USD</span>
              </span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default DropDownCategoryProduct;
