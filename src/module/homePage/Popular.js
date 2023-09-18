import React from "react";
import { NavLink } from "react-router-dom";
import ItemProduct from "../../components/home/ItemProduct";
import SkeletonItem from "../../components/skeleton/SkeletonItem";
import { convertBase64ToImage } from "../../until/componentHandle";

const Popular = ({ title, url, explore, isLoading, dataPopular }) => {
  return (
    <div className="mt-20 px-[5%] pb-5">
      <div className="flex justify-between">
        <h2 className="text-[22px] font-bold mb-2">{title}</h2>
        <NavLink to={url} className="flex items-end gap-4 group">
          <span className="transition-all group-hover:text-blue6">
            {explore}
          </span>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            className="transition-all group-hover:text-blue6 stroke-gray1 group-hover:stroke-blue6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L6 6L1 11" strokeWidth="2" />
          </svg>
        </NavLink>
      </div>
      <div className="h-[300px]">
        {isLoading ? (
          <div className="grid w-full grid-cols-5 gap-6 mt-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="w-full h-full" key={index}>
                <SkeletonItem></SkeletonItem>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="grid w-full grid-cols-5 gap-6 mt-5">
              {dataPopular?.map((item, index) => (
                <ItemProduct
                  key={item?.id}
                  image={item?.imageMain[0] || ""}
                  slugProduct={`/product-details/${item?.slug}`}
                  title={item?.title}
                  author={
                    item?.user?.username ||
                    item?.user?.firstName + item?.user?.lastName
                  }
                  slugAuthor={item?.slugAuthor}
                  price={item?.price}
                  id={item?.id}
                ></ItemProduct>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Popular;
