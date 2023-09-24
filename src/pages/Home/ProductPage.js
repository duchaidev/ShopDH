import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ItemProduct from "../../components/home/ItemProduct";
import { fetchProductWithCategory } from "../../apiRequest/apiRequestProduct";
import { useQuery } from "react-query";
import SkeletonItem from "../../components/skeleton/SkeletonItem";
import ProductHeader from "./../../module/productPage/ProductHeader";
import FiltersLeft from "../../module/productPage/FiltersLeft";
import FiltersButtonRight from "./../../module/productPage/FiltersButtonRight";
import { toast } from "react-toastify";
import { throttle } from "lodash"; // Sử dụng lodash throttle

const ProductPage = () => {
  const { slug: category } = useParams();
  const [isActive, setIsActive] = useState(1);
  const [showFilters, setShowFilters] = useState(true);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const productListRef = useRef(null);
  // const [isFixed, setIsFixed] = useState(false);
  //-------------------------------------------Fetch Data------------------------------------------
  const {
    data: productWithCategory,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["productWithCategory", page, 1, category],
    queryFn: () => fetchProductWithCategory(page, 1, category),
    keepPreviousData: true,
  });
  //-------------------------------------------Scroll leend đầu trang lần đầu tiên------------------------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const fetchMoreData = async () => {
    setPage(page + 1);
  };
  useEffect(() => {
    const productListElement = productListRef.current;
    const handleScroll = () => {
      // Kiểm tra xem người dùng đã lướt đến cuối danh sách hay chưa
      if (
        productListElement.scrollHeight - productListElement.scrollTop <=
        productListElement.clientHeight + 100
      ) {
        // Nếu lướt đến cuối, gọi hàm để tải thêm dữ liệu
        fetchMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log(productListElement);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (productWithCategory?.modifiedProducts) {
      setProducts((prevProducts) => [
        ...prevProducts,
        ...productWithCategory?.modifiedProducts,
      ]);
    }
    if (productWithCategory?.modifiedProducts.length === 0) {
      toast.info("Hết sản phẩm để lấy thêm!", {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
  }, [productWithCategory]);
  // useEffect(() => {
  //   const handleScroll = throttle(() => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     setIsFixed(scrollTop >= 300);
  //   }, 1); // Giới hạn xử lý ở mức tối đa 1 lần mỗi 100ms

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className=" mb-28">
      {/*-----------------------------------------title-----------------------------------------*/}
      <div className="flex flex-col gap-6 h-[180px] overflow-hidden justify-center px-[5%] bg-blue2">
        <div className="flex items-center gap-1 text-[13px] font-bold">
          <span>All Items/</span>
          <span>Webs Template</span>
        </div>
        <h1 className="text-[24px] text-gray2">WebSite Templates</h1>
        <span className="text-[14px] text-gray1">
          Email, admin, landing page and website templates
        </span>
      </div>
      {/*-----------------------------------------contents-----------------------------------------*/}
      <div
        className={`px-[5%]  grid-cols-4 gap-10 pb-10 bg-grayFC ${
          showFilters ? "grid" : "flex"
        }`}
      >
        {/*-----------------------------------------filters box-----------------------------------------*/}
        <div className="col-span-1 pt-6 border-r border-blue1">
          <div
          // className={`${
          //   isFixed
          //     ? "fixed w-[calc(calc(90%/4)-34px)] top-[130px] transition-all bg-grayFC"
          //     : ""
          // }`}
          >
            <FiltersLeft
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            ></FiltersLeft>
          </div>
        </div>
        {/*-----------------------------------------product-----------------------------------------*/}
        <div className="flex flex-col col-span-3 gap-5">
          {/*-----------------------------------------product head-----------------------------------------*/}
          <ProductHeader></ProductHeader>
          {/*-----------------------------------------button filter-----------------------------------------*/}
          <FiltersButtonRight
            isActive={isActive}
            setIsActive={setIsActive}
          ></FiltersButtonRight>
          {/*-----------------------------------------product list-----------------------------------------*/}
          <div
            ref={productListRef}
            className={`grid w-full gap-6 mt-5 ${
              showFilters ? "grid-cols-4" : "grid-cols-5"
            }`}
          >
            {isLoading === true
              ? Array.from({ length: 4 }).map((_, index) => (
                  <div className="w-full h-full" key={index}>
                    <SkeletonItem></SkeletonItem>
                  </div>
                ))
              : products.map((item, index) => (
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
          <div className="w-full mt-6 flexCustom">
            {productWithCategory?.modifiedProducts?.length === 0 ? (
              ""
            ) : (
              <button
                className="w-[320px] h-[40px] flexCustom border border-blue1 rounded-lg gap-4 hover:bg-blue1 transition-all"
                onClick={fetchMoreData}
                // disabled={isFetchingMore}
              >
                {isFetching ? "Đang tải..." : "Xem thêm 20 sản phẩm"}
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4.86148L0 0H10L5 4.86148Z" fill="black" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
