import axios from "axios";

export const apiGetMessage = async (conversationId) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/chat/${conversationId}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserConversation = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/chat/conversation/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const apiGetUserByValue = async (value) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/chat/all-user`,
      {
        params: { value },
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
