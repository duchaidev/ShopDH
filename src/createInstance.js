import axios from "axios";
import jwt_decode from "jwt-decode";

const refreshToken = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/refresh`,
      null,
      {
        withCredentials: true,
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createAxios = (user, dispatch, stateSuccess) => {
  console.log(user);
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwt_decode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.newAccessToken,
        };

        console.log(refreshUser);
        await dispatch(stateSuccess(refreshUser));

        config.headers["token"] = "Bearer " + data.newAccessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};

// Hàm để xử lý lỗi phản hồi từ API
export const handleApiResponseError = (error) => {
  if (error.response) {
    // Phản hồi từ API có mã lỗi
    console.error("API Error:", error.response.status, error.response.data);
    return error.response.data;
  } else if (error.request) {
    // Yêu cầu đã được gửi nhưng không nhận được phản hồi (mất kết nối)
    console.error("API Error: No Response");
    return { message: "No response from the server." };
  } else {
    // Lỗi xảy ra khi chuẩn bị yêu cầu hoặc trong quá trình xử lý
    console.error("API Error:", error.message);
    return { message: "An error occurred while processing the request." };
  }
};

// Hàm để kiểm tra xem phản hồi từ API có lỗi hay không
export const isApiResponseError = (response) => {
  return response && response.error;
};
