import React from "react";
import Popular from "../../sections/homePage/Popular";
import { useQuery } from "react-query";
import { fetchProductPopular } from "./../../services/apiRequestProduct";
import YourCart from "../../sections/cartPage/YourCart";

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
