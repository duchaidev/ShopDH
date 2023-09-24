import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import ImageProduct from "./../addProductPage/ImageProduct";
import { toast } from "react-toastify";
import { toBase64 } from "../../until/componentHandle";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const ModalWriteReview = ({ showWriteReview, setShowWriteReview }) => {
  const [value, setValue] = useState(5);
  const [hover, setHover] = useState(-1);
  const [listImage, setListImage] = useState(Array().fill(""));
  const [index, setIndex] = useState({
    image: 0,
  });

  // Xử lý và thêm ảnh
  const imageChange = async (e) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(e?.target?.files[0]?.type)) {
      toast.error("Invalid file type. Please select a valid image file.");
      return;
    }
    if (index.image >= 5) return toast.error("Chỉ được thêm tối đa 9 ảnh");
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size <= 5 * 1024 * 1024) {
        let fileImg = e.target.files[0];

        let temp = [...listImage];
        temp[index.image] = await toBase64(fileImg);
        setListImage(temp.filter((item) => item));
        setIndex({
          ...index,
          image: index.image + 1,
        });
      } else {
        toast.error("Ảnh quá lớn, vui lòng chọn ảnh khác < 5MB");
      }
    }
  };

  return (
    <div
      className={`${
        showWriteReview ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-40 bg-gray1 transition-all`}
      onClick={() => {
        setShowWriteReview(false);
      }}
    >
      <form
        className={`${
          showWriteReview ? "translate-y-0" : "-translate-y-[100%]"
        } bg-white w-[50%] p-8 rounded-md transition-all flex flex-col gap-6`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between">
          <h3 className="text-[30px] text-blue6 font-semibold">
            Rate and review
          </h3>
          <svg
            width="28"
            height="28"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => {
              setShowWriteReview(false);
            }}
          >
            <path
              d="M9 0.25C4.125 0.25 0.25 4.125 0.25 9C0.25 13.875 4.125 17.75 9 17.75C13.875 17.75 17.75 13.875 17.75 9C17.75 4.125 13.875 0.25 9 0.25ZM12.375 13.375L9 10L5.625 13.375L4.625 12.375L8 9L4.625 5.625L5.625 4.625L9 8L12.375 4.625L13.375 5.625L10 9L13.375 12.375L12.375 13.375Z"
              fill="#CCCCCC"
            />
          </svg>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2 mt-1 w-[50%]">
            <span className="text-[18px] text-gray1 font-semibold">Rating</span>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                size="large"
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[18px] text-gray1 font-semibold">
              Name Product
            </span>
            <span>Seppo - Corporate One Page HTML Template</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[18px] text-gray1 font-semibold">Hình ảnh</span>
          <ImageProduct
            className={"!grid-cols-none mt-0"}
            classNameTitle={"hidden"}
            listImage={listImage}
            index={index}
            setListImage={setListImage}
            setIndex={setIndex}
            imageChange={imageChange}
            totalImage={5}
          ></ImageProduct>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[18px] text-gray1 font-semibold">Review</span>
          <textarea
            name="review"
            id="review"
            cols="30"
            placeholder="Nhập review của bạn"
            className="border border-blue1 max-h-[100px] h-[100px] outline-none px-3 py-2 focus:border-blue6 rounded-md transition-all"
          ></textarea>
        </div>

        <div className="flex items-center justify-around px-[15%]">
          <button
            type="button"
            className="w-[140px] py-3 font-semibold transition-all border-[2px] hover:bg-blue7 hover:text-white hover:scale-95 rounded-md text-blue6 border-blue6"
          >
            Reset Value
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-[140px] py-3 font-semibold text-white border-[2px] border-blue6 transition-all rounded-md hover:border-blue7 bg-blue6 hover:text-blue7 hover:bg-white hover:scale-95"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalWriteReview;
