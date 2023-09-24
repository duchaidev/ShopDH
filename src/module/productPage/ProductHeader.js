import React from "react";
import IconStar from "../../components/icon/IconStar";
import { NavLink } from "react-router-dom";
import IconBootstrap from "../../components/icon/IconBootstrap";
import IconHeart from "../../components/icon/IconHeart";

const ProductHeader = () => {
  return (
    <div className="flex items-center mt-5 gap-14">
      <div className="flex items-center gap-3">
        <IconStar></IconStar>
        <span>Trending:</span>
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md"
        >
          <IconBootstrap></IconBootstrap>
          <span>Bootstrap</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md"
        >
          <IconBootstrap></IconBootstrap>
          <span>Bootstrap</span>
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        <IconHeart></IconHeart>
        <span>Popular:</span>
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md"
        >
          <IconBootstrap></IconBootstrap>
          <span>Bootstrap</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md"
        >
          <IconBootstrap></IconBootstrap>
          <span>Bootstrap</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md"
        >
          <IconBootstrap></IconBootstrap>
          <span>Bootstrap</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductHeader;
