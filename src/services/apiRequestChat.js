import axiosCustom from "./api";

const apiGetMessage = async (conversationId) => {
  try {
    const res = await axiosCustom.get(`/chat/${conversationId}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getUserConversation = async (id) => {
  try {
    const res = await axiosCustom.get(`/chat/conversation/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

const apiGetUserByValue = async (value) => {
  try {
    const res = await axiosCustom.get(`/chat/all-user`, {
      params: { value },
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { apiGetMessage, getUserConversation, apiGetUserByValue };
