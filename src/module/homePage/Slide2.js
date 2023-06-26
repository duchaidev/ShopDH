import React from "react";
import { NavLink } from "react-router-dom";

const Slide2 = () => {
    return (
        <div className="mt-16 px-[5%] pb-5 flex justify-between">
            <div className="w-[50%] flex flex-col gap-12">
                <h2 className="text-[30px] font-bold">Start Earning with DH</h2>
                <span className="text-[20px]">Sell your designs and reach millions of buyers or promote other artists on Creative Market to earn cash!</span>
                <div className="flex items-center gap-3">
                    <NavLink to="/sell" className="py-[12px] px-[22px] border-blue7 border-[2px] hover:bg-transparent hover:text-blue7 transition-all text-white font-semibold rounded-sm bg-blue7 hover:scale-95">Open a Show</NavLink>
                    <NavLink to="/affiliates" className="py-[12px] px-[22px] border-[2px] text-blue7 font-semibold rounded-sm border-blue7 hover:transition-all hover:bg-blue7 hover:text-white hover:scale-95">Become an Affiliate</NavLink>
                </div>
                <div className="relative">
                    <img src="lineSlide2.png" alt="" className="absolute w-full -translate-x-20" />
                </div>
            </div>
            <div>
                <img src="slide2.png" alt="" />
            </div>
        </div>
    );
};

export default Slide2;
