import React from "react";
import LayoutMain from "../layouts/LayoutMain";
import SlideHome from "../module/homePage/Slide";
import TrendingCategories from "../module/homePage/TrendingCategories";
import Slide2 from "../module/homePage/Slide2";
import Blog from "../module/homePage/Blog";
import Popular from "../module/homePage/Popular";

const HomePage = () => {
    document.title = "Home Page";
    return (
        <LayoutMain>
            <SlideHome></SlideHome>
            <TrendingCategories></TrendingCategories>
            <Popular title="Popular Graphics" explore="Explore Graphics"></Popular>
            <Popular title="Popular Graphics123" explore="Explore Graphics"></Popular>
            <Slide2></Slide2>
            <Blog></Blog>
        </LayoutMain>
    );
};

export default HomePage;
