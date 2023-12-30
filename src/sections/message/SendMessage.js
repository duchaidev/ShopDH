import React, { useEffect, useRef, useState } from "react";
import { socket } from "../../untils/componentHandle";

const SendMessage = ({
  hiddenChat,
  conversationId,
  loadingConversation,
  messages,
  id,
  focusInput,
  messageInput,
  setMessageInput,
  setMessages,
  setUsersChat,
}) => {
  const contentRef = useRef(null);

  const [showListIcon, setShowListIcon] = useState(false);
  useEffect(() => {
    // Tự động cuộn xuống dưới cùng khi có tin nhắn mới
    const contentElement = contentRef.current;
    contentElement.scrollTop = contentElement.scrollHeight;
  }, [messages]); // Khi danh sách tin nhắn thay đổi

  const handleSendMessage = async () => {
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

      setMessages((prevMessages) => {
        // Nếu prevMessages chưa được khởi tạo hoặc là null/undefined, khởi tạo là một mảng rỗng
        if (!prevMessages) {
          return [newMessage];
        } else {
          return [...prevMessages, newMessage];
        }
        // Thêm message mới vào mảng
      });
      setUsersChat((prevUserChat) => {
        prevUserChat.map((item) => {
          if (parseInt(item?.id) === parseInt(conversationId?.id)) {
            item.messagesAlias[0].content = messageInput;
            console.log(item.messagesAlias[0].content);
          }
          return item;
        });
        return [...prevUserChat];
      });
      setMessageInput("");
    }
  };
  const icons = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😋",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",
    "🤗",
    "🤭",
    "🤫",
    "🤔",
    "🤐",
    "🤨",
    "😐",
    "😑",
    "😶",
    "😏",
    "😒",
    "🙄",
    "😬",
    "🤥",
    "😌",
    "😔",
    "😪",
    "🤤",
    "😴",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "😎",
    "🥱",
    "🤓",
    "😕",
    "😟",
    "🙁",
    "☹️",
    "😮",
    "😯",
    "😲",
    "😳",
    "🥺",
    "😦",
    "😧",
    "😨",
    "😰",
    "😥",
    "😢",
    "😭",
    "😱",
    "😖",
    "😣",
    "😞",
    "😓",
    "😩",
    "😫",
    "🥱",
    "😤",
    "😡",
    "😠",
    "🤬",
    "😈",
    "👿",
    "💀",
    "☠️",
    "💩",
    "🤡",
    "👹",
    "👺",
    "👻",
    "👽",
    "👾",
    "🤖",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
    "🤲",
    "👐",
    "🙌",
    "👏",
    "🙏",
    "🤝",
    "👍",
    "👎",
    "👊",
    "✊",
    "🤛",
    "🤜",
    "🤞",
    "✌️",
    "🤟",
    "🤘",
    "🤙",
    "👈",
    "👉",
    "👀",
    "🦻",
    "👃",
    "👄",
    "💋",
    "👅",
    "👂",
    "🧠",
    "🦷",
    "🦴",
    "👁️‍🗨️",
    "👤",
    "👥",
    "👶",
    "🧒",
    "👦",
    "👧",
    "🧑",
    "👱",
    "👨",
    "🧔",
    "👩",
    "🧓",
    "👴",
    "👵",
    "🙍",
    "🙍‍♂️",
    "🙍‍♀️",
    "🙎",
    "🙎‍♂️",
    "🙎‍♀️",
    "🙅",
    "🙅‍♂️",
    "🙅‍♀️",
    "🙆",
    "🙆‍♂️",
    "🙆‍♀️",
    "💁",
    "💁‍♂️",
    "💁‍♀️",
    "🙋",
    "🙋‍♂️",
    "🙋‍♀️",
    "🙇",
    "🙇‍♂️",
    "🙇‍♀️",
    "🤦",
    "🤦‍♂️",
    "🤦‍♀️",
    "🤷",
    "🤷‍♂️",
    "🤷‍♀️",
    "💆",
    "💆‍♂️",
    "💆‍♀️",
    "💇",
    "💇‍♂️",
    "💇‍♀️",
    "🚶",
    "🚶‍♂️",
    "🚶‍♀️",
    "🏃",
    "🏃‍♂️",
    "🏃‍♀️",
    "💃",
    "🕺",
    "🕴️",
    "🧖",
    "🧖‍♂️",
    "🧖‍♀️",
    "🧗",
    "🧗‍♂️",
    "🧗‍♀️",
    "🤺",
    "🏇",
    "⛷️",
    "🏂",
    "🏌️",
    "🏌️‍♂️",
    "🏌️‍♀️",
    "🏄",
    "🏄‍♂️",
    "🏄‍♀️",
    "🚣",
    "🚣‍♂️",
    "🚣‍♀️",
    "🏊",
    "🏊‍♂️",
    "🏊‍♀️",
    "⛹️",
    "⛹️‍♂️",
    "⛹️‍♀️",
    "🏋️",
    "🏋️‍♂️",
    "🏋️‍♀️",
    "🚴",
    "🚴‍♂️",
    "🚴‍♀️",
    "🚵",
    "🚵‍♂️",
    "🚵‍♀️",
    "🤸",
    "🤸‍♂️",
    "🤸‍♀️",
    "🤼",
    "🤼‍♂️",
    "🤼‍♀️",
    "🤽",
    "🤽‍♂️",
    "🤽‍♀️",
    "🤾",
    "🤾‍♂️",
    "🤾‍♀️",
    "🤹",
    "🤹‍♂️",
    "🤹‍♀️",
    "🧘",
    "🧘‍♂️",
    "🧘‍♀️",
  ];

  return (
    <div
      className={`col-span-2 flex flex-col justify-between h-[100%] ${
        hiddenChat ? "hidden" : ""
      } ${conversationId?.name ? "" : "opacity-0"}`}
    >
      <div className="h-[42px] border-blue1 border-b flex items-center pl-3">
        {conversationId.name}
      </div>
      <div
        className="max-h-[326px] overflow-x-hidden px-2 flex flex-col gap-3 w-full py-3 flex-1 overflow-auto"
        ref={contentRef}
      >
        {loadingConversation && (
          <div className="flex items-center justify-center h-full">
            <p className="custom-loader w-[45px] h-[45px]"></p>
          </div>
        )}
        {messages?.length > 0 &&
          messages?.map((item, index) => {
            return (
              <div className={`max-w-[100%] `} key={index}>
                <p
                  className={`${
                    item?.senderId === id
                      ? "float-right bg-blue5 text-white"
                      : " float-left bg-grayEC"
                  }  max-w-[70%] break-words whitespace-pre-line overflow-hidden h-auto px-3 text-[15px] py-[6px] rounded-xl`}
                >
                  {item?.content}
                </p>
              </div>
            );
          })}
      </div>
      <div className="h-[130px] pb-2 flex pl-[0px] flex-col border-t border-blue1">
        <textarea
          ref={focusInput}
          placeholder="Enter your message"
          className="w-full p-2 text-[14px] leading-4 outline-none focus:bg-grayEC resize-none transition-all"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <div className="flex items-center justify-between px-2 mt-[6px]">
          <div className="relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="gray"
              className={`${showListIcon ? "fill-blue6" : ""} cursor-pointer`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM10 1.875C12.1549 1.875 14.2215 2.73102 15.7452 4.25476C17.269 5.77849 18.125 7.84512 18.125 10C18.125 12.1549 17.269 14.2215 15.7452 15.7452C14.2215 17.269 12.1549 18.125 10 18.125C7.84512 18.125 5.77849 17.269 4.25476 15.7452C2.73102 14.2215 1.875 12.1549 1.875 10C1.875 7.84512 2.73102 5.77849 4.25476 4.25476C5.77849 2.73102 7.84512 1.875 10 1.875ZM10 11.695C12.265 11.695 14.4187 11.0938 16.25 10.0363C15.965 13.5213 13.2588 16.25 10 16.25C6.74125 16.25 4.035 13.5175 3.75 10.0338C5.65192 11.1252 7.80714 11.6981 10 11.695ZM5 6.875C5 5.84 5.56 5 6.25 5C6.94 5 7.5 5.84 7.5 6.875C7.5 7.91 6.94 8.75 6.25 8.75C5.56 8.75 5 7.91 5 6.875ZM12.5 6.875C12.5 5.84 13.06 5 13.75 5C14.44 5 15 5.84 15 6.875C15 7.91 14.44 8.75 13.75 8.75C13.06 8.75 12.5 7.91 12.5 6.875Z" />
            </svg>
            <input
              type="text"
              onFocus={() => {
                setShowListIcon(true);
              }}
              onBlur={() => {
                setShowListIcon(false);
              }}
              className="absolute top-0 left-0 right-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div
              className={`${
                showListIcon ? "" : "hidden"
              } absolute flex w-[270px] h-[250px] overflow-auto flex-wrap p-2 text-xs bottom-[75px] bg-blue1`}
            >
              {icons.map((icon, index) => (
                <span
                  key={index}
                  className="cursor-pointer text-[18px] hover:bg-gray1 p-2"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    focusInput.current.focus();
                    setMessageInput(messageInput + icon);
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
          <button className="" onClick={handleSendMessage}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all ${messageInput ? "fill-blue6" : ""} `}
            >
              <path d="M15.1564 7.44369L1.40636 0.568693C1.29859 0.514797 1.17754 0.493202 1.05778 0.506509C0.938028 0.519815 0.82467 0.567455 0.731361 0.643693C0.642251 0.718376 0.57574 0.816434 0.539304 0.926845C0.502869 1.03726 0.497953 1.15564 0.525111 1.26869L2.18136 7.37494H9.25011V8.62494H2.18136L0.500111 14.7124C0.474627 14.8069 0.471653 14.9059 0.491426 15.0017C0.511199 15.0975 0.553169 15.1873 0.61396 15.2639C0.674751 15.3404 0.752668 15.4017 0.841444 15.4427C0.930221 15.4837 1.02738 15.5033 1.12511 15.4999C1.22295 15.4994 1.31928 15.4758 1.40636 15.4312L15.1564 8.55619C15.2587 8.50374 15.3447 8.42406 15.4046 8.32591C15.4646 8.22777 15.4964 8.11497 15.4964 7.99994C15.4964 7.88491 15.4646 7.77212 15.4046 7.67397C15.3447 7.57583 15.2587 7.49614 15.1564 7.44369Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
