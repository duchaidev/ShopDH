import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemProduct from "../../components/home/ItemProduct";
import Rating from "@mui/material/Rating";
import { convertBase64ToImage } from "../../untils/componentHandle";
import ModalWriteReview from "./ModalWriteReview";
const dataPopularCode = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    slugProduct: "/",
    title: "Seppo - Corporate One Page HTML Template",
    author: "LeDucHai",
    slugAuthor: "/",
    price: "140.000",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    slugProduct: "/",
    title: "Seppo - Corporate One Page HTML Template",
    author: "LeDucHai",
    slugAuthor: "/",
    price: "140.000",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    slugProduct: "/",
    title: "Seppo - Corporate One Page HTML Template",
    author: "LeDucHai",
    slugAuthor: "/",
    price: "140.000",
  },
];

const CommentProduct = ({ dataUser }) => {
  const [isReview, setIsReview] = useState(true);
  const [isComment, setIsComment] = useState(false);
  const [isFAQs, setIsFAQs] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  return (
    <div className="mt-[35px]">
      <button className="px-5 py-3 text-white rounded-md bg-blue7">
        Report this product
      </button>
      {/*-----------------------------------------productDetail Meet the SHop-----------------------------------------*/}
      <div className="mt-[45px]">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">Meet the Shop</span>
          <NavLink to="/" className="flex items-end gap-3 cursor-pointer group">
            <span className="transition-all text-blue7 group-hover:text-blue6">
              Go to Shop
            </span>
            <svg
              width="6"
              height="12"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all fill-blue7 group-hover:fill-blue6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.70698 6.29306C7.89445 6.48059 7.99976 6.73489 7.99976 7.00006C7.99976 7.26522 7.89445 7.51953 7.70698 7.70706L2.04998 13.3641C1.95773 13.4596 1.84739 13.5358 1.72538 13.5882C1.60338 13.6406 1.47216 13.6682 1.33938 13.6693C1.2066 13.6705 1.07492 13.6452 0.952023 13.5949C0.829127 13.5446 0.717474 13.4703 0.623581 13.3765C0.529689 13.2826 0.455436 13.1709 0.405155 13.048C0.354874 12.9251 0.329572 12.7934 0.330726 12.6607C0.33188 12.5279 0.359466 12.3967 0.411875 12.2747C0.464284 12.1526 0.540466 12.0423 0.635976 11.9501L5.58598 7.00006L0.635976 2.05006C0.453818 1.86146 0.353024 1.60885 0.355302 1.34666C0.357581 1.08446 0.46275 0.833648 0.648158 0.64824C0.833566 0.462832 1.08438 0.357663 1.34658 0.355384C1.60877 0.353106 1.86137 0.4539 2.04998 0.636058L7.70698 6.29306Z"
              />
            </svg>
          </NavLink>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-[35px]">
          <div className="py-[35px] flex gap-3 px-[15%] justify-center items-center flex-col shadow-md">
            <img
              src={convertBase64ToImage(dataUser?.avatar || "")}
              alt=""
              className="w-[30%] rounded-sm aspect-square object-cover "
            />
            <h2 className="text-[18px] font-semibold text-black">
              {dataUser?.firstName + " " + dataUser?.lastName}
            </h2>
            <span className="text-center line-clamp-4 overflow-ellipsis">
              {dataUser?.description}
            </span>
            <div className="flex gap-2 mt-4 mb-2">
              <button className="px-[14px] py-[6px] font-semibold text-center text-white border-[2px] border-blue7 hover:opacity-90 transition-all hover:scale-95 rounded-md bg-blue7">
                + Follow
              </button>
              <button className="px-4 py-2 font-semibold text-center rounded-md text-blue7 border-[2px] hover:opacity-90 transition-all hover:scale-95 border-blue7">
                Message
              </button>
            </div>
          </div>
          {dataPopularCode.map((item, index) => (
            <ItemProduct
              key={item.id}
              image={item.image}
              slugProduct={item.slugAuthor}
              title={item.title}
              author={item.author}
              slugAuthor={item.slugAuthor}
              price={item.price}
            ></ItemProduct>
          ))}
        </div>
      </div>
      {/*-----------------------------------------productDetail Comment-----------------------------------------*/}
      <div className="mt-[50px]">
        {/*-----------------------------------------productDetail Comment Header-----------------------------------------*/}
        <div className="flex items-center justify-between pr-4 border-b border-blue1">
          <div className="flex">
            <span
              className={` transition-all px-5 ${
                isReview ? "border-blue7 text-blue7" : "border-transparent"
              } pb-[10px] font-semibold border-b-[2px] cursor-pointer `}
              onClick={() => {
                setIsReview(true);
                setIsComment(false);
                setIsFAQs(false);
              }}
            >
              Review(0)
            </span>
            <span
              className={` transition-all ${
                isComment ? "border-blue7 text-blue7" : "border-transparent"
              } px-5 pb-[10px] font-semibold border-b-[2px] cursor-pointer`}
              onClick={() => {
                setIsComment(true);
                setIsReview(false);
                setIsFAQs(false);
              }}
            >
              Comment(0)
            </span>
            <span
              className={` transition-all ${
                isFAQs ? "border-blue7 text-blue7" : "border-transparent"
              } px-5 pb-[10px] font-semibold border-b-[2px] cursor-pointer`}
              onClick={() => {
                setIsFAQs(true);
                setIsComment(false);
                setIsReview(false);
              }}
            >
              FAQs(0)
            </span>
          </div>
          <div className="flex gap-2 pb-[10px]">
            <span>Need Help?</span>
            <NavLink to="/" className="font-semibold text-blue7">
              Contact Support
            </NavLink>
          </div>
        </div>
        {/*------------------------------productDetail Comment No reviews-----------------------------------*/}
        {/* <div className="bg-[#faf9fb] border border-[#d9d9d7] rounded-sm h-[100px] flex items-center mt-8">
          <span className="text-[24px] font-semibold px-10">
            No reviews yet
          </span>
        </div> */}
        <button
          className="px-6 py-3 mt-3 text-white rounded-md bg-blue6"
          onClick={() => {
            setShowWriteReview(true);
          }}
        >
          Viết đánh giá
        </button>
        <ModalWriteReview
          showWriteReview={showWriteReview}
          setShowWriteReview={setShowWriteReview}
        ></ModalWriteReview>
        {/*-----------------------------------------productDetail Reviews-----------------------------------------*/}
        {isReview === true ? (
          <div className="w-[60%] mt-8 border border-blue1 rounded-sm px-14 pb-10">
            <div className="w-full mt-10">
              <div className="font-bold text-[22px] border-blue1 flex items-center pt-8 pb-4 gap-4 border-b">
                <span>2 Reviews</span>
                <Rating name="read-only" value={2} readOnly size="large" />
              </div>
              <div className="flex items-center gap-4">
                <button className="px-3 py-2 transition-all border hover:text-blue7 hover:border-blue7 mt-7 border-blue1">
                  Tất cả
                </button>
                <button className="px-3 py-2 transition-all border hover:text-blue7 hover:border-blue7 mt-7 border-blue1">
                  5 sao(2)
                </button>
                <button className="px-3 py-2 transition-all border hover:text-blue7 hover:border-blue7 mt-7 border-blue1">
                  4 sao(0)
                </button>
                <button className="px-3 py-2 transition-all border hover:text-blue7 hover:border-blue7 mt-7 border-blue1">
                  3 sao(0)
                </button>
                <button className="px-3 py-2 transition-all border hover:text-blue7 hover:border-blue7 mt-7 border-blue1">
                  2 sao(0)
                </button>
                <button className="px-3 py-2 transition-all border hover:text-blue7 hover:border-blue7 mt-7 border-blue1">
                  1 sao(0)
                </button>
                <button className="px-3 py-2 transition-all border hover:text-blue7 hover:border-blue7 mt-7 border-blue1">
                  Có hình ảnh/video
                </button>
              </div>
            </div>
            <div className=" w-[60%]">
              <div className="flex flex-col gap-3 mt-14">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="object-cover w-10 h-10"
                  />
                  <div>
                    <span>Le Duc Hai</span>
                    <div className="flex">
                      <Rating name="size-small" defaultValue={2} size="small" />
                    </div>
                  </div>
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.1001 3.09998C2.65238 3.09998 3.1001 2.65226 3.1001 2.09998C3.1001 1.54769 2.65238 1.09998 2.1001 1.09998C1.54781 1.09998 1.1001 1.54769 1.1001 2.09998C1.1001 2.65226 1.54781 3.09998 2.1001 3.09998Z"
                      stroke="#CCCCCC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>13/06/2023</span>
                </div>
                <span className="leading-5 text-black">
                  Gorgeous font package, exactly as described and what I was
                  looking for. Many thanks for these beautiful fonts!Gorgeous
                  font package, exactly as described and what I was looking for.
                  Many thanks for these beautiful fonts!
                </span>
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="w-[70px] aspect-square object-cover cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="w-[70px] aspect-square object-cover cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="w-[70px] aspect-square object-cover cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="w-[70px] aspect-square object-cover cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : isComment === true ? (
          <div className="w-full mt-10">
            {/* -----------------------------------productDetail Comment---------------------------------- */}
            <div className="w-[60%] p-12 border border-blue1 rounded-sm bg-[#faf9fb]">
              <textarea
                name=""
                id=""
                rows="10"
                placeholder="Nhap Comment"
                className="w-full focus:border-blue7 transition-all border rounded-sm outline-none border-blue1 text-[14px] p-3"
              ></textarea>
              <div className="flex justify-end">
                <span className="text-[14px] text-black">0/5000</span>
              </div>
              <button className="px-5 bg-blue7 text-white font-bold rounded-sm mt-5 text-[16px] py-[14px]">
                Post a Comment
              </button>
            </div>
            <div className=" w-[60%]">
              <div className="flex flex-col gap-3 mt-14">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="object-cover w-10 h-10"
                  />
                  <span>Le Duc Hai</span>
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.1001 3.09998C2.65238 3.09998 3.1001 2.65226 3.1001 2.09998C3.1001 1.54769 2.65238 1.09998 2.1001 1.09998C1.54781 1.09998 1.1001 1.54769 1.1001 2.09998C1.1001 2.65226 1.54781 3.09998 2.1001 3.09998Z"
                      stroke="#CCCCCC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>13/06/2023</span>
                </div>
                <span className="leading-5 text-black">
                  Gorgeous font package, exactly as described and what I was
                  looking for. Many thanks for these beautiful fonts!Gorgeous
                  font package, exactly as described and what I was looking for.
                  Many thanks for these beautiful fonts!
                </span>
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="w-[70px] aspect-square object-cover cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="w-[70px] aspect-square object-cover cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="w-[70px] aspect-square object-cover cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                    className="w-[70px] aspect-square object-cover cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full mt-10">
            {/*-----------------------------------------productDetail FAQs-----------------------------------------*/}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            minima blanditiis non natus aspernatur rerum omnis quas asperiores
            tempore eum soluta commodi iure sunt aut consectetur labore, tempora
            odit? Recusandae.
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentProduct;
