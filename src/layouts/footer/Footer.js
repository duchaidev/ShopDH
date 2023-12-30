import React from "react";
import { NavLink } from "react-router-dom";
import { IconLogo } from "../../assets/icons";

const Footer = () => {
  return (
    <div className="w-full h-[420px] bg-black flex justify-center ">
      <div className="w-[80%] py-10">
        <div className="grid grid-cols-5">
          <div className="flex flex-col gap-5 text-blue1">
            <div className="flex items-center gap-2">
              <IconLogo height="48" width="60"></IconLogo>
              <h2 className="text-[24px] font-bold text-white">DevHouse</h2>
            </div>
            <span>Điện thoại: 0343335657</span>
            <span>Email: contact@leduchai.com</span>
            <div className="flex items-center gap-5">
              <NavLink to="/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all fill-blue1 hover:fill-blue6"
                >
                  <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" />
                </svg>
              </NavLink>
              <NavLink to="/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all fill-blue1 hover:fill-blue6"
                >
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.64 6.8C14.49 8.38 13.84 12.22 13.51 13.99C13.37 14.74 13.09 14.99 12.83 15.02C12.25 15.07 11.81 14.64 11.25 14.27C10.37 13.69 9.87 13.33 9.02 12.77C8.03 12.12 8.67 11.76 9.24 11.18C9.39 11.03 11.95 8.7 12 8.49C12.0069 8.45819 12.006 8.42517 11.9973 8.3938C11.9886 8.36244 11.9724 8.33367 11.95 8.31C11.89 8.26 11.81 8.28 11.74 8.29C11.65 8.31 10.25 9.24 7.52 11.08C7.12 11.35 6.76 11.49 6.44 11.48C6.08 11.47 5.4 11.28 4.89 11.11C4.26 10.91 3.77 10.8 3.81 10.45C3.83 10.27 4.08 10.09 4.55 9.9C7.47 8.63 9.41 7.79 10.38 7.39C13.16 6.23 13.73 6.03 14.11 6.03C14.19 6.03 14.38 6.05 14.5 6.15C14.6 6.23 14.63 6.34 14.64 6.42C14.63 6.48 14.65 6.66 14.64 6.8Z" />
                </svg>
              </NavLink>
              <NavLink to="/">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all fill-blue1 hover:fill-blue6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 6C9.67392 6 8.40215 6.52678 7.46447 7.46447C6.52678 8.40215 6 9.67392 6 11C6 12.3261 6.52678 13.5979 7.46447 14.5355C8.40215 15.4732 9.67392 16 11 16C12.3261 16 13.5979 15.4732 14.5355 14.5355C15.4732 13.5979 16 12.3261 16 11C16 9.67392 15.4732 8.40215 14.5355 7.46447C13.5979 6.52678 12.3261 6 11 6ZM8 11C8 11.7956 8.31607 12.5587 8.87868 13.1213C9.44129 13.6839 10.2044 14 11 14C11.7956 14 12.5587 13.6839 13.1213 13.1213C13.6839 12.5587 14 11.7956 14 11C14 10.2044 13.6839 9.44129 13.1213 8.87868C12.5587 8.31607 11.7956 8 11 8C10.2044 8 9.44129 8.31607 8.87868 8.87868C8.31607 9.44129 8 10.2044 8 11Z"
                  />
                  <path d="M17 4C16.7348 4 16.4804 4.10536 16.2929 4.29289C16.1054 4.48043 16 4.73478 16 5C16 5.26522 16.1054 5.51957 16.2929 5.70711C16.4804 5.89464 16.7348 6 17 6C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4V18C0 19.0609 0.421427 20.0783 1.17157 20.8284C1.92172 21.5786 2.93913 22 4 22H18C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18V4C22 2.93913 21.5786 1.92172 20.8284 1.17157C20.0783 0.421427 19.0609 0 18 0H4ZM18 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2Z"
                  />
                </svg>
              </NavLink>
              <NavLink to="/">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all fill-blue1 hover:fill-blue6"
                >
                  <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" />
                </svg>
              </NavLink>
              <NavLink to="/">
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all fill-blue1 hover:fill-blue6"
                >
                  <path d="M20.384 1.96745C19.6209 2.30505 18.8116 2.52683 17.983 2.62545C18.8561 2.10259 19.5093 1.28019 19.821 0.31145C19.001 0.79945 18.102 1.14145 17.166 1.32645C16.5366 0.653029 15.7024 0.206413 14.793 0.0560348C13.8836 -0.0943437 12.9499 0.0599411 12.1373 0.494903C11.3246 0.929865 10.6784 1.62113 10.2991 2.46124C9.91984 3.30135 9.82875 4.24323 10.04 5.14045C8.37694 5.05724 6.74997 4.62518 5.26474 3.87231C3.77951 3.11945 2.46924 2.06262 1.419 0.77045C1.04729 1.4089 0.851955 2.13468 0.853 2.87345C0.853 4.32345 1.592 5.60445 2.713 6.35445C2.04901 6.33351 1.39965 6.15419 0.819 5.83145V5.88245C0.81897 6.84832 1.15303 7.78447 1.76453 8.53212C2.37603 9.27977 3.22731 9.79289 4.174 9.98445C3.55764 10.1517 2.91129 10.1763 2.284 10.0564C2.55092 10.8878 3.07121 11.6149 3.772 12.1358C4.47278 12.6568 5.31896 12.9455 6.192 12.9614C5.32436 13.6429 4.33089 14.1466 3.26841 14.4438C2.20593 14.741 1.09529 14.8258 0 14.6934C1.91172 15.9228 4.1371 16.5755 6.41 16.5734C14.104 16.5734 18.31 10.2005 18.31 4.67345C18.31 4.49345 18.306 4.31145 18.298 4.13245C19.1164 3.54081 19.8228 2.80701 20.384 1.96745Z" />
                </svg>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-4 text-blue1">
            <h2 className="text-[22px] text-white font-semibold">Earn</h2>
            <NavLink to="/" className="mt-3">
              Affilate Partner
            </NavLink>
            <NavLink to="/">Trở thành người bán</NavLink>
          </div>
          <div className="flex flex-col gap-5 mt-4 text-blue1">
            <h2 className="text-[22px] text-white font-semibold">Về DH</h2>
            <NavLink to="/" className="mt-3">
              Giới thiệu
            </NavLink>
            <NavLink to="/">Liên hệ</NavLink>
            <NavLink to="/">Điều khoản</NavLink>
            <NavLink to="/">Bảo mật</NavLink>
            <NavLink to="/">Cơ hội việc làm</NavLink>
          </div>
          <div className="flex flex-col gap-5 mt-4 text-blue1">
            <h2 className="text-[22px] text-white font-semibold">
              Sản phẩm khác
            </h2>
            <NavLink to="/" className="mt-3">
              Web bán tương tác
            </NavLink>
            <NavLink to="/">Game CSS Diner</NavLink>
            <NavLink to="/">Game Froggy Pro</NavLink>
            <NavLink to="/">Chia sẻ blog</NavLink>
          </div>
          <div className="flex flex-col gap-5 mt-4 text-blue1">
            <h2 className="text-[22px] text-white font-semibold">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ DH
            </h2>
            <NavLink to="/" className="mt-3">
              Mã số thuế: 01234567
            </NavLink>
            <NavLink to="/">Lĩnh vực: Công nghệ, lập trình, MMO.</NavLink>
          </div>
        </div>
        <div className="flex justify-between pt-3 items-center text-[14px] mt-16 border-t text-blue1 border-blue1">
          <span>© 2018 - 2023 DH. Nền tảng mua bán hàng đầu Việt Nam</span>
          <button className="flex items-center gap-2 px-3 py-1 border text-gray1">
            <span>Tiếng Việt</span>
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
                d="M6.29306 0.293031C6.48059 0.10556 6.73489 0.000244141 7.00006 0.000244141C7.26522 0.000244141 7.51953 0.10556 7.70706 0.293031L13.3641 5.95003C13.5462 6.13863 13.647 6.39124 13.6447 6.65343C13.6425 6.91563 13.5373 7.16644 13.3519 7.35185C13.1665 7.53726 12.9157 7.64243 12.6535 7.6447C12.3913 7.64698 12.1387 7.54619 11.9501 7.36403L7.00006 2.41403L2.05006 7.36403C1.86146 7.54619 1.60885 7.64698 1.34666 7.6447C1.08446 7.64243 0.833648 7.53726 0.64824 7.35185C0.462832 7.16644 0.357663 6.91563 0.355384 6.65343C0.353106 6.39124 0.4539 6.13863 0.636058 5.95003L6.29306 0.293031Z"
                fill="gray"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
