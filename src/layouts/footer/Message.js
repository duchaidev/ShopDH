import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import {
  convertBase64ToImage,
  truncateText,
} from "../../until/componentHandle";
import { useSelector } from "react-redux";

const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling", "flashsocket"],
});
const Message = () => {
  const contentRef = useRef(null);
  const { id } = useSelector((state) => state.register.login.dataUser);
  const [showChatMini, setShowChatMini] = useState(null);
  const [hiddenChat, setHiddenChat] = useState(false);

  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const [usersChat, setUsersChat] = useState([]);
  const [conversationId, setConversationId] = useState({
    id: "",
    receiverId: "",
    name: "",
    image: "",
  });

  const [search, setSearch] = useState({
    value: "",
    data: [],
    isShow: false,
  });

  const handleSearch = (key, value) => {
    setSearch({ ...search, [key]: value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/chat/all-user", {
        params: { value: search.value }, // Truyền valueSearch như một tham số
      })
      .then((response) => {
        handleSearch("data", response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
    // socket.emit("joinChat", conversationId?.receiverId); // Người dùng tham gia cuộc trò chuyện
  }, [search.value]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/chat/conversation/${id}`)
      .then((response) => {
        setUsersChat([...response.data]);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, [id]);
  useEffect(() => {
    // Lấy danh sách tin nhắn từ API
    axios
      .get(`http://localhost:8000/v1/chat/${conversationId.id}}`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
    // Lắng nghe tin nhắn từ máy chủ
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, [conversationId]);
  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      const newMessage = {
        content: messageInput,
        senderId: id || "",
        receiverId: conversationId?.receiverId,
        name: "New Conversation",
        conversationId: conversationId?.id || "",
      };
      // Gửi tin nhắn tới máy chủ
      socket.emit("sendMessage", newMessage);

      setMessageInput("");
    }
  };

  useEffect(() => {
    // Tự động cuộn xuống dưới cùng khi có tin nhắn mới
    const contentElement = contentRef.current;
    contentElement.scrollTop = contentElement.scrollHeight;
  }, [messages]); // Khi danh sách tin nhắn thay đổi

  return (
    <div className="fixed z-50 bottom-0 right-[0.5%] ">
      {/* -------------------------------------button Chat Mini--------------------------------------- */}
      <button
        className={`relative ${
          showChatMini ? "hidden" : "flex"
        } items-center justify-center gap-2 bg-blue6 w-[100px] h-[48px]`}
        onClick={() => {
          setShowChatMini(true);
        }}
      >
        <svg
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.7 16.8V7.5H3C1.35 7.5 0 8.85 0 10.5V19.5C0 21.15 1.35 22.5 3 22.5H4.5V27L9 22.5H16.5C18.15 22.5 19.5 21.15 19.5 19.5V16.77C19.4014 16.7912 19.3008 16.8017 19.2 16.8015H8.7V16.8ZM27 0H13.5C11.85 0 10.5 1.35 10.5 3V15H21L25.5 19.5V15H27C28.65 15 30 13.6515 30 12V3C30 1.35 28.65 0 27 0Z"
            fill="white"
          />
        </svg>
        <span className="font-medium text-white">Chat</span>
        <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white rounded-full translate-x-[35%] -translate-y-[35%] bg-blue7">
          1
        </span>
      </button>

      {/* -------------------------------------Popup Chat Mini--------------------------------------- */}
      <div
        className={`${
          hiddenChat
            ? "hiddenChat"
            : hiddenChat === false && showChatMini === true
            ? "showChat"
            : hiddenChat === false && showChatMini === false
            ? "zoomOutHiddenChat"
            : showChatMini === false
            ? "zoomOut"
            : ""
        }  bg-white w-0 h-0 border border-blue1 rounded-sm`}
      >
        {/* -------------------------------------Header Popup Chat Mini--------------------------------------- */}
        <div className="flex items-center justify-between w-full p-3 border-b border-blue1">
          <span className="text-[18px] relative font-semibold text-blue6">
            <span>Chat</span>
            <span className="absolute top-0 text-xs translate-x-[30%] -translate-y-[30%] font-normal">
              (10)
            </span>
          </span>
          <div className="flex gap-3">
            <button
              title="Toàn màn hình"
              className="flex items-center justify-center w-[22px] border border-dashed h-[22px] border-gray2 rounded-sm"
            >
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.18183 5.78456H0.363647V0.330017H5.81819V2.1482H3.46728L8.31274 6.99365L7.02728 8.27911L2.18183 3.43365V5.78456Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              title="Ẩn cửa sổ chat"
              className="flex items-center justify-center w-[22px] border border-dashed h-[22px] border-gray2 rounded-sm"
              onClick={() => {
                setHiddenChat(!hiddenChat);
              }}
            >
              <svg
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${hiddenChat ? "rotate-180" : ""} transition-all`}
              >
                <path
                  d="M11.8887 3.74734C12.0082 3.87156 12.075 4.03727 12.075 4.20968C12.075 4.38209 12.0082 4.54779 11.8887 4.67201L8.48067 8.21401C8.064 8.64668 7.33333 8.35201 7.33333 7.75201V5.71001C7.33333 5.66581 7.31577 5.62341 7.28452 5.59216C7.25326 5.5609 7.21087 5.54334 7.16667 5.54334H0.666667C0.489856 5.54334 0.320287 5.4731 0.195262 5.34808C0.070238 5.22306 0 5.05349 0 4.87668V3.54334C0 3.36653 0.070238 3.19696 0.195262 3.07194C0.320287 2.94691 0.489856 2.87668 0.666667 2.87668H7.16667C7.21087 2.87668 7.25326 2.85912 7.28452 2.82786C7.31577 2.7966 7.33333 2.75421 7.33333 2.71001V0.66801C7.33333 0.0680102 8.064 -0.226656 8.48 0.20601L11.8887 3.74734Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              title="Thu gọn"
              className={`flex items-center justify-center w-[22px] border h-[22px] border-gray2 rounded-sm`}
              onClick={() => {
                setShowChatMini(false);
                setHiddenChat(false);
              }}
            >
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.7071 7.70701C7.51957 7.89448 7.26526 7.99979 7.0001 7.99979C6.73493 7.99979 6.48063 7.89448 6.2931 7.70701L0.636099 2.05001C0.540589 1.95776 0.464406 1.84742 0.411997 1.72541C0.359588 1.60341 0.332002 1.47219 0.330848 1.33941C0.329694 1.20663 0.354996 1.07495 0.405277 0.952054C0.455558 0.829157 0.529811 0.717505 0.623704 0.623612C0.717597 0.529719 0.829248 0.455466 0.952145 0.405185C1.07504 0.354904 1.20672 0.329603 1.3395 0.330757C1.47228 0.331911 1.6035 0.359497 1.7255 0.411906C1.84751 0.464315 1.95785 0.540497 2.0501 0.636007L7.0001 5.58601L11.9501 0.636007C12.1387 0.453849 12.3913 0.353055 12.6535 0.355333C12.9157 0.357611 13.1665 0.46278 13.3519 0.648188C13.5373 0.833596 13.6425 1.08441 13.6448 1.34661C13.6471 1.6088 13.5463 1.86141 13.3641 2.05001L7.7071 7.70701Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* -------------------------------------Content Popup Chat Mini--------------------------------------- */}
        <div
          className={`grid h-full ${
            hiddenChat ? "grid-cols-1" : "grid-cols-3"
          }  pl-2`}
        >
          <div
            className={`col-span-1 pt-2 ${
              hiddenChat ? "" : "border-r border-blue1"
            } `}
          >
            <div className="relative grid items-center w-full grid-cols-11 gap-1">
              <div className="relative col-span-7">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute cursor-pointer left-2 -translate-y-[50%] top-[50%]"
                >
                  <path
                    d="M7.14694 6.28931H6.69525L6.53516 6.13493C7.11485 5.46256 7.43345 4.60417 7.43282 3.71641C7.43282 2.98137 7.21486 2.26284 6.80649 1.65168C6.39813 1.04052 5.8177 0.564183 5.13862 0.282896C4.45953 0.00161026 3.71229 -0.071987 2.99137 0.0714114C2.27046 0.21481 1.60826 0.568763 1.08851 1.08851C0.568763 1.60826 0.21481 2.27046 0.0714114 2.99137C-0.071987 3.71229 0.00161026 4.45953 0.282896 5.13862C0.564183 5.8177 1.04052 6.39813 1.65168 6.80649C2.26284 7.21486 2.98137 7.43282 3.71641 7.43282C4.63694 7.43282 5.48313 7.09548 6.13493 6.53516L6.28931 6.69525V7.14694L9.14808 10L10 9.14808L7.14694 6.28931ZM3.71641 6.28931C2.29274 6.28931 1.14351 5.14008 1.14351 3.71641C1.14351 2.29274 2.29274 1.14351 3.71641 1.14351C5.14008 1.14351 6.28931 2.29274 6.28931 3.71641C6.28931 5.14008 5.14008 6.28931 3.71641 6.28931Z"
                    fill="#828282"
                  />
                </svg>
                <input
                  type="text"
                  className="max-w-full py-1 pr-2 text-xs transition-all border outline-none pl-7 border-blue1 focus:border-blue6"
                  placeholder="Tìm kiếm"
                  value={search.value}
                  onFocus={() => handleSearch("isShow", true)}
                  onBlur={() => handleSearch("isShow", false)}
                  onChange={(e) => handleSearch("value", e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center col-span-4 gap-1 cursor-pointer">
                <span className="text-sm">Tất cả</span>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z"
                    fill="#555555"
                  />
                </svg>
              </div>
              {search.isShow === true && search?.data?.length > 0 && (
                <div className="absolute flex flex-col gap-2 w-full shadow-sm border border-blue1 bg-blue2 top-[110%] p-1">
                  {search?.data &&
                    search?.data?.map((item) => (
                      <div
                        key={item.id}
                        onMouseDown={() => {
                          setUsersChat([...usersChat, item]);
                        }}
                        className="flex items-center gap-2 p-1 transition-all cursor-pointer hover:bg-blue1"
                      >
                        <img
                          src={
                            convertBase64ToImage(item?.avatar) ||
                            "/21011598.jpg"
                          }
                          alt=""
                          className="w-[22px] h-[22px] rounded-full object-cover"
                        />
                        <span className="text-sm">
                          {truncateText(
                            item?.username ||
                              `${item?.firstName} ${item?.lastName} (${
                                item?.username ? "username" : "name"
                              })`,
                            20
                          )}
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
            <div className="mt-2">
              {usersChat?.length > 0 &&
                usersChat?.map((item, index) => {
                  return (
                    <div
                      className="flex items-center justify-center w-full mt-4 cursor-pointer"
                      key={index}
                      onClick={() => {
                        // console.log(item);
                        setConversationId({
                          id: item?.id || "",
                          receiverId: !(item?.conversations?.id === id)
                            ? item?.conversations?.id || item?.id
                            : item?.secondUser?.id,
                          name: !(item?.conversations?.id === id)
                            ? item?.conversations?.username ||
                              `${
                                item?.conversations?.firstName ||
                                item?.firstName
                              } ${
                                item?.conversations?.lastName || item?.lastName
                              }`
                            : item?.secondUser?.username ||
                              `${item?.secondUser?.firstName} ${item?.secondUser?.lastName}`,
                          image: !(item?.conversations?.id === id)
                            ? convertBase64ToImage(
                                item?.conversations?.avatar || item?.avatar
                              ) || "/21011598.jpg"
                            : convertBase64ToImage(item?.secondUser?.avatar) ||
                              "/21011598.jpg",
                        });
                      }}
                    >
                      <img
                        src={
                          !(item?.conversations?.id === id)
                            ? convertBase64ToImage(
                                item?.conversations?.avatar || item?.avatar
                              ) || "/21011598.jpg"
                            : convertBase64ToImage(item?.secondUser?.avatar) ||
                              "/21011598.jpg"
                        }
                        alt=""
                        className="w-[34px] h-[34px] rounded-full object-cover"
                      />
                      <div className="flex flex-col w-full mr-2">
                        <p className="flex justify-between w-full">
                          <span className="ml-2 text-sm font-semibold">
                            {truncateText(
                              !(item?.conversations?.id === id)
                                ? item?.conversations?.username ||
                                    `${
                                      item?.conversations?.firstName ||
                                      item?.firstName
                                    } ${
                                      item?.conversations?.lastName ||
                                      item?.lastName
                                    }`
                                : item?.secondUser?.username ||
                                    `${item?.secondUser?.firstName} ${item?.secondUser?.lastName}`,
                              20
                            )}
                          </span>
                          <span className="text-sm text-gray1">25/5</span>
                        </p>
                        <span className="ml-2 text-sm">
                          {/* {truncateText(
                            messages[messages?.length - 1]?.content,
                            20
                          )} */}
                          test
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className={`col-span-2 flex flex-col justify-between h-[100%] ${
              hiddenChat ? "hidden" : ""
            } ${conversationId?.name ? "" : "opacity-0"}`}
          >
            <div className="h-[42px] border-blue1 border-b flex items-center pl-3">
              {conversationId.name}
            </div>
            <div
              className="max-h-[326px] px-2 flex flex-col gap-3 w-full py-3 flex-1 overflow-auto"
              ref={contentRef}
            >
              {messages?.length > 0 &&
                messages?.map((item, index) => (
                  <div className={`max-w-[100%]`} key={index}>
                    <span
                      className={`${
                        item?.senderId === id
                          ? "float-right bg-blue5 text-white"
                          : " float-left bg-grayEC"
                      }  max-w-[70%] px-3 text-[15px] py-[6px] rounded-xl`}
                    >
                      {item?.content}
                    </span>
                  </div>
                ))}
            </div>
            <div className="h-[130px] pb-2 flex flex-col border-t border-blue1">
              <input
                type="text"
                placeholder="Enter your message"
                className="w-full p-2 text-[15px] outline-none"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <div className="flex items-center justify-between px-2 mt-4">
                <span className="text-xs">List Icon, Img, ...</span>
                <button className="" onClick={handleSendMessage}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all ${
                      messageInput ? "fill-blue6" : ""
                    } `}
                  >
                    <path d="M15.1564 7.44369L1.40636 0.568693C1.29859 0.514797 1.17754 0.493202 1.05778 0.506509C0.938028 0.519815 0.82467 0.567455 0.731361 0.643693C0.642251 0.718376 0.57574 0.816434 0.539304 0.926845C0.502869 1.03726 0.497953 1.15564 0.525111 1.26869L2.18136 7.37494H9.25011V8.62494H2.18136L0.500111 14.7124C0.474627 14.8069 0.471653 14.9059 0.491426 15.0017C0.511199 15.0975 0.553169 15.1873 0.61396 15.2639C0.674751 15.3404 0.752668 15.4017 0.841444 15.4427C0.930221 15.4837 1.02738 15.5033 1.12511 15.4999C1.22295 15.4994 1.31928 15.4758 1.40636 15.4312L15.1564 8.55619C15.2587 8.50374 15.3447 8.42406 15.4046 8.32591C15.4646 8.22777 15.4964 8.11497 15.4964 7.99994C15.4964 7.88491 15.4646 7.77212 15.4046 7.67397C15.3447 7.57583 15.2587 7.49614 15.1564 7.44369Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Message);
