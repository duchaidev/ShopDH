import React from "react";
import { FormUIAddProduct } from "../../pages/Seller/AddProductSellerPage";
import { toast } from "react-toastify";

const ClassifyProduct = ({
  index,
  setIndex,
  classifies,
  handleClassifyChange,
  imageChangeClassify,
  setClassifies,
}) => {
  return (
    <FormUIAddProduct title={"Phân loại hàng"} classNameTitle={"leading-9"}>
      <p
        className="cursor-pointer hover:bg-blue6 hover:text-gray2 transition-all hover:bg-opacity-30 px-5 h-[36px] text-[15px] text-blue6 flex items-center justify-center border border-dashed max-w-max rounded-sm"
        onClick={() => {
          if (index.classify === 0) {
            return setIndex({
              ...index,
              classify: index.classify + 1,
            });
          }
          if (index.classify >= 5)
            return toast.error("Tối đa 5 nhóm phân loại");
          if (!classifies[index.classify - 1]?.classify)
            return toast.error("Vui lòng nhập tên nhóm phân loại");
          if (!classifies[index.classify - 1]?.price)
            return toast.error("Vui lòng nhập giá nhóm phân loại");
          if (!classifies[index.classify - 1]?.image)
            return toast.error("Vui lòng chọn hình ảnh nhóm phân loại");
          setIndex({
            ...index,
            classify: index.classify + 1,
          });
        }}
      >
        + Thêm nhóm phân loại
      </p>
      <div className="top-[50px] border w-[100%] border-blue1 border-b-transparent rounded-sm">
        <div className="grid h-10 grid-cols-3 border-b border-blue1 bg-grayE8">
          <span className="h-full leading-10 text-center border-r border-blue1">
            Thêm phân loại
          </span>
          <span className="h-full col-span-1 leading-10 text-center border-r border-blue1">
            Giá
          </span>
          <span className="col-span-1 leading-10 text-center">Hình ảnh</span>
        </div>
        {Array.from({ length: index.classify }).map((_, i) => {
          return (
            <div
              className="relative grid grid-cols-3 border-b border-blue1 group"
              key={i}
            >
              <div className="flex items-center justify-center col-span-1 px-6 py-3 border-r border-blue1">
                <input
                  placeholder="Nhập phân loại"
                  type="text"
                  value={classifies[i]?.classify || ""}
                  onChange={(e) =>
                    handleClassifyChange(i, "classify", e.target.value)
                  }
                  className="w-full px-3 text-sm transition-all border outline-none focus:border-blue6 h-7 border-blue1"
                />
              </div>
              <div className="flex items-center justify-center col-span-1 px-6 py-3 border-r border-blue1">
                <input
                  placeholder="Nhập giá"
                  type="text"
                  value={classifies[i]?.price || ""}
                  onChange={(e) =>
                    handleClassifyChange(i, "price", e.target.value)
                  }
                  className="w-full px-3 text-sm transition-all border outline-none focus:border-blue6 h-7 border-blue1"
                />
              </div>
              <div className="flex items-center justify-center col-span-1 py-3 ">
                <p className="relative w-[50px] flex flex-col items-center gap-1 justify-center h-[50px] rounded-lg border border-dashed border-blue1">
                  <img
                    src={classifies[i]?.image}
                    alt=""
                    className={`${
                      classifies[i]?.image
                        ? "object-cover w-full h-full rounded-lg"
                        : "hidden"
                    } `}
                  />
                  <input
                    type="file"
                    className="absolute w-full h-full opacity-0"
                    accept="image/*"
                    onChange={(e) => {
                      imageChangeClassify(e, i);
                    }}
                  />
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${classifies[i]?.image ? "hidden" : ""}`}
                  >
                    <path
                      d="M16.4998 10.5V13H18.9998V14.6667H16.4998V17.1667H14.8332V14.6667H12.3332V13H14.8332V10.5H16.4998ZM16.5065 0.5C16.9632 0.5 17.3332 0.870833 17.3332 1.3275V9.11833C16.7979 8.92925 16.2342 8.83286 15.6665 8.83333V2.16667H2.33317L2.334 13.8333L10.0773 6.08917C10.2206 5.9454 10.4115 5.85894 10.6141 5.84605C10.8167 5.83316 11.017 5.89473 11.1773 6.01917L11.2557 6.09L14.2098 9.04833C13.5637 9.24522 12.9641 9.57092 12.4473 10.0058C11.9304 10.4407 11.507 10.9757 11.2025 11.5787C10.8981 12.1816 10.7189 12.84 10.6757 13.5141C10.6326 14.1881 10.7264 14.864 10.9515 15.5008L1.49317 15.5C1.27385 15.4998 1.06358 15.4125 0.908578 15.2573C0.753572 15.1022 0.666504 14.8918 0.666504 14.6725V1.3275C0.668029 1.10865 0.755587 0.899181 0.910265 0.744348C1.06494 0.589515 1.27432 0.501746 1.49317 0.5H16.5065ZM5.6665 3.83333C6.10853 3.83333 6.53245 4.00893 6.84501 4.32149C7.15757 4.63405 7.33317 5.05797 7.33317 5.5C7.33317 5.94203 7.15757 6.36595 6.84501 6.67851C6.53245 6.99107 6.10853 7.16667 5.6665 7.16667C5.22448 7.16667 4.80055 6.99107 4.48799 6.67851C4.17543 6.36595 3.99984 5.94203 3.99984 5.5C3.99984 5.05797 4.17543 4.63405 4.48799 4.32149C4.80055 4.00893 5.22448 3.83333 5.6665 3.83333Z"
                      fill="#00C09E"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center w-full col-span-3 gap-2">
                <input
                  type="text"
                  placeholder="Nhập url download phân loại"
                  className="w-full border text-[15px] px-3 py-1 outline-none border-blue1 focus:border-blue6 transition-all"
                  value={classifies[i]?.urlDownloadClassify || ""}
                  onChange={(e) =>
                    handleClassifyChange(
                      i,
                      "urlDownloadClassify",
                      e.target.value
                    )
                  }
                />
              </div>
              <p
                className="group-hover:opacity-100 transition-all opacity-0 absolute left-0 cursor-pointer group/delete hover:opacity-100 -translate-x-[100%] hover:bg-opacity-70 hover:bg-red p-2"
                onClick={async () => {
                  delete classifies[i];
                  setClassifies(classifies.filter((item) => item));
                  setIndex({
                    ...index,
                    classify: index.classify - 1,
                  });
                }}
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all group-hover/delete:fill-white fill-black"
                >
                  <path d="M2.8335 15.5C2.37516 15.5 1.98266 15.3367 1.656 15.01C1.32933 14.6833 1.16627 14.2911 1.16683 13.8333V3H0.333496V1.33333H4.50016V0.5H9.50016V1.33333H13.6668V3H12.8335V13.8333C12.8335 14.2917 12.6702 14.6842 12.3435 15.0108C12.0168 15.3375 11.6246 15.5006 11.1668 15.5H2.8335ZM11.1668 3H2.8335V13.8333H11.1668V3ZM4.50016 12.1667H6.16683V4.66667H4.50016V12.1667ZM7.8335 12.1667H9.50016V4.66667H7.8335V12.1667Z" />
                </svg>
              </p>
            </div>
          );
        })}
      </div>
    </FormUIAddProduct>
  );
};

export default ClassifyProduct;
