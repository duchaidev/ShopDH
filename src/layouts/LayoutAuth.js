import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex mt-[1%] px-[3%]">
        <NavLink to="/">
          <img src="/logo.png" alt="logo" className="w-[60%]" />
        </NavLink>
      </div>
      <div className="grid items-center h-[85%] px-[20%] justify-center grid-cols-2 gap-10">
        <div className="col-span-1">
          <h2 className="text-[36px] font-semibold leading-[50px]">
            Welcome back to the world’s marketplace for code
          </h2>
          <img src="/bannerlogin.webp" alt="" />
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
