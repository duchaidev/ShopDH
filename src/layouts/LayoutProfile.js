import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const LayoutProfile = () => {
    const [showProfile, setShowProfile] = useState(true);
    return (
        <div className="px-[3%] grid gap-10 grid-cols-5 pt-8 bg-bgProfile">
            <div className="col-span-1">
                {/*------------------------------------Avatar + Name-----------------------------------*/}
                <div className="flex items-center gap-4 pb-8 border-b border-blue1">
                    <div className="w-[55px] h-[55px] rounded-full overflow-hidden">
                        <img
                            src="/21011598.jpg"
                            alt=""
                            className="object-cover w-full h-full overflow-hidden border rounded-full border-blue1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold">Le Duc Hai</span>
                        <p className="flex items-center gap-1">
                            <span>
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.76026 6.46406L6.71856 3.50576C6.22084 3.29796 5.76882 2.99435 5.38821 2.61219C5.00587 2.23149 4.70212 1.77933 4.49424 1.28144L1.53594 4.23974C1.30515 4.47053 1.18956 4.58612 1.09036 4.71332C0.973206 4.86342 0.872751 5.02584 0.79077 5.1977C0.721572 5.3433 0.669974 5.49849 0.566778 5.80808L0.0219974 7.44122C-0.00307619 7.516 -0.00679623 7.59628 0.0112553 7.67306C0.0293069 7.74983 0.0684145 7.82005 0.124182 7.87582C0.17995 7.93159 0.250167 7.97069 0.326941 7.98875C0.403715 8.0068 0.484002 8.00308 0.558778 7.978L2.19192 7.43322C2.50191 7.33003 2.6567 7.27843 2.8023 7.20923C2.97429 7.12723 3.13669 7.02684 3.28668 6.90964C3.41388 6.81044 3.52947 6.69485 3.76026 6.46406ZM7.53933 2.68499C7.83429 2.39003 8 1.98997 8 1.57283C8 1.15569 7.83429 0.755635 7.53933 0.460672C7.24436 0.165709 6.84431 3.10794e-09 6.42717 0C6.01003 -3.10794e-09 5.60997 0.165709 5.31501 0.460672L4.96022 0.815459L4.97542 0.859858C5.15026 1.36013 5.43637 1.81418 5.81219 2.18781C6.19699 2.57488 6.66694 2.86663 7.18454 3.03978L7.53933 2.68499Z"
                                        fill="#505050"
                                    />
                                </svg>
                            </span>
                            <span className="text-sm text-gray2">Sửa hồ sơ</span>
                        </p>
                    </div>
                </div>
                {/*------------------------------------Menu-----------------------------------*/}
                <div className="flex flex-col gap-5 text-base font-medium text-gray2">
                    <div className="mt-6">
                        <div
                            className="flex items-center justify-between w-full cursor-pointer"
                            onClick={() => {
                                setShowProfile(!showProfile);
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 0C9.06087 0 10.0783 0.447766 10.8284 1.2448C11.5786 2.04183 12 3.12283 12 4.25C12 5.37717 11.5786 6.45817 10.8284 7.2552C10.0783 8.05223 9.06087 8.5 8 8.5C6.93913 8.5 5.92172 8.05223 5.17157 7.2552C4.42143 6.45817 4 5.37717 4 4.25C4 3.12283 4.42143 2.04183 5.17157 1.2448C5.92172 0.447766 6.93913 0 8 0ZM8 10.625C12.42 10.625 16 12.5269 16 14.875V17H0V14.875C0 12.5269 3.58 10.625 8 10.625Z"
                                        fill="#505050"
                                    />
                                </svg>
                                <span className="cursor-pointer whitespace-nowrap">
                                    Tài khoản của tôi
                                </span>
                            </div>
                            <svg
                                width="12"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`${showProfile ? "" : "rotate-90"} transition-all`}
                            >
                                <path
                                    d="M7 8L0 1.51351L1.63333 0L7 4.97297L12.3667 0L14 1.51351L7 8Z"
                                    fill="#505050"
                                />
                            </svg>
                        </div>
                        <div
                            className={`flex flex-col gap-1 font-normal ml-7 text-gray2 transition-all ${showProfile
                                ? "dropdownShowMenuProfile"
                                : "dropdownHiddenMenuProfile"
                                } `}
                        >
                            <NavLink
                                to="/profile/my-profile"
                                className="flex items-center gap-2 mt-2 itemMenuProfile"
                            >
                                <p className="w-[6px] h-[6px] border rounded-full border-gray2"></p>
                                <span>Hồ sơ</span>
                            </NavLink>
                            <NavLink
                                to="/profile/deposit-withdrawal"
                                className="flex items-center gap-2 itemMenuProfile"
                            >
                                <p className="w-[6px] h-[6px] border rounded-full border-gray2"></p>
                                <span>Nạp/Rút tiền</span>
                            </NavLink>
                            <NavLink
                                to="/profile/change-password"
                                className="flex items-center gap-2 itemMenuProfile"
                            >
                                <p className="w-[6px] h-[6px] border rounded-full border-gray2"></p>
                                <span>Đổi mật khẩu</span>
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to="/profile/vourcher" className="flex items-center gap-2 itemMenuProfile">
                        {/*----------------------------------Icon------------------------------*/}
                        <svg
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.33335 0.333332C1.89133 0.333332 1.4674 0.508927 1.15484 0.821487C0.842282 1.13405 0.666687 1.55797 0.666687 2V5.33333C1.10871 5.33333 1.53264 5.50893 1.8452 5.82149C2.15776 6.13405 2.33335 6.55797 2.33335 7C2.33335 7.44203 2.15776 7.86595 1.8452 8.17851C1.53264 8.49107 1.10871 8.66667 0.666687 8.66667V12C0.666687 12.442 0.842282 12.8659 1.15484 13.1785C1.4674 13.4911 1.89133 13.6667 2.33335 13.6667H15.6667C16.1087 13.6667 16.5326 13.4911 16.8452 13.1785C17.1578 12.8659 17.3334 12.442 17.3334 12V8.66667C16.8913 8.66667 16.4674 8.49107 16.1548 8.17851C15.8423 7.86595 15.6667 7.44203 15.6667 7C15.6667 6.55797 15.8423 6.13405 16.1548 5.82149C16.4674 5.50893 16.8913 5.33333 17.3334 5.33333V2C17.3334 1.55797 17.1578 1.13405 16.8452 0.821487C16.5326 0.508927 16.1087 0.333332 15.6667 0.333332H2.33335ZM11.9167 2.83333L13.1667 4.08333L6.08335 11.1667L4.83335 9.91667L11.9167 2.83333ZM6.34169 2.86667C7.15835 2.86667 7.81669 3.525 7.81669 4.34167C7.81669 4.73286 7.66129 5.10803 7.38467 5.38465C7.10805 5.66126 6.73288 5.81667 6.34169 5.81667C5.52502 5.81667 4.86669 5.15833 4.86669 4.34167C4.86669 3.95047 5.02209 3.5753 5.2987 3.29868C5.57532 3.02207 5.95049 2.86667 6.34169 2.86667ZM11.6584 8.18333C12.475 8.18333 13.1334 8.84166 13.1334 9.65833C13.1334 10.0495 12.978 10.4247 12.7013 10.7013C12.4247 10.9779 12.0495 11.1333 11.6584 11.1333C10.8417 11.1333 10.1834 10.475 10.1834 9.65833C10.1834 9.26714 10.3388 8.89197 10.6154 8.61535C10.892 8.33873 11.2672 8.18333 11.6584 8.18333Z"
                                fill="#505050"
                            />
                        </svg>
                        <span>Ưu đãi của riêng bạn</span>
                    </NavLink>
                    <NavLink
                        to="/profile/history-product"
                        className="flex items-center gap-2 itemMenuProfile"
                    >
                        {/*----------------------------------Icon------------------------------*/}
                        <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.66669 1.91667C4.66669 1.58515 4.79838 1.2672 5.0328 1.03278C5.26722 0.798364 5.58517 0.666668 5.91669 0.666668H10.0834C10.4149 0.666668 10.7328 0.798364 10.9672 1.03278C11.2017 1.2672 11.3334 1.58515 11.3334 1.91667V2.75C11.3334 3.08152 11.2017 3.39946 10.9672 3.63388C10.7328 3.86831 10.4149 4 10.0834 4H5.91669C5.58517 4 5.26722 3.86831 5.0328 3.63388C4.79838 3.39946 4.66669 3.08152 4.66669 2.75V1.91667Z"
                                fill="#505050"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.41667 2.36417C2.36833 2.4225 1.70667 2.58917 1.2325 3.06417C0.5 3.79667 0.5 4.975 0.5 7.33167V12.3317C0.5 14.6892 0.5 15.8675 1.2325 16.6C1.96417 17.3317 3.14333 17.3317 5.5 17.3317H10.5C12.8567 17.3317 14.0358 17.3317 14.7675 16.6C15.5 15.8667 15.5 14.6892 15.5 12.3317V7.33167C15.5 4.975 15.5 3.79667 14.7675 3.06417C14.2933 2.58917 13.6317 2.4225 12.5833 2.36417V2.75C12.5833 3.41304 12.3199 4.04893 11.8511 4.51777C11.3823 4.98661 10.7464 5.25 10.0833 5.25H5.91667C5.25363 5.25 4.61774 4.98661 4.1489 4.51777C3.68006 4.04893 3.41667 3.41304 3.41667 2.75V2.36417ZM3.20833 7.75C3.20833 7.58424 3.27418 7.42527 3.39139 7.30806C3.5086 7.19085 3.66757 7.125 3.83333 7.125H12.1667C12.3324 7.125 12.4914 7.19085 12.6086 7.30806C12.7258 7.42527 12.7917 7.58424 12.7917 7.75C12.7917 7.91576 12.7258 8.07473 12.6086 8.19194C12.4914 8.30915 12.3324 8.375 12.1667 8.375H3.83333C3.66757 8.375 3.5086 8.30915 3.39139 8.19194C3.27418 8.07473 3.20833 7.91576 3.20833 7.75ZM4.04167 10.6667C4.04167 10.5009 4.10751 10.3419 4.22472 10.2247C4.34193 10.1075 4.50091 10.0417 4.66667 10.0417H11.3333C11.4991 10.0417 11.6581 10.1075 11.7753 10.2247C11.8925 10.3419 11.9583 10.5009 11.9583 10.6667C11.9583 10.8324 11.8925 10.9914 11.7753 11.1086C11.6581 11.2258 11.4991 11.2917 11.3333 11.2917H4.66667C4.50091 11.2917 4.34193 11.2258 4.22472 11.1086C4.10751 10.9914 4.04167 10.8324 4.04167 10.6667ZM4.875 13.5833C4.875 13.4176 4.94085 13.2586 5.05806 13.1414C5.17527 13.0242 5.33424 12.9583 5.5 12.9583H10.5C10.6658 12.9583 10.8247 13.0242 10.9419 13.1414C11.0592 13.2586 11.125 13.4176 11.125 13.5833C11.125 13.7491 11.0592 13.9081 10.9419 14.0253C10.8247 14.1425 10.6658 14.2083 10.5 14.2083H5.5C5.33424 14.2083 5.17527 14.1425 5.05806 14.0253C4.94085 13.9081 4.875 13.7491 4.875 13.5833Z"
                                fill="#505050"
                            />
                        </svg>

                        <span>Lịch sử đơn hàng</span>
                    </NavLink>
                    <NavLink to="/profile/noti" className="flex items-center gap-2 itemMenuProfile">
                        {/*----------------------------------Icon------------------------------*/}
                        <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.1906 12.3324C15.1258 12.2543 15.0621 12.1762 14.9996 12.1008C14.1402 11.0613 13.6203 10.434 13.6203 7.49141C13.6203 5.96797 13.2559 4.71797 12.5375 3.78047C12.0078 3.08789 11.2918 2.5625 10.3481 2.17422C10.3359 2.16746 10.3251 2.1586 10.316 2.14805C9.97658 1.01133 9.04767 0.25 8.00001 0.25C6.95236 0.25 6.02384 1.01133 5.68439 2.14687C5.67533 2.15704 5.66464 2.16562 5.65275 2.17227C3.45041 3.07891 2.38009 4.81836 2.38009 7.49023C2.38009 10.434 1.86095 11.0613 1.0008 12.0996C0.938296 12.175 0.874624 12.2516 0.80978 12.3312C0.64228 12.5333 0.536156 12.779 0.503965 13.0394C0.471775 13.2999 0.514866 13.5641 0.62814 13.8008C0.869155 14.3086 1.38283 14.6238 1.96916 14.6238H14.0352C14.6188 14.6238 15.1289 14.309 15.3707 13.8035C15.4845 13.5668 15.528 13.3023 15.4961 13.0416C15.4641 12.7809 15.3582 12.5348 15.1906 12.3324ZM8.00001 17.75C8.56448 17.7495 9.1183 17.5963 9.60273 17.3066C10.0872 17.0168 10.4841 16.6014 10.7516 16.1043C10.7642 16.0805 10.7704 16.0538 10.7696 16.0269C10.7689 15.9999 10.7612 15.9736 10.7473 15.9506C10.7333 15.9275 10.7137 15.9084 10.6902 15.8952C10.6667 15.8819 10.6402 15.875 10.6133 15.875H5.38751C5.36053 15.8749 5.33399 15.8818 5.31046 15.895C5.28693 15.9082 5.26723 15.9273 5.25327 15.9504C5.2393 15.9735 5.23156 15.9998 5.23078 16.0268C5.23001 16.0537 5.23623 16.0804 5.24884 16.1043C5.51624 16.6013 5.91316 17.0167 6.39752 17.3065C6.88187 17.5962 7.43561 17.7495 8.00001 17.75Z"
                                fill="#505050"
                            />
                        </svg>
                        <span>Thông báo</span>
                    </NavLink>
                    <NavLink to="/profile/accumulate-points" className="flex items-center gap-2 itemMenuProfile">
                        {/*----------------------------------Icon------------------------------*/}
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.00008 13.1667L10.3001 10.3167L13.1668 9L10.3001 7.7L9.00008 4.83333L7.69175 7.7L4.83342 9L7.69175 10.3167L9.00008 13.1667ZM5.80842 1.3C6.82098 0.883288 7.90513 0.668157 9.00008 0.666664C10.0918 0.666664 11.1751 0.883331 12.1918 1.3C13.2001 1.71666 14.1168 2.33333 14.8918 3.10833C15.6668 3.88333 16.2834 4.8 16.7001 5.80833C17.1168 6.825 17.3334 7.90833 17.3334 9C17.3334 11.2083 16.4584 13.3333 14.8918 14.8917C14.1188 15.6665 13.2005 16.2811 12.1894 16.7001C11.1784 17.1191 10.0945 17.3343 9.00008 17.3333C7.90513 17.3318 6.82098 17.1167 5.80842 16.7C4.79821 16.2807 3.88068 15.6662 3.10842 14.8917C2.33358 14.1187 1.71902 13.2004 1.30002 12.1893C0.881009 11.1783 0.665803 10.0944 0.666751 9C0.666751 6.79166 1.54175 4.66666 3.10842 3.10833C3.88342 2.33333 4.80008 1.71666 5.80842 1.3ZM4.28342 13.7167C5.53342 14.9667 7.23342 15.6667 9.00008 15.6667C10.7668 15.6667 12.4668 14.9667 13.7168 13.7167C14.9668 12.4667 15.6668 10.7667 15.6668 9C15.6668 7.23333 14.9668 5.53333 13.7168 4.28333C12.465 3.03403 10.7686 2.33267 9.00008 2.33333C7.23342 2.33333 5.53342 3.03333 4.28342 4.28333C3.03412 5.53506 2.33276 7.2315 2.33342 9C2.33342 10.7667 3.03342 12.4667 4.28342 13.7167Z"
                                fill="#505050"
                            />
                        </svg>
                        <span>Tích điểm</span>
                    </NavLink>
                </div>
            </div>
            <div className="col-span-4 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LayoutProfile;
