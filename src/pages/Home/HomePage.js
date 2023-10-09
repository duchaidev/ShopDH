import React, { useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //------------------------------------------fetch data------------------------------------------

  return (
    <div>
      <div></div>
      <SlideHome></SlideHome>
      <TrendingCategories isLoading={isLoading}></TrendingCategories>
      <Popular
        title="Popular Web Templates"
        explore="Explore Web"
        url="/product/Web"
        dataPopular={productPopular?.modifiedProducts}
        isLoading={isLoading}
      ></Popular>
      <Popular
        title="Popular Mobile Templates"
        explore="Explore Mobile"
        dataPopular={productPopular?.modifiedProducts}
        isLoading={isLoading}
        url="/product/Mobile"
      ></Popular>
      <SlideFooterHomePage></SlideFooterHomePage>
      <Blog></Blog>
    </div>
  );
};

export default React.memo(HomePage);
