import React, { useEffect, useRef, useState } from "react";
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
import TitleProduct from "../../module/addProductPage/TitleProduct";
import ImageProduct from "../../module/addProductPage/ImageProduct";
import ClassifyProduct from "./../../module/addProductPage/ClassifyProduct";
import UrlDemo from "../../module/addProductPage/UrlDemo";
import UrlDownload from "../../module/addProductPage/UrlDownload";
import TechnologyUse from "./../../module/addProductPage/TechnologyUse";
import CategoryProduct from "./../../module/addProductPage/CategoryProduct";

const AddProductSellerPage = () => {
  const { id } = useParams();
  const toastId = useRef(null);
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
    category: [],
    urlDemo: "",
    popular: true,
    urlDownload: "",
    points: 200,
    technology: "",
    status: "ACTIVE",
    preOrder: false,
  });
  // Chạy khi có id để lấy thông tin sản phẩm
  useEffect(() => {
    const fetchData = async () => {
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
        try {
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
            image: [...images, imageMain].length,
            classify: classification.length,
          });
          // console.log();
          const temp = images.map((item) => convertBase64ToImage(item));
          setListImage([convertBase64ToImage(imageMain[0]), ...temp]);
          setValues({
            ...orther,
          });
        } catch (error) {
          console.error("Error fetching product:", error);
          setIsLoading(false);
          toast.update(toastId.current, {
            render: "Có lỗi xảy ra khi lấy thông tin sản phẩm!",
            type: toast.TYPE.ERROR,
            autoClose: 2000,
          });
        }
      } else {
        setValues({
          userId: dataUser.id,
          title: "",
          price: "",
          category: "",
          urlDemo: "",
          popular: true,
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
    fetchData();
  }, [id, isLoading]);

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
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
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

  // Xử lí khi thêm ảnh cho phân loại
  const imageChangeClassify = async (e, i) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.title === "") return toast.error("Vui lòng nhập tên sản phẩm");
    if (values.price === "") return toast.error("Vui lòng nhập giá sản phẩm");
    if (values.category === "") return toast.error("Vui lòng chọn danh mục");
    if (values.urlDemo === "") return toast.error("Vui lòng nhập url demo");
    if (values.description === "") return toast.error("Vui lòng nhập mô tả");
    if (values.urlDownload === "") return toast.error("Vui lòng nhập url tải");
    if (values.technology === "") return toast.error("Vui lòng nhập công nghệ");
    if (listImage.filter((item) => item).length === 0)
      return toast.error("Vui lòng thêm ảnh sản phẩm");
    if (id) {
      await apiEditProduct(
        {
          ...values,
          imageUrls: listImage,
          classifies: classifies,
          description: valueDescription,
        },
        dispatch
      );
    } else {
      await apiAddProduct(
        {
          ...values,
          imageUrls: listImage,
          classifies: classifies,
          description: valueDescription,
        },
        dispatch
      );
    }
    if (error === true && loading === false && id) {
      toast.error("Sửa sản phẩm thất bại");
    } else if (error === false && loading === false && id) {
      toast.success("Sửa sản phẩm thành công");
    }

    if (error === true && loading === false && !id) {
      toast.error("Thêm sản phẩm thất bại");
    } else if (error === false && loading === false && !id) {
      toast.success("Thêm sản phẩm thành công");
      setValues({
        userId: dataUser.id,
        title: "",
        price: "",
        category: "",
        urlDemo: "",
        popular: true,
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
        <ImageProduct
          listImage={listImage}
          index={index}
          setListImage={setListImage}
          setIndex={setIndex}
          imageChange={imageChange}
        ></ImageProduct>
        {/* ================================= Tên sản phẩm ================================= */}
        <TitleProduct values={values} setValue={handleSetValue}></TitleProduct>
        <UrlDemo values={values} handleSetValue={handleSetValue}></UrlDemo>
        {/* ================================= Url Download ================================= */}
        <UrlDownload
          values={values}
          handleSetValue={handleSetValue}
        ></UrlDownload>
        {/* ================================= Công nghệ sử dụng ================================= */}
        <TechnologyUse
          values={values}
          handleSetValue={handleSetValue}
        ></TechnologyUse>
        <CategoryProduct
          values={values}
          handleSetValue={handleSetValue}
        ></CategoryProduct>
        <ClassifyProduct
          index={index}
          setIndex={setIndex}
          classifies={classifies}
          handleClassifyChange={handleClassifyChange}
          imageChangeClassify={imageChangeClassify}
          setClassifies={setClassifies}
        ></ClassifyProduct>
        <FormUIAddProduct title={"Mô tả sản phẩm"}>
          <TextEditor
            setValues={
              valueDescription || convertBase64ToImage(valueDescription)
            }
            placeholder="Write something..."
            onChange={(html) => setValueDescription(html)}
          ></TextEditor>
        </FormUIAddProduct>
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

export const FormUIAddProduct = ({
  className,
  classNameTitle,
  title,
  children,
}) => {
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
