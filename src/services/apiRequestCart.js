import {
  getCartError,
  getCartPageSuccess,
  getCartStart,
  getCartSuccess,
} from "../redux/cartSlide";
import { toast } from "react-toastify";
import axiosCustom from "./api";
// Định nghĩa hàm fetch dữ liệu
const fetchProductCart = async (userId, dispatch) => {
  dispatch(getCartStart());

  try {
    const res = await axiosCustom.get(`/cart/product-in-cart/${userId}`, {
      withCredentials: true,
    });
    dispatch(getCartSuccess(res.data));
  } catch (e) {
    dispatch(getCartError());
  }
};

const updateCategoryProductInCart = async (
  userId,
  productId,
  category,
  price
) => {
  try {
    const res = await axiosCustom.put(
      `/cart/update-cate-product-in-cart?userId=${userId}&productId=${productId}&category=${category}&price=${price}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (e) {
    toast.error("Update category product in cart error!");
  }
};

const updatePaymentProduct = async (userId, productId, status) => {
  try {
    const res = await axiosCustom.put(
      `${
        process.env.REACT_APP_BACKEND_URL
      }/cart/update-payment-product-in-cart?userId=${userId}&productId=${productId.join(
        ","
      )}&status=${status}`,
      {
        withCredentials: true,
      }
    );
    toast.success("Payment Success");
    return res.data;
  } catch (e) {
    toast.error("Payment error!");
  }
};

const fetchProductCartPage = async (userId, dispatch) => {
  try {
    const res = await axiosCustom.get(`/cart/product-in-cartpage/${userId}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (e) {
    toast.error("Get product in cart error!");
  }
};

const addProductInCart = async (dispatch, newData, dataCart, toastId) => {
  const notify = () =>
    (toastId.current = toast("Đang thêm sản phẩm vào giỏ hàng...", {
      autoClose: false,
      type: toast.TYPE.DEFAULT,
      icon: "⏳",
      style: {
        background: "#CCD4DA", // Đặt màu nền thành màu xám
        color: "black",
      },
    }));
  notify();
  try {
    const res = await axiosCustom.post(`/cart/product-cart`, newData, {
      withCredentials: true,
    });
    console.log(res.data);
    toast.update(toastId.current, {
      render: "Thêm sản phẩm thành công!",
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
      icon: "🎉",
    });
    dispatch(
      getCartSuccess({
        message: "Get product in cart successfully",
        data: [...dataCart?.data?.data, newData],
        success: true,
      })
    );
    // toast.success("Add product in cart success!", {
    //   position: "top-right",
    //   style: { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)", marginTop: "50px" },
    //   autoClose: 800,
    // });
  } catch (e) {
    // toast.error(e?.response?.data, {
    //   position: "top-right",
    //   style: { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)", marginTop: "50px" },
    //   autoClose: 800,
    // });
    toast.update(toastId.current, {
      render: e?.response?.data,
      type: toast.TYPE.ERROR,
      autoClose: 1000,
    });
    dispatch(getCartError());
  }
};

const removeProductInCart = async (dispatch, dataCart, userId, productId) => {
  try {
    console.log(userId);
    await axiosCustom.delete(
      `/cart/del-product-in-cart?userId=${userId}&productId=${productId}`,
      { userId, productId },
      {
        withCredentials: true,
      }
    );
    // console.log(res.data);
    // console.log(dataCart);
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

export {
  fetchProductCart,
  updateCategoryProductInCart,
  updatePaymentProduct,
  fetchProductCartPage,
  addProductInCart,
  removeProductInCart,
};
