import React, { useState } from "react";
import { convertBase64ToImage, toBase64 } from "../../untils/componentHandle";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axiosCustom from "../../services/api";

const AddCategory = () => {
  const { dataUser } = useSelector((state) => state?.register?.login);
  const [valueInput, setValueInput] = useState({
    userId: dataUser?.id,
    name: "",
    image: "",
    popular: true,
  });
  console.log(valueInput);
  const postCategory = async () => {
    try {
      await axiosCustom.post(`/product/addcategory`, valueInput);
      toast.success("Thêm thành công");
    } catch (error) {
      console.log(error);
      toast.error("Thêm thất bại");
    }
  };
  //Xử lí thay đổi ảnh đại diện
  const imageChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size <= 1024 * 1024) {
        let fileImg = e.target.files[0];
        setValueInput({
          ...valueInput,
          image: await toBase64(fileImg),
        });
      } else {
        toast.error("Ảnh quá lớn, vui lòng chọn ảnh khác < 1MB");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postCategory();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center col-span-4 gap-6">
          <div className="border w-44 h-44 border-blue1">
            <img
              src={valueInput?.image || "/avatar-def.jpg"}
              alt="avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="py-3 px-6 font-semibold text-blue6 border-blue6 border-[2px] relative">
              <span>Chọn ảnh</span>
              <input
                type="file"
                onChange={imageChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </button>
            <span className="text-[14px] text-gray1">
              Dung lượng file tối đa 1mb <br /> Định dạng: .JPEG, .PNG
            </span>
          </div>
        </div>
        <input
          type="text"
          onChange={(e) => {
            setValueInput({ ...valueInput, name: e.target.value });
          }}
          placeholder="Nhập Category"
          className="px-3 py-2 border outline-none border-blue1"
        />
        <button>Thêm</button>
      </form>
    </div>
  );
};

export default AddCategory;
