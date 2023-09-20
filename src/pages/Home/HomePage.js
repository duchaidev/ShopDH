import React from "react";
import SlideHome from "../../module/homePage/Slide";
import TrendingCategories from "../../module/homePage/TrendingCategories";
import SlideFooterHomePage from "../../module/homePage/SlideFooterHomePage";
import Blog from "../../module/homePage/Blog";
import Popular from "../../module/homePage/Popular";
import { fetchProductPopular } from "../../apiRequest/apiRequestProduct";
import { useQuery } from "react-query";

const HomePage = () => {
  document.title = "Home Page";

  const { data: productPopular, isLoading } = useQuery(
    ["productPopular", "web"],
    () => fetchProductPopular("web")
  );
  //------------------------------------------fetch data------------------------------------------

  return (
    <div>
      <div></div>
      <SlideHome></SlideHome>
      <TrendingCategories isLoading={isLoading}></TrendingCategories>
      <Popular
        title="Popular Graphics"
        explore="Explore Graphics"
        url="/product"
        dataPopular={productPopular?.modifiedProducts}
        isLoading={isLoading}
      ></Popular>
      <Popular
        title="Popular Graphics123"
        explore="Explore Graphics"
        dataPopular={productPopular?.modifiedProducts}
        isLoading={isLoading}
        url="/product"
      ></Popular>
      <SlideFooterHomePage></SlideFooterHomePage>
      <Blog></Blog>
    </div>
  );
};

export default HomePage;
