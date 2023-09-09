import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
// import Message from "./footer/Message";

const LayoutMain = () => {
  return (
    <div>
      {/* <Message></Message> */}
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default LayoutMain;
