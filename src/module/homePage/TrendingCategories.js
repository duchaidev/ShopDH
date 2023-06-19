import React from "react";
import ItemTrendingCategories from "../../components/home/ItemTrendingCategories";

const TrendingCategories = ({ dataTrendingCate }) => {
    return (
        <div className="mt-20 px-[5%]">
            <h2 className="text-[22px] font-bold">Browse Trending Categories</h2>
            <div className="grid w-full grid-cols-6 gap-6 mt-5">
                {dataTrendingCate.map((items) => (
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
