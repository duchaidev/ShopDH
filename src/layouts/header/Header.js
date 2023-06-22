import React, { useContext, useState } from "react";
import Logo from "./../../components/header/Logo";
import IconDown from './../../components/header/IconDown';
import IconSearch from './../../components/header/IconSearch';
import IconNoti from './../../components/header/IconNoti';
import IconCart from './../../components/header/IconCart';
import DropDown from "../../components/dropDown/DropDown";
import { DropdownContext } from "../../context/dropdown-context";
import DropdownInfo from "../../components/dropDown/DropdownInfo";
import { NavLink } from "react-router-dom";

const Header = () => {
    const { toggle, value, setShow1 } = useContext(DropdownContext);
    const [show, setShow] = useState(false);
    return (
        <div className="h-[120px] top-0 w-screen flex flex-col px-9 border-b border-blue1 text-sm shadow-shadow bg-white z-50">
            <div className="flex justify-between w-full mt-3">
                <div className="flex-1">
                    <div className="w-[500px] relative h-[40px] border rounded-full border-blue1 bg-blue2 pr-4 flex items-center">
                        <button className="flex relative items-center h-full gap-2 w-[135px] justify-between px-3 rounded-l-full bg-blue1 cursor-pointer" onClick={toggle}>
                            <input type="text" className="absolute left-0 w-full h-full bg-black rounded-l-full opacity-0 cursor-pointer" onBlur={() => { setShow1(false) }} />
                            <span>{value || "All Items"}</span>
                            <IconDown></IconDown>
                        </button>
                        <input type="text" placeholder="Search..." className="flex-grow h-full px-3 outline-none bg-blue2" />
                        <IconSearch></IconSearch>
                        <DropDown width={"135px"}></DropDown>
                    </div>

                </div>
                <NavLink to="/" className="flex flex-col items-center">
                    <Logo></Logo>
                    <span className="text-base font-semibold">DevHouse</span>
                </NavLink>
                <div className="flex items-center justify-end flex-1 gap-10">
                    <span className="font-bold">Free Download</span>
                    <button className="px-4 py-3 text-white rounded-md bg-blue6">Trở thành người bán</button>
                    <IconNoti></IconNoti>
                    <div className="relative">
                        <div className="relative flex items-center gap-4" onMouseDown={() => { setShow(!show) }}>
                            <input type="text" className="absolute w-full h-full bg-black opacity-0 cursor-pointer" onBlur={() => { setShow(false) }} />
                            <img src="/21011598.jpg" alt="" className="w-[25px] h-[25px] object-cover rounded-full" />
                            <IconDown></IconDown>
                            <DropdownInfo show={show}></DropdownInfo>
                        </div>
                    </div>
                    <NavLink to="/cart">
                        <IconCart></IconCart>
                    </NavLink>
                </div>
            </div>
            <div className="flex items-center justify-center h-full">
                <span className={`h-full border-b-[2px] px-7 border-greenBorder flexCustom cursor-pointer`}>Stock Video</span>
                <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">Stock Video</span>
                <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">Stock Video</span>
                <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">Stock Video</span>
                <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">Stock Video</span>
                <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">Stock Video</span>
                <span className="h-full border-b-[2px] px-7 border-transparent hover:border-greenBorder transition-all cursor-pointer flexCustom">Stock Video</span>
            </div>
        </div>
    );
};
export default Header;
