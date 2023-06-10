import React from "react";
import LayoutMain from "../layouts/LayoutMain";
import SlideHome from "../module/homePage/Slide";
import TrendingCategories from "../module/homePage/TrendingCategories";
import PopularTemplate from "../module/homePage/PopularTemplate";
import PopularGraphics from "../module/homePage/PopularGraphics";
import Slide2 from "../module/homePage/Slide2";
import Blog from "../module/homePage/Blog";

const HomePage = () => {

    return (
        <LayoutMain>
            <SlideHome></SlideHome>
            <TrendingCategories></TrendingCategories>
            <PopularTemplate></PopularTemplate>
            <PopularGraphics></PopularGraphics>
            <Slide2></Slide2>
            <Blog></Blog>
        </LayoutMain>
    );
};

export default HomePage;
