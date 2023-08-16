import axios from "axios";
import { toast } from "react-toastify";
import {
  addError,
  addStart,
  addSuccess,
  getProductSellerError,
  getProductSellerStart,
  getProductSellerSuccess,
} from "../redux/productSlide";
import { redirect } from "react-router-dom";

export const apiAddProduct = async (dataProduct, dispatch) => {
  dispatch(addStart());
  try {
    const res = await axios.post(
      "http://localhost:8000/v1/product/add",
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

export const apiGetAllProductSeller = async (userId, dispatch) => {
  dispatch(getProductSellerStart());
  try {
    const res = await axios.get(
      `http://localhost:8000/v1/product/user/${userId}`,
      {
        withCredentials: true,
      }
    );
    await dispatch(getProductSellerSuccess(res.data));
  } catch (e) {
    await dispatch(getProductSellerError());
    toast.error("Lấy sản phẩm thất bại");
  }
};

export const apiDeleteProduct = async (id, dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/v1/product/delete/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    throw error;
  }
};
export const apiEditProduct = async (dataProduct, dispatch) => {
  dispatch(addStart());
  try {
    const res = await axios.put(
      "http://localhost:8000/v1/product/edit",
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
  try {
    const res = await axios.get(`http://localhost:8000/v1/product/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
