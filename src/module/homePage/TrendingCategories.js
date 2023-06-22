import React, { useEffect, useRef } from "react";
import ItemTrendingCategories from "../../components/home/ItemTrendingCategories";
import SkeletonTrendCategories from "../../components/skeleton/SkeletonTrendCategories";

const TrendingCategories = ({ dataTrendingCate, isLoading }) => {
    return (
        <div className="mt-20 px-[5%]">
            <h2 className="text-[22px] font-bold">Browse Trending Categories</h2>
            {/* <div className="h-[300px]"> */}
            <div className=''>
                {isLoading ?
                    <div className="grid w-full grid-cols-6 gap-6 mt-5">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div className='w-full h-full' key={index}>
                                <SkeletonTrendCategories></SkeletonTrendCategories>
                            </div>
                        ))}
                    </div>
                    :
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

                }
            </div>
            {/* </div> */}
        </div>
    );
};

export default TrendingCategories;
