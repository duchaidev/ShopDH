import axios from "axios";
import {
  getCartError,
  getCartPageSuccess,
  getCartStart,
  getCartSuccess,
} from "../redux/cartSlide";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

// Định nghĩa hàm fetch dữ liệu
export const fetchProductCart = async (userId, dispatch) => {
  dispatch(getCartStart());

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/cart/product-in-cart/${userId}`,
      {
        withCredentials: true,
      }
    );
    dispatch(getCartSuccess(res.data));
  } catch (e) {
    dispatch(getCartError());
  }
};

export const fetchProductCartPage = async (userId, dispatch) => {
  // dispatch(getCartStart());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/cart/product-in-cartpage/${userId}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
    // dispatch(getCartPageSuccess(res.data));
  } catch (e) {
    // dispatch(getCartError());
  }
};

export const addProductInCart = async (dispatch, newData, dataCart) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/v1/cart/product-cart`,
      newData,
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    dispatch(
      getCartSuccess({
        message: "Get product in cart successfully",
        data: [...dataCart?.data?.data, newData],
        success: true,
      })
    );
    toast.success("Add product in cart success!", {
      position: "top-right",
      style: { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)", marginTop: "50px" },
      autoClose: 800,
    });
  } catch (e) {
    toast.error(e?.response?.data, {
      position: "top-right",
      style: { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)", marginTop: "50px" },
      autoClose: 800,
    });
    dispatch(getCartError());
  }
};

export const removeProductInCart = async (
  dispatch,
  dataCart,
  userId,
  productId
) => {
  try {
    // const res = await axios.delete(
    //   `${process.env.REACT_APP_BACKEND_URL}/v1/cart/del-product-in-cart`,
    //   userId,
    //   productId,
    //   {
    //     withCredentials: true,
    //   }
    // );
    // console.log(res.data);
    console.log(dataCart);
    dispatch(
      getCartSuccess({
        message: "Get product in cart successfully",
        data: dataCart?.data?.data.filter(
          (item) => item.productId !== productId
        ),
        success: true,
      })
    );
    toast.success("Remove product in cart success!", {
      position: "top-right",
      style: { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)", marginTop: "50px" },
      autoClose: 800,
    });
  } catch (e) {
    toast.error(e?.response?.data, {
      position: "top-right",
      style: { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)", marginTop: "50px" },
      autoClose: 800,
    });
    dispatch(getCartError());
  }
};
