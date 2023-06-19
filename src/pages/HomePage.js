import React, { useEffect, useState } from "react";
import LayoutMain from "../layouts/LayoutMain";
import SlideHome from "../module/homePage/Slide";
import TrendingCategories from "../module/homePage/TrendingCategories";
import Slide2 from "../module/homePage/Slide2";
import Blog from "../module/homePage/Blog";
import Popular from "../module/homePage/Popular";
import axios from "axios";

const HomePage = () => {
    document.title = "Home Page";
    const [popular, setPopular] = useState([]);
    const [dataTrendsCate, setDataTrendsCate] = useState([]);

    //------------------------------------------fetch data------------------------------------------
    useEffect(() => {
        const fetchDataPopular = async () => {
            try {
                const popularPromise = axios.get("http://localhost:3000/popularGraphics");
                const dataTrendsCatePromise = axios.get("http://localhost:3000/TrendingCategories");
                const [popularResponse, dataTrendsCateResponse] = await Promise.all([
                    popularPromise, dataTrendsCatePromise
                ]);;
                setPopular(popularResponse.data);
                setDataTrendsCate(dataTrendsCateResponse.data);
            } catch (err) {
                console.log("err: " + err);
            }
        }
        fetchDataPopular();
    }, []);

    return (
        <LayoutMain>
            <SlideHome></SlideHome>
            <TrendingCategories dataTrendingCate={dataTrendsCate}></TrendingCategories>
            <Popular title="Popular Graphics" explore="Explore Graphics" dataPopular={popular} url="/product"></Popular>
            <Popular title="Popular Graphics123" explore="Explore Graphics" dataPopular={popular} url="/product"></Popular>
            <Slide2></Slide2>
            <Blog></Blog>
        </LayoutMain>
    );
};

export default HomePage;
