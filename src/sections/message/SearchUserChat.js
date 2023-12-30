import React from "react";
import {
  convertBase64ToImage,
  truncateText,
} from "../../untils/componentHandle";

const SearchUserChat = ({
  id,
  search,
  handleSearch,
  usersChat,
  setUsersChat,
  setActiveMessage,
  setConversationId,
}) => {
  return (
    <div className="relative grid items-center w-full grid-cols-11 gap-1 pl-2">
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
        <div className="absolute flex flex-col gap-2 w-full shadow-sm border border-blue1 bg-blue2 top-[110%] p-1 z-50">
          {search?.data &&
            search?.data?.map((item) => (
              <div
                key={item.id}
                onMouseDown={() => {
                  // focusInput.current.focus();
                  const isUserExist = usersChat.some(
                    (user) =>
                      user?.conversations?.id === item.id ||
                      user?.secondUser?.id === item.id
                  );

                  if (!isUserExist) {
                    setUsersChat([item, ...usersChat]);
                  }

                  setActiveMessage(
                    [
                      id,
                      !(item?.conversations?.id === id)
                        ? item?.conversations?.id || item?.id
                        : item?.secondUser?.id,
                    ]
                      .sort()
                      .join("")
                  );
                  setConversationId({
                    id: [
                      id,
                      !(item?.conversations?.id === id)
                        ? item?.conversations?.id || item?.id
                        : item?.secondUser?.id,
                    ]
                      .sort()
                      .join(""),
                    receiverId: !(item?.conversations?.id === id)
                      ? item?.conversations?.id || item?.id
                      : item?.secondUser?.id,
                    name: !(item?.conversations?.id === id)
                      ? item?.conversations?.username ||
                        `${item?.conversations?.firstName || item?.firstName} ${
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
                className="flex items-center gap-2 p-1 transition-all cursor-pointer hover:bg-blue1"
              >
                <img
                  src={convertBase64ToImage(item?.avatar) || "/21011598.jpg"}
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
  );
};

export default SearchUserChat;
