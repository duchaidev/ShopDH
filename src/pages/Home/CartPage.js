import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Popular from "../../module/homePage/Popular";
import axios from "axios";
import { useSelector } from "react-redux";
import { fetchProductCartPage } from "../../apiRequest/apiRequestCart";
import { useQuery } from "react-query";
import { convertBase64ToImage } from "../../until/componentHandle";
import { fetchProductPopular } from "./../../apiRequest/apiRequestProduct";
import YourCart from "../../module/cartPage/YourCart";

const CartPage = () => {
  document.title = "Cart Page";

  const { data: productPopular, isLoading } = useQuery(
    ["productPopular", "web"],
    () => fetchProductPopular("web")
  );

  return (
    <div className="mb-32">
      {/*--------------------------------------Cart--------------------------------------*/}
      <YourCart></YourCart>
      {/*--------------------------------------Popular--------------------------------------*/}
      <Popular
        title="Popular Graphics"
        explore="Explore Graphics"
        dataPopular={productPopular?.modifiedProducts}
        url="/product"
        isLoading={isLoading}
      ></Popular>
      <Popular
        title="Popular Graphics"
        explore="Explore Graphics"
        dataPopular={productPopular?.modifiedProducts}
        url="/product"
        isLoading={isLoading}
      ></Popular>
    </div>
  );
};

export default CartPage;
