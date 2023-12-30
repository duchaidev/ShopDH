import React, { useEffect, useRef } from "react";
import ItemTrendingCategories from "../../components/home/ItemTrendingCategories";
import SkeletonTrendCategories from "../../components/skeleton/SkeletonTrendCategories";
import { useQuery } from "react-query";
import { convertBase64ToImage } from "../../untils/componentHandle";
import { apiGetCategories } from "../../services/apiRequestProduct";

const TrendingCategories = ({ isLoading }) => {
  const { data: category } = useQuery({
    queryKey: ["apiGetCategories"],
    queryFn: () => apiGetCategories(),
  });
  return (
    <div className="mt-20 px-[5%]">
      <h2 className="text-[22px] font-bold">Browse Trending Categories</h2>
      {/* <div className="h-[300px]"> */}
      <div className="">
        {isLoading ? (
          <div className="grid w-full grid-cols-6 gap-6 mt-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="w-full h-full" key={index}>
                <SkeletonTrendCategories></SkeletonTrendCategories>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid w-full grid-cols-6 gap-6 mt-5">
            {category?.categories &&
              category?.categories
                ?.slice(0, 6)
                .map((items) => (
                  <ItemTrendingCategories
                    key={items.id}
                    image={convertBase64ToImage(items.image)}
                    title={items.name}
                    url={items.slug}
                  ></ItemTrendingCategories>
                ))}
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default TrendingCategories;
