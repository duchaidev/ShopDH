import React, { useEffect, useState } from "react";
import { convertBase64ToImage, toBase64 } from "../../until/componentHandle";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  apiAddProduct,
  apiEditProduct,
  apiGetOneProduct,
} from "../../apiRequest/apiRequestProduct";
import Switch from "@mui/material/Switch";
import TextEditor from "../../components/TextEditor";
import { useParams } from "react-router-dom";

const AddProductSellerPage = () => {
  const { id } = useParams();
  const toastId = React.useRef(null);
  const dispatch = useDispatch();

  const { dataUser } = useSelector((state) => state.register.login);
  const { error, loading } = useSelector((state) => state.product.add);
  const [listImage, setListImage] = useState(Array().fill(""));
  const [classifies, setClassifies] = useState(Array().fill({}));
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState({
    image: 0,
    classify: 1,
  });
  const [valueDescription, setValueDescription] = useState("");
  const [values, setValues] = useState({
    userId: dataUser.id,
    title: "",
    price: "",
    categoryId: "",
    urlDemo: "",
    popular: false,
    urlDownload: "",
    points: 200,
    technology: "",
    status: "ACTIVE",
    preOrder: false,
  });

  // Chạy khi có id để lấy thông tin sản phẩm
  useEffect(() => {
    if (id) {
      if (isLoading) {
        const notify = () =>
          (toastId.current = toast("Đang lấy thông tin sản phẩm...", {
            autoClose: false,
            type: toast.TYPE.DEFAULT,
            icon: "⏳",
            style: {
              background: "#CCD4DA", // Đặt màu nền thành màu xám
              color: "black",
            },
          }));
        notify();
      }
      const fetchData = async () => {
        let product = await apiGetOneProduct(id);
        if (!product) {
          return toast.update(toastId.current, {
            render: "Có lỗi xảy ra, không lấy được sản phẩm!",
            type: toast.TYPE.ERROR,
            autoClose: 2000,
          });
        }
        if (product) {
          setIsLoading(false);
          toast.update(toastId.current, {
            render: "Lấy thông tin thành công!",
            type: toast.TYPE.SUCCESS,
            autoClose: 2000,
            icon: "🎉",
          });
        }
        const { description, imageMain, images, classification, ...orther } =
          product.modifiedProduct;
        let convertImgClassify = classification.map((classify) => {
          return {
            ...classify,
            image: convertBase64ToImage(classify.image),
          };
        });
        setClassifies(convertImgClassify);
        setValueDescription(convertBase64ToImage(description));
        setIndex({
          ...index,
          classify: classification.length,
        });
        const temp = images.map((item) => convertBase64ToImage(item));
        setListImage([convertBase64ToImage(imageMain[0]), ...temp]);
        setValues(orther);
      };
      fetchData();
    } else {
      setValues({
        userId: dataUser.id,
        title: "",
        price: "",
        categoryId: "",
        urlDemo: "",
        popular: false,
        urlDownload: "",
        points: 200,
        technology: "",
        status: "ACTIVE",
        preOrder: false,
      });
      setValueDescription("");
      setListImage(Array().fill(""));
      setClassifies(Array().fill({}));
      setIndex({
        image: 0,
        classify: 1,
      });
    }
  }, [id]);

  // Chạy khi thêm Classify
  const handleClassifyChange = (i, key, value) => {
    setClassifies((prevClassifies) => {
      const updatedClassifies = [...prevClassifies];
      updatedClassifies[i] = {
        ...updatedClassifies[i],
        [key]: value,
      };
      return updatedClassifies;
    });
  };

  // Set giá trị
  const handleSetValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  // Xử lý và thêm ảnh
  const imageChange = async (e) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(e?.target?.files[0]?.type)) {
      toast.error("Invalid file type. Please select a valid image file.");
      return;
    }
    if (index.image >= 9) return toast.error("Chỉ được thêm tối đa 9 ảnh");
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size <= 5 * 1024 * 1024) {
        let fileImg = e.target.files[0];

        let temp = [...listImage];
        temp[index.image] = await toBase64(fileImg);
        setListImage(temp);
        setIndex({
          ...index,
          image: index.image + 1,
        });
      } else {
        toast.error("Ảnh quá lớn, vui lòng chọn ảnh khác < 5MB");
      }
    }
  };

  // Xử lí khi thêm ảnh cho phân loại
  const imageChangeClassify = async (e, i) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(e.target.files[0].type)) {
      toast.error("Invalid file type. Please select a valid image file.");
      return;
    }
    if (classifies[i]?.image > 1)
      return toast.error("Chỉ được thêm tối đa 1 ảnh");
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size <= 5 * 1024 * 1024) {
        let fileImg = e.target.files[0];
        handleClassifyChange(i, "image", await toBase64(fileImg));
      } else {
        toast.error("Ảnh quá lớn, vui lòng chọn ảnh khác < 5MB");
      }
    }
  };

  // Xử lý khi submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title === "") return toast.error("Vui lòng nhập tên sản phẩm");
    if (values.price === "") return toast.error("Vui lòng nhập giá sản phẩm");
    if (values.categoryId === "") return toast.error("Vui lòng chọn danh mục");
    if (values.urlDemo === "") return toast.error("Vui lòng nhập url demo");
    if (values.description === "") return toast.error("Vui lòng nhập mô tả");
    if (values.urlDownload === "") return toast.error("Vui lòng nhập url tải");
    if (values.technology === "") return toast.error("Vui lòng nhập công nghệ");
    if (listImage.filter((item) => item).length === 0)
      return toast.error("Vui lòng thêm ảnh sản phẩm");

    if (id) {
      apiEditProduct(
        {
          ...values,
          imageUrls: listImage,
          classifies: classifies,
          description: valueDescription,
        },
        dispatch
      );
    } else {
      apiAddProduct(
        {
          ...values,
          imageUrls: listImage,
          classifies: classifies,
          description: valueDescription,
        },
        dispatch
      );
    }
    if (error === false && loading === false && id) {
      toast.success("Thêm sản phẩm thành công1");
    }
    if (error === false && loading === false && !id) {
      toast.success("Thêm sản phẩm thành công");
      setValues({
        userId: dataUser.id,
        title: "",
        price: "",
        categoryId: "",
        urlDemo: "",
        popular: false,
        urlDownload: "",
        points: 200,
        technology: "",
        status: "ACTIVE",
        preOrder: false,
      });
      setValueDescription("");
      setListImage(Array().fill(""));
      setClassifies(Array().fill({}));
      setIndex({
        image: 0,
        classify: 1,
      });
    }
  };

  return (
    <div className="flex flex-col p-5 bg-white">
      {/* ================================= Header ================================= */}
      <div className="flex justify-between">
        <span className="text-lg font-semibold">Thông tin sản phẩm</span>
        <div className="flex flex-col">
          <p className="flex items-center gap-2">
            <span>Đặt hàng trước: </span>

            <Switch
              checked={values?.preOrder}
              onChange={(event) => {
                handleSetValue("preOrder", event.target.checked);
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
          </p>
          <span className="text-xs text-gray1">
            Với những sản phẩm sắp hoàn thiện và nhận đặt hàng trước
          </span>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
        {/* ================================= Thêm hình ảnh sản phẩm ================================= */}

        <FormUI title={"Hình ảnh sản phẩm"}>
          <span>*{"  "}Hình ảnh tỷ lệ 2:3</span>
          <div className="flex gap-2">
            {listImage?.length > 0 &&
              listImage?.map(
                (item, indexImg = listImage.filter((item) => item).length) => (
                  <div
                    key={indexImg}
                    className="relative w-[100px] overflow-hidden flex flex-col items-center gap-1 justify-center group h-[78px] rounded-lg border cursor-move border-dashed border-blue1"
                  >
                    <img
                      src={item}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                    {indexImg === 0 && (
                      <p className="group-hover:hidden absolute bottom-0 font-semibold text-white bg-opacity-90 h-[30%] bg-gray1 transition-all w-full text-sm text-center">
                        Ảnh bìa
                      </p>
                    )}
                    <p className="absolute group-hover:flex hidden bottom-0 font-semibold text-white bg-opacity-90 h-[30%] bg-gray1 w-full text-sm text-center transition-all items-center justify-center">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full px-1 w-[22px] transition-all cursor-pointer hover:fill-red fill-white"
                        onClick={async () => {
                          // let temp = [...listImage];
                          delete listImage[indexImg];
                          setIndex({
                            ...index,
                            image: index.image + 1,
                          });
                          setListImage(listImage.filter((item) => item));
                        }}
                      >
                        <path d="M2.8335 15.5C2.37516 15.5 1.98266 15.3367 1.656 15.01C1.32933 14.6833 1.16627 14.2911 1.16683 13.8333V3H0.333496V1.33333H4.50016V0.5H9.50016V1.33333H13.6668V3H12.8335V13.8333C12.8335 14.2917 12.6702 14.6842 12.3435 15.0108C12.0168 15.3375 11.6246 15.5006 11.1668 15.5H2.8335ZM11.1668 3H2.8335V13.8333H11.1668V3ZM4.50016 12.1667H6.16683V4.66667H4.50016V12.1667ZM7.8335 12.1667H9.50016V4.66667H7.8335V12.1667Z" />
                      </svg>
                    </p>
                  </div>
                )
              )}
            <p className="relative w-[78px] flex flex-col items-center gap-1 justify-center h-[78px] rounded-lg border border-dashed border-blue1">
              <input
                type="file"
                className="absolute w-full h-full opacity-0"
                accept="image/*"
                onChange={imageChange}
              />
              <svg
                width="22"
                height="20"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4998 10.5V13H18.9998V14.6667H16.4998V17.1667H14.8332V14.6667H12.3332V13H14.8332V10.5H16.4998ZM16.5065 0.5C16.9632 0.5 17.3332 0.870833 17.3332 1.3275V9.11833C16.7979 8.92925 16.2342 8.83286 15.6665 8.83333V2.16667H2.33317L2.334 13.8333L10.0773 6.08917C10.2206 5.9454 10.4115 5.85894 10.6141 5.84605C10.8167 5.83316 11.017 5.89473 11.1773 6.01917L11.2557 6.09L14.2098 9.04833C13.5637 9.24522 12.9641 9.57092 12.4473 10.0058C11.9304 10.4407 11.507 10.9757 11.2025 11.5787C10.8981 12.1816 10.7189 12.84 10.6757 13.5141C10.6326 14.1881 10.7264 14.864 10.9515 15.5008L1.49317 15.5C1.27385 15.4998 1.06358 15.4125 0.908578 15.2573C0.753572 15.1022 0.666504 14.8918 0.666504 14.6725V1.3275C0.668029 1.10865 0.755587 0.899181 0.910265 0.744348C1.06494 0.589515 1.27432 0.501746 1.49317 0.5H16.5065ZM5.6665 3.83333C6.10853 3.83333 6.53245 4.00893 6.84501 4.32149C7.15757 4.63405 7.33317 5.05797 7.33317 5.5C7.33317 5.94203 7.15757 6.36595 6.84501 6.67851C6.53245 6.99107 6.10853 7.16667 5.6665 7.16667C5.22448 7.16667 4.80055 6.99107 4.48799 6.67851C4.17543 6.36595 3.99984 5.94203 3.99984 5.5C3.99984 5.05797 4.17543 4.63405 4.48799 4.32149C4.80055 4.00893 5.22448 3.83333 5.6665 3.83333Z"
                  fill="#00C09E"
                />
              </svg>
              <span className="text-xs leading-[14px] text-center">
                Thêm hình ảnh ({listImage?.filter((item) => item).length}/9)
              </span>
            </p>
          </div>
        </FormUI>
        {/* ================================= Tên sản phẩm ================================= */}
        <FormUI title={"Tên sản phẩm"} className={"items-center"}>
          <div className="relative">
            <p className="absolute top-[50%] flex gap-2 items-center -translate-y-[50%] right-3 text-gray1 text-sm">
              <svg
                width="1"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18558e-08"
                  x2="0.499999"
                  y2="17"
                  stroke="#8B8B8B"
                />
              </svg>
              <span>{values.title.length} /120</span>
            </p>
            <input
              type="text"
              placeholder="Nhập tên sản phẩm"
              className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
              value={values?.title}
              onChange={(e) => {
                handleSetValue("title", e.target.value);
              }}
            />
          </div>
        </FormUI>
        {/* ================================= Url Demo ================================= */}
        <FormUI title={"Url Demo"} className={"items-center"}>
          <input
            type="text"
            value={values.urlDemo}
            placeholder="Nhập link demo (nếu có)"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            onChange={(e) => {
              handleSetValue("urlDemo", e.target.value);
            }}
          />
        </FormUI>
        {/* ================================= Url Download ================================= */}
        <FormUI title={"Url Download"} className={"items-center"}>
          <input
            type="text"
            value={values.urlDownload}
            placeholder="Nhập link download (github, drive, ...)"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            onChange={(e) => {
              handleSetValue("urlDownload", e.target.value);
            }}
          />
        </FormUI>
        {/* ================================= Công nghệ sử dụng ================================= */}
        <FormUI title={"Công nghệ sử dụng"} className={"items-center"}>
          <div className="relative w-full">
            <input
              type="text"
              value={values.technology}
              className="border h-[38px] px-3 border-grayE8 outline-none focus:border-blue6 transition-all w-full text-sm rounded-sm col-span-1"
              placeholder="Chọn ngành hàng"
              onChange={(e) => handleSetValue("technology", e.target.value)}
            />
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[50%] right-3 -translate-y-[50%]"
            >
              <path
                d="M10.6 -5.72205e-06L12 1.39999L6 7.39999L0 1.39999L1.4 -5.72205e-06L6 4.59999L10.6 -5.72205e-06Z"
                fill="#626262"
              />
            </svg>
          </div>
        </FormUI>
        <FormUI title={"Ngành hàng"} className={"items-center"}>
          <div className="grid grid-cols-2 gap-10">
            <div className="relative w-full">
              <input
                type="text"
                value={values.categoryId}
                className="border h-[38px] px-3 border-grayE8 outline-none focus:border-blue6 transition-all w-full text-sm rounded-sm col-span-1"
                placeholder="Chọn ngành hàng"
                onChange={(e) => handleSetValue("categoryId", e.target.value)}
              />
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[50%] right-3 -translate-y-[50%]"
              >
                <path
                  d="M10.6 -5.72205e-06L12 1.39999L6 7.39999L0 1.39999L1.4 -5.72205e-06L6 4.59999L10.6 -5.72205e-06Z"
                  fill="#626262"
                />
              </svg>
            </div>
            <div className="flex items-center gap-4">
              <span className="whitespace-nowrap">Nhập giá</span>
              <input
                type="text"
                value={values.price}
                className="border h-[38px] px-3 border-grayE8 outline-none focus:border-blue6 transition-all text-sm rounded-sm col-span-1 w-full"
                placeholder="Nhập giá"
                onChange={(e) => handleSetValue("price", e.target.value)}
              />
            </div>
          </div>
        </FormUI>
        <FormUI title={"Phân loại hàng"} classNameTitle={"leading-9"}>
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
              if (!classifies[index.classify - 1]?.name)
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
              <span className="col-span-1 leading-10 text-center">
                Hình ảnh
              </span>
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
        </FormUI>
        <FormUI title={"Mô tả sản phẩm"}>
          <TextEditor
            setValues={
              valueDescription || convertBase64ToImage(valueDescription)
            }
            placeholder="Write something..."
            onChange={(html) => setValueDescription(html)}
          ></TextEditor>
        </FormUI>
        <div className="flex items-center justify-center mt-8">
          {loading === true ? (
            <button
              type="submit"
              className="w-[145px] h-[40px] flex items-center justify-center text-white rounded-sm bg-blue6"
            >
              <div className="custom-loader w-[25px] h-[25px]"></div>
            </button>
          ) : (
            <button
              type="submit"
              className="w-[145px] h-[40px] text-white rounded-sm bg-blue6"
            >
              {id ? "Sửa sản phẩm" : "Thêm sản phẩm"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

const FormUI = ({ className, classNameTitle, title, children }) => {
  return (
    <div className={`grid grid-cols-5 gap-10 pr-5 mt-6 ${className}`}>
      <span
        className={`col-span-1 text-right whitespace-nowrap ${classNameTitle}`}
      >
        {title}
      </span>
      <div className="flex flex-col col-span-4 gap-2">{children}</div>
    </div>
  );
};

export default AddProductSellerPage;
