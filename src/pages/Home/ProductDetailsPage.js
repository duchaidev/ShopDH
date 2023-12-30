import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import CommentProduct from "../../sections/productDetails/CommentProduct";
import MoreProduct from "../../sections/productDetails/MoreProduct";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Thumbs, FreeMode } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FormControlLabel, Radio, RadioGroup, Tooltip } from "@mui/material";
import { useQuery } from "react-query";
import { apiGetOneProduct } from "../../services/apiRequestProduct";
import {
  convertBase64ToImage,
  formatISODateToInputDate,
  truncateText,
} from "../../untils/componentHandle";
import { useDispatch, useSelector } from "react-redux";
import { addProductInCart } from "../../services/apiRequestCart";
import SkeletonProductDetail from "../../components/skeleton/SkeletonProductDetail";
import {
  IconArrowDown,
  IconDate,
  IconLayer,
  IconRule,
  IconSize,
  IconTech,
} from "../../assets/icons";

const ProductDetailsPage = ({ productKey }) => {
  const toastId = useRef(null);
  const dataCart = useSelector((state) => state.cart.getAllProductInCart);
  const { dataUser } = useSelector((state) => state?.register?.login);
  const [showDescription, setShowDescription] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: detailProduct } = useQuery(["detailProduct", slug], () =>
    apiGetOneProduct(slug)
  );
  const listImg = [
    ...(detailProduct?.modifiedProduct?.imageMain || ""),
    ...(detailProduct?.modifiedProduct?.images || ""),
  ];
  const dispatch = useDispatch();

  const [newData, setNewData] = useState({
    id: dataCart?.data?.data?.length + 1,
    userId: dataUser?.id,
    productId: detailProduct?.modifiedProduct?.id,
    status: "InCart",
    image: convertBase64ToImage(
      detailProduct?.modifiedProduct?.imageMain[0] || " "
    ),
    title: detailProduct?.modifiedProduct?.title,
    codeDiscount: "",
    price: detailProduct?.modifiedProduct?.price,
    paid: false,
    category: "",
  });

  useEffect(() => {
    setNewData({
      ...newData,
      id: dataCart?.data?.data?.length + 1,
      userId: dataUser?.id,
      productId: detailProduct?.modifiedProduct?.id,
      status: "InCart",
      image: convertBase64ToImage(
        detailProduct?.modifiedProduct?.imageMain[0] || " "
      ),
      title: detailProduct?.modifiedProduct?.title,
      price: detailProduct?.modifiedProduct?.price,
    });
  }, [detailProduct?.modifiedProduct?.id]);

  return (
    <div className="px-[8%] mt-[40px] mb-28">
      {/* <div> */}
      {!detailProduct?.modifiedProduct.title ? (
        <SkeletonProductDetail></SkeletonProductDetail>
      ) : (
        <>
          <h1 className="font-bold text-[24px] max-w-[65%]">
            {detailProduct?.modifiedProduct?.title}
          </h1>
          <div className="flex items-center gap-4 mt-5">
            <img
              src={convertBase64ToImage(
                detailProduct?.modifiedProduct?.user?.avatar
              )}
              alt=""
              className="w-[25px] h-[25px] object-cover rounded-full"
            />
            <span className="text-[14px]">
              {detailProduct?.modifiedProduct?.user?.firstName +
                " " +
                detailProduct?.modifiedProduct?.user?.lastName ||
                detailProduct?.modifiedProduct?.user?.username ||
                "Anonymous"}
            </span>
          </div>
          {/*-----------------------------------------productDetail Image + Price-----------------------------------------*/}
          <div className="grid grid-cols-10 gap-10 mt-8">
            {/*-----------------------------------------productDetail Image-----------------------------------------*/}
            <div className="flex flex-col col-span-7 gap-3">
              <div className="w-full object-cover aspect-[7/4] rounded-lg">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {listImg?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={convertBase64ToImage(item)}
                        alt=""
                        className="w-full object-cover aspect-[7/4] rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex items-center w-full gap-3">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={6}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[Pagination, Navigation]}
                  className="w-full mySwiper"
                >
                  {listImg.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={convertBase64ToImage(item)}
                        alt=""
                        className="object-cover aspect-[7/4] w-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button className="flex flex-col items-center justify-center ml-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 14C0 16.7689 0.821086 19.4757 2.35943 21.778C3.89777 24.0803 6.08427 25.8747 8.64243 26.9343C11.2006 27.9939 14.0155 28.2712 16.7313 27.731C19.447 27.1908 21.9416 25.8574 23.8995 23.8995C25.8574 21.9416 27.1908 19.447 27.731 16.7313C28.2712 14.0155 27.9939 11.2006 26.9343 8.64243C25.8747 6.08427 24.0803 3.89777 21.778 2.35943C19.4757 0.821086 16.7689 0 14 0C10.287 0 6.72601 1.475 4.1005 4.1005C1.475 6.72601 0 10.287 0 14ZM6 13H18.15L12.57 7.393L14 6L22 14L14 22L12.57 20.573L18.15 15H6V13Z"
                      fill="#AFAFAF"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-blue6">
                    Show More
                  </span>
                </button>
              </div>
            </div>
            {/*-----------------------------------------productDetail Price-----------------------------------------*/}
            <div className="flex flex-col col-span-3 gap-3">
              {/*-----------------------------------------productDetail Price Box1-----------------------------------------*/}
              <div className="border rounded-lg flex flex-col gap-3 border-blue1 p-[25px]">
                <div className="text-[16px] font-bold flex justify-between mb-2">
                  <span>Price</span>
                  <span>
                    $
                    {(detailProduct?.modifiedProduct?.price / 22000).toFixed(2)}{" "}
                    USD
                  </span>
                </div>
                <button
                  className="w-full py-4 border-[2px] border-blue7 text-blue7 font-bold text-[18px] transition-all over:opacity-90 cursor-pointer hover:scale-95 rounded-lg"
                  onClick={() => {
                    addProductInCart(dispatch, newData, dataCart, toastId);
                  }}
                >
                  Add To Cart
                </button>
                <button className="w-full py-4 border-[2px] border-blue7 text-white bg-blue7 font-bold transition-all hover:opacity-90 cursor-pointer hover:scale-95 text-[18px] rounded-lg">
                  Buy Now
                </button>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">License</span>
                    <span>Personal license</span>
                  </div>

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="default"
                    name="radio-buttons-group"
                    onChange={(e) => {
                      setNewData({
                        ...newData,
                        category: e.target.value || "",
                      });
                    }}
                  >
                    <p className="flex items-center justify-between w-full">
                      <FormControlLabel
                        value="default"
                        control={<Radio />}
                        label="Default"
                      />
                      <span className="leading-[42px]">
                        $
                        {(
                          detailProduct?.modifiedProduct?.price / 22000
                        ).toFixed(2)}{" "}
                        USD
                      </span>
                    </p>
                    {detailProduct?.modifiedProduct?.classification.length >
                      0 &&
                      detailProduct?.modifiedProduct?.classification.map(
                        (item, index) => (
                          <p
                            className="relative flex items-center justify-between w-full"
                            key={index}
                          >
                            {item?.classify?.length > 20 ? (
                              <Tooltip
                                title={item?.classify}
                                placement="right"
                                arrow
                              >
                                <FormControlLabel
                                  value={item?.classify}
                                  control={<Radio />}
                                  label={truncateText(item?.classify || "", 20)}
                                  className="whitespace-nowrap"
                                />
                              </Tooltip>
                            ) : (
                              <FormControlLabel
                                value={item?.classify}
                                control={<Radio />}
                                label={item?.classify}
                                className="whitespace-nowrap"
                              />
                            )}
                            <span className="leading-[42px] whitespace-nowrap">
                              ${(item?.price / 22000).toFixed(2)} USD
                            </span>
                          </p>
                        )
                      )}
                  </RadioGroup>
                  {/* </div> */}
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-semibold">Categories</span>
                    <Tooltip
                      title={detailProduct?.modifiedProduct?.category.join(
                        " / "
                      )}
                      arrow
                    >
                      <span className="cursor-pointer">
                        {truncateText(
                          detailProduct?.modifiedProduct?.category.join(
                            " / "
                          ) || "",
                          24 // Số ký tự tối đa trước khi cắt chuỗi
                        )}
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>
              {/*-----------------------------------------productDetail Price Box2-----------------------------------------*/}
              <div className="rounded-lg bg-blue3 py-[20px] px-[10%] flex flex-col gap-5 items-center">
                <span className="font-medium text-center text-blue7">
                  Save 20% on our entire catalogue with a membership
                </span>
                <span className="font-semibold underline cursor-pointer text-blue5">
                  Add To Card
                </span>
              </div>
            </div>
          </div>

          {/* </div> */}
          {/*-----------------------------------------productDetail Description-----------------------------------------*/}
          <div className="grid grid-cols-10 gap-10 mt-16">
            {/*-----------------------------------------productDetail About-----------------------------------------*/}
            <div className="flex flex-col col-span-7 gap-5 pr-10">
              <h2 className="text-[24px] font-bold">About the Product</h2>
              <div className="relative w-full h-full">
                <span
                  className={`${
                    showDescription ? "" : "line-clamp-5"
                  } leading-[22px] text-black overflow-ellipsis transition-all html-content`}
                  dangerouslySetInnerHTML={{
                    __html: convertBase64ToImage(
                      detailProduct?.modifiedProduct?.description
                    ),
                  }}
                ></span>
                <div
                  className={`${
                    showDescription ? "opacity-0" : ""
                  } absolute bottom-[-6px] w-full h-8 bg_linear`}
                ></div>
              </div>
              <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setShowDescription(!showDescription);
                }}
              >
                <span className="text-blue7">
                  {showDescription ? "Hidden More" : "Show more"}
                </span>
                <div className={`${showDescription ? "rotate-180" : ""} mt-1`}>
                  <IconArrowDown></IconArrowDown>
                </div>
              </button>
              <div className="px-[35px] py-[30px] bg-blue2 flex justify-between items-center rounded-md">
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="text-[18px] font-semibold">
                    Spread the Word and Earn!
                  </h3>
                  <span>Earn commission from each customer you refer.</span>
                </div>
                <div>
                  <NavLink
                    to="/"
                    className="font-semibold underline text-blue7"
                  >
                    Join our Partner Program
                  </NavLink>
                </div>
              </div>
            </div>
            {/*-----------------------------------------productDetail Specs-----------------------------------------*/}
            <div className="flex flex-col col-span-3 gap-7">
              <h2 className="text-[24px] font-bold">Product Specs</h2>
              <div className="flex items-center gap-3 mt-[-8px]">
                <IconDate></IconDate>
                <span className="">
                  Created:{" "}
                  {formatISODateToInputDate(
                    detailProduct?.modifiedProduct?.createdAt,
                    true
                  )}
                </span>
              </div>
              <div
                className={`${
                  !detailProduct?.modifiedProduct?.size ? "hidden" : ""
                } flex items-center gap-3`}
              >
                <IconSize></IconSize>
                <span className="">File Size: 707.24 MB</span>
              </div>
              <div
                className={`${
                  !detailProduct?.modifiedProduct?.dimensions ? "hidden" : ""
                } flex items-center gap-3`}
              >
                <IconRule></IconRule>
                <span className="">Dimensions: 3000 x 3000 px</span>
              </div>
              <div className="flex items-center gap-3">
                <IconTech></IconTech>
                <span className="">
                  {detailProduct?.modifiedProduct?.technology}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconLayer></IconLayer>
                <span className="">Layered</span>
              </div>
              <span className="font-semibold cursor-pointer text-blue7">
                Preview the Files
              </span>
            </div>
          </div>
          {/*-----------------------------------------productDetail Comment-----------------------------------------*/}
          <CommentProduct
            dataUser={detailProduct?.modifiedProduct?.user}
          ></CommentProduct>
          {/*-----------------------------------------productDetail You May Also Like-----------------------------------------*/}
          <MoreProduct></MoreProduct>
          {/*-----------------------------------------productDetail Keep Exploring-----------------------------------------*/}
          <div className="flex flex-col mt-20">
            <h2 className="text-[22px] font-bold mb-2">Keep Exploring</h2>
            <div className="flex gap-3 mt-5">
              <button className="px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full">
                Stylish
              </button>
              <button className="px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full">
                Classy
              </button>
              <button className="px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full">
                Font
              </button>
              <button className="px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full">
                Typeface
              </button>
              <button className="px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full">
                Sharp
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(ProductDetailsPage);
