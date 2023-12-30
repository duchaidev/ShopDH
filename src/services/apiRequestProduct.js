import { toast } from "react-toastify";
import { addError, addStart, addSuccess } from "../redux/productSlide";
import axiosCustom from "./api";

const apiAddProduct = async (dataProduct, dispatch) => {
  dispatch(addStart());
  try {
    const res = await axiosCustom.post(`/product/add`, dataProduct, {
      withCredentials: true,
    });
    await dispatch(addSuccess(res.data));
  } catch (e) {
    await dispatch(addError());
  }
};

// Định nghĩa hàm fetch dữ liệu
const fetchProductSeller = async (userId) => {
  const res = await axiosCustom.get(`/product/user/${userId}`, {
    withCredentials: true,
  });
  return res.data;
};

const fetchProductPopular = async (category) => {
  const res = await axiosCustom.get(`/product/popular/${category}`, {
    withCredentials: true,
  });
  return res.data;
};
const fetchProductWithCategory = async (page, limit = 1, category) => {
  const res = await axiosCustom.get(
    `/product/category?page=${page}&limit=${limit}&category=${category}`,
    {
      withCredentials: true,
    }
  );
  return res.data;
};

const apiDeleteProduct = async (id, dispatch) => {
  try {
    await axiosCustom.delete(`/product/delete/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    throw error;
  }
};
const apiEditProduct = async (dataProduct, dispatch) => {
  dispatch(addStart());
  try {
    const res = await axiosCustom.put(`/product/edit`, dataProduct, {
      withCredentials: true,
    });
    dispatch(addSuccess(res.data));
  } catch (e) {
    dispatch(addError());
    toast.error("Thêm sản phẩm thất bại");
  }
};

const apiGetOneProduct = async (id) => {
  // console.log(id);
  try {
    const res = await axiosCustom.get(`/product/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

const apiGetCategories = async (dispatch) => {
  try {
    const res = await axiosCustom.get(`/product/getcategory`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export {
  apiAddProduct,
  fetchProductSeller,
  fetchProductPopular,
  fetchProductWithCategory,
  apiDeleteProduct,
  apiEditProduct,
  apiGetOneProduct,
  apiGetCategories,
};
