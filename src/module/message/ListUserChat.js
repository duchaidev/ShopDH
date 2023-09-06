import React from "react";
import {
  convertBase64ToImage,
  formatDateAndDay,
  formatOfflineDuration,
  truncateText,
} from "../../until/componentHandle";

const ListUserChat = ({
  id,
  usersChat,
  activeMessage,
  focusInput,
  setActiveMessage,
  setConversationId,
}) => {
  return (
    <div className="mt-4">
      {usersChat?.length > 0 &&
        usersChat?.map((item, index) => {
          return (
            <div
              className={`${
                activeMessage ===
                [
                  id,
                  !(item?.conversations?.id === id)
                    ? item?.conversations?.id || item?.id
                    : item?.secondUser?.id,
                ]
                  .sort()
                  .join("")
                  ? "bg-blue1"
                  : ""
              } pl-2 py-2 flex items-center justify-center w-full mt-1 cursor-pointer`}
              key={index}
              onClick={() => {
                focusInput.current.focus();
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
            >
              <div className="relative w-[44px]">
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
                  className="object-cover w-[34px] h-[34px] rounded-full"
                />
                <span
                  className={`absolute flex items-center justify-center p-[2px] bg-white rounded-full bottom-[-2px] right-[-2px]`}
                >
                  {!(item?.conversations?.id === id) ? (
                    item?.conversations?.isOnline === true ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 2 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.9375 1C1.9375 1.18542 1.88252 1.36668 1.7795 1.52085C1.67649 1.67502 1.53007 1.79518 1.35877 1.86614C1.18746 1.93709 0.99896 1.95566 0.817103 1.91949C0.635246 1.88331 0.4682 1.79402 0.337088 1.66291C0.205976 1.5318 0.116688 1.36475 0.0805142 1.1829C0.0443406 1.00104 0.0629062 0.81254 0.133863 0.641234C0.204821 0.469929 0.324983 0.323511 0.479154 0.220497C0.633325 0.117483 0.814581 0.0625 1 0.0625C1.24864 0.0625 1.4871 0.161272 1.66291 0.337087C1.83873 0.512903 1.9375 0.75136 1.9375 1Z"
                          fill="#31cc46"
                        />
                      </svg>
                    ) : (
                      <span className="text-[11px] text-[#31cc46] font-normal">
                        {formatOfflineDuration(item?.conversations?.offlineAt)}
                      </span>
                    )
                  ) : item?.secondUser?.isOnline === true ? (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.9375 1C1.9375 1.18542 1.88252 1.36668 1.7795 1.52085C1.67649 1.67502 1.53007 1.79518 1.35877 1.86614C1.18746 1.93709 0.99896 1.95566 0.817103 1.91949C0.635246 1.88331 0.4682 1.79402 0.337088 1.66291C0.205976 1.5318 0.116688 1.36475 0.0805142 1.1829C0.0443406 1.00104 0.0629062 0.81254 0.133863 0.641234C0.204821 0.469929 0.324983 0.323511 0.479154 0.220497C0.633325 0.117483 0.814581 0.0625 1 0.0625C1.24864 0.0625 1.4871 0.161272 1.66291 0.337087C1.83873 0.512903 1.9375 0.75136 1.9375 1Z"
                        fill="#31cc46"
                      />
                    </svg>
                  ) : (
                    <span className="text-[11px] text-[#31cc46] font-normal">
                      {formatOfflineDuration(item?.secondUser?.offlineAt)}
                    </span>
                  )}
                </span>
              </div>
              <div className="flex flex-col w-full mr-2">
                <p className="flex justify-between w-full">
                  <span className="ml-2 text-sm font-semibold">
                    {truncateText(
                      !(item?.conversations?.id === id)
                        ? item?.conversations?.username ||
                            `${
                              item?.conversations?.firstName || item?.firstName
                            } ${
                              item?.conversations?.lastName || item?.lastName
                            }`
                        : item?.secondUser?.username ||
                            `${item?.secondUser?.firstName} ${item?.secondUser?.lastName}`,
                      20
                    )}
                  </span>
                </p>
                {item?.messagesAlias ? (
                  <span className="flex items-center gap-2 ml-2 text-sm">
                    {truncateText(item?.messagesAlias[0]?.content, 10)}
                    <svg
                      width="2"
                      height="2"
                      viewBox="0 0 2 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.9375 1C1.9375 1.18542 1.88252 1.36668 1.7795 1.52085C1.67649 1.67502 1.53007 1.79518 1.35877 1.86614C1.18746 1.93709 0.99896 1.95566 0.817103 1.91949C0.635246 1.88331 0.4682 1.79402 0.337088 1.66291C0.205976 1.5318 0.116688 1.36475 0.0805142 1.1829C0.0443406 1.00104 0.0629062 0.81254 0.133863 0.641234C0.204821 0.469929 0.324983 0.323511 0.479154 0.220497C0.633325 0.117483 0.814581 0.0625 1 0.0625C1.24864 0.0625 1.4871 0.161272 1.66291 0.337087C1.83873 0.512903 1.9375 0.75136 1.9375 1Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-gray1">
                      {formatDateAndDay(item?.messagesAlias[0]?.createdAt)}
                    </span>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListUserChat;
