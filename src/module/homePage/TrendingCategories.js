import React from "react";
import ItemTrendingCategories from "../../components/home/ItemTrendingCategories";

const dataTrendsCate = [
    {
        id: 1,
        title: "Instagram Template",
        image: "21011598.jpg",
        url: "/",
    },
    {
        id: 2,
        title: "Instagram Template",
        image: "21011598.jpg",
        url: "/",
    },
    {
        id: 3,
        title: "Instagram Template",
        image: "21011598.jpg",
        url: "/",
    },
    {
        id: 4,
        title: "Instagram Template",
        image: "21011598.jpg",
        url: "/",
    },
    {
        id: 5,
        title: "Instagram Template",
        image: "21011598.jpg",
        url: "/",
    },
    {
        id: 6,
        title: "Instagram Template",
        image: "21011598.jpg",
        url: "/",
    },
];
const TrendingCategories = () => {
    return (
        <div className="mt-20 px-[5%]">
            <h2 className="text-[22px] font-bold">Browse Trending Categories</h2>
            <div className="grid w-full grid-cols-6 gap-6 mt-5">
                {dataTrendsCate.map((items) => (
                    <ItemTrendingCategories
                        key={items.id}
                        image={items.image}
                        title={items.title}
                        url={items.url}
                    ></ItemTrendingCategories>
                ))}
            </div>
        </div>
    );
};

export default TrendingCategories;
