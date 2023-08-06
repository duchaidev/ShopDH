import React, { useEffect, useState } from "react";
import SlideHome from "../../module/homePage/Slide";
import TrendingCategories from "../../module/homePage/TrendingCategories";
import SlideFooterHomePage from "../../module/homePage/SlideFooterHomePage";
import Blog from "../../module/homePage/Blog";
import Popular from "../../module/homePage/Popular";
import axios from "axios";

const HomePage = () => {
  document.title = "Home Page";
  const [popular, setPopular] = useState([]);
  const [dataTrendsCate, setDataTrendsCate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //------------------------------------------fetch data------------------------------------------
  useEffect(() => {
    const fetchDataPopular = async () => {
      try {
        // setTimeout(async () => {
        const popularPromise = axios.get(
          "http://localhost:3001/popularGraphics"
        );
        const dataTrendsCatePromise = axios.get(
          "http://localhost:3001/TrendingCategories"
        );

        setIsLoading(false);
        const [popularResponse, dataTrendsCateResponse] = await Promise.all([
          popularPromise,
          dataTrendsCatePromise,
        ]);
        setPopular(popularResponse.data);
        setDataTrendsCate(dataTrendsCateResponse.data);
        // }, 3000);
      } catch (err) {
        console.log("err: " + err);
      }
    };
    fetchDataPopular();
  }, []);

  return (
    <div>
      <SlideHome></SlideHome>
      <TrendingCategories
        dataTrendingCate={dataTrendsCate}
        isLoading={isLoading}
      ></TrendingCategories>
      <Popular
        title="Popular Graphics"
        explore="Explore Graphics"
        dataPopular={popular}
        isLoading={isLoading}
        url="/product"
      ></Popular>
      <Popular
        title="Popular Graphics123"
        explore="Explore Graphics"
        dataPopular={popular}
        isLoading={isLoading}
        url="/product"
      ></Popular>
      <SlideFooterHomePage></SlideFooterHomePage>
      <Blog></Blog>
    </div>
  );
};

export default HomePage;
