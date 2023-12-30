import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Message from "./footer/Message";
import { useSelector } from "react-redux";

const LayoutMain = () => {
  const { dataUser } = useSelector((state) => state.register.login);
  return (
    <div>
      {dataUser?.id ? <Message></Message> : ""}
      {/* <Message></Message> */}
      <Header></Header>
      <div className="pt-[120px]">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default LayoutMain;
