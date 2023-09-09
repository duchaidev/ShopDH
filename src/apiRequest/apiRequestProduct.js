import axios from "axios";
import { toast } from "react-toastify";
import { addError, addStart, addSuccess } from "../redux/productSlide";
import { listDropdown } from "../redux/dropdownSlide";

export const apiAddProduct = async (dataProduct, dispatch) => {
  dispatch(addStart());
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/v1/product/add`,
      dataProduct,
      {
        withCredentials: true,
      }
    );
    await dispatch(addSuccess(res.data));
  } catch (e) {
    await dispatch(addError());
  }
};

// Định nghĩa hàm fetch dữ liệu
export const fetchProductSeller = async (userId) => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/product/user/${userId}`,
    {
      withCredentials: true,
    }
  );
  return res.data;
};

export const fetchProductPopular = async (category) => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/product/popular/${category}`,
    {
      withCredentials: true,
    }
  );
  return res.data;
};
export const fetchProductWithCategory = async (page, limit = 1) => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/product/category?page=${page}&limit=${limit}`,
    {
      withCredentials: true,
    }
  );
  return res.data;
};

export const apiDeleteProduct = async (id, dispatch) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/v1/product/delete/${id}`,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    throw error;
  }
};
export const apiEditProduct = async (dataProduct, dispatch) => {
  dispatch(addStart());
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/v1/product/edit`,
      dataProduct,
      {
        withCredentials: true,
      }
    );
    dispatch(addSuccess(res.data));
  } catch (e) {
    dispatch(addError());
    toast.error("Thêm sản phẩm thất bại");
  }
};

export const apiGetOneProduct = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/product/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const apiGetCategories = async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/product/getcategory`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
