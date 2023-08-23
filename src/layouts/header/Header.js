import React, { useState } from "react";
import Logo from "./../../components/header/Logo";
import IconDown from "./../../components/header/IconDown";
import IconSearch from "./../../components/header/IconSearch";
import IconNoti from "./../../components/header/IconNoti";
import IconCart from "./../../components/header/IconCart";
import DropDown from "../../components/dropDown/DropDown";
import DropdownInfo from "../../components/dropDown/DropdownInfo";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { convertBase64ToImage } from "../../until/componentHandle";
import { useQuery } from "react-query";
import { apiGetCategories } from "../../apiRequest/apiRequestProduct";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { valueDropdown } = useSelector((state) => state?.dropdown);

  const [show, setShow] = useState(false);
  const { t } = useTranslation(["home"]);
  const { dataUser } = useSelector((state) => state?.register?.login);
  return (
    <div className="h-[120px] top-0 w-screen flex flex-col px-9 border-b border-blue1 text-sm shadow-shadow bg-white z-50">
      <div className="flex justify-between w-full mt-3">
        <div className="flex-1">
          <div className="w-[500px] relative h-[40px] border rounded-full border-blue1 bg-blue2 pr-4 flex items-center">
            <button
              className="flex relative items-center h-full gap-2 w-[135px] justify-between px-3 rounded-l-full bg-blue1 cursor-pointer"
              onClick={() => {
                setShowDropDown(!showDropDown);
              }}
            >
              <input
                type="text"
                className="absolute left-0 w-full h-full bg-black rounded-l-full opacity-0 cursor-pointer"
                onBlur={() => {
                  setShowDropDown(false);
                }}
              />
              <span>{valueDropdown || t("SEARCH")}</span>
              <IconDown></IconDown>
            </button>
            <input
              type="text"
              placeholder={`${t("SEARCH")}...`}
              className="flex-grow h-full px-3 outline-none bg-blue2"
            />
            <IconSearch></IconSearch>
            <DropDown width={"135px"} showDropDown={showDropDown}></DropDown>
          </div>
        </div>
        <NavLink to="/" className="flex flex-col items-center">
          <Logo></Logo>
          <span className="text-base font-semibold">DevHouse</span>
        </NavLink>
        <div className="flex items-center justify-end flex-1 gap-10">
          <span className="font-bold">{t("FREEDOWNLOAD")}</span>
          <NavLink
            to="/seller"
            className="px-4 py-3 text-white rounded-md bg-blue6"
          >
            {t("BECOMEASELLER")}
          </NavLink>
          <Tooltip title="Thông báo">
            <span className="cursor-pointer">
              <IconNoti></IconNoti>
            </span>
          </Tooltip>
          <div className="relative">
            {!dataUser?.email ? (
              <NavLink to="/login" className="font-semibold text-gray2">
                Sign In
              </NavLink>
            ) : (
              <div className="relative flex items-center gap-4">
                <input
                  type="text"
                  className="absolute w-full h-full bg-black opacity-0 cursor-pointer"
                  onClick={() => {
                    setShow(!show);
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setShow(false);
                    }, 100);
                  }}
                />
                <img
                  src={
                    convertBase64ToImage(dataUser?.avatar) || "/21011598.jpg"
                  }
                  alt=""
                  className="w-[25px] h-[25px] object-cover rounded-full"
                />
                <IconDown></IconDown>
                <DropdownInfo show={show} dataUser={dataUser}></DropdownInfo>
              </div>
            )}
          </div>
          <NavLink to="/cart">
            <IconCart></IconCart>
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <span
          className={`h-full border-b-[2px] px-7 border-greenBorder flexCustom cursor-pointer`}
        >
          Stock Video
        </span>
        <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">
          Stock Video
        </span>
        <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">
          Stock Video
        </span>
        <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">
          Stock Video
        </span>
        <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">
          Stock Video
        </span>
        <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">
          Stock Video
        </span>
        <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">
          Stock Video
        </span>
      </div>
    </div>
  );
};
export default Header;
