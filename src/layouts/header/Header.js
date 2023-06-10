import React from "react";
import Logo from "./../../components/header/Logo";
import IconDown from './../../components/header/IconDown';
import IconSearch from './../../components/header/IconSearch';
import IconNoti from './../../components/header/IconNoti';
import IconCart from './../../components/header/IconCart';

const Header = () => {
    return (
        <div className="h-[120px] w-screen flex flex-col px-9 border-b border-blue1 text-sm shadow-shadow">
            <div className="flex justify-between w-full mt-3">
                <div className="flex-1">
                    <div className="w-[500px] h-[40px] border rounded-full border-blue1 bg-blue2 pr-4 flex items-center">
                        <button className="flex items-center h-full gap-2 px-3 rounded-l-full bg-blue1">
                            <span>Video Template</span>
                            <IconDown></IconDown>
                        </button>
                        <input type="text" placeholder="Search..." className="flex-grow h-full px-3 outline-none bg-blue2" />
                        <IconSearch></IconSearch>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Logo></Logo>
                    <span className="text-base font-semibold">DevHouse</span>
                </div>
                <div className="flex items-center justify-end flex-1 gap-10">
                    <span className="font-bold">Free Download</span>
                    <button className="px-4 py-3 text-white rounded-md bg-blue6">Trở thành người bán</button>
                    <IconNoti></IconNoti>
                    <div className="flex items-center gap-4">
                        <img src="21011598.jpg" alt="" className="w-[25px] h-[25px] object-cover rounded-full" />
                        <IconDown></IconDown>
                    </div>
                    <IconCart></IconCart>
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
