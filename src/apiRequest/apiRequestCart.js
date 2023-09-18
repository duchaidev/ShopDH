import axios from "axios";
import { getCartError, getCartStart, getCartSuccess } from "../redux/cartSlide";
import { toast } from "react-toastify";

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
    console.log(res.data);
    dispatch(getCartSuccess(res.data));
  } catch (e) {
    dispatch(getCartError());
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
    toast.success("Add product in cart success", {
      position: "top-right",
      style: { marginTop: "40px" },
      autoClose: 500,
    });
  } catch (e) {
    toast.error("Add product in cart fail");
    dispatch(getCartError());
  }
};
