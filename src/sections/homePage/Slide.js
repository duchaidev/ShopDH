import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "../../components/dropDown/DropDown";
import { useSelector } from "react-redux";
import { IconArrowDown, IconSearch } from "../../assets/icons";

const data = [
  {
    id: 1,
    category: "Photos",
    url: "/",
  },
  {
    id: 2,
    category: "Fonts",
    url: "/",
  },
  {
    id: 3,
    category: "Graphics",
    url: "/",
  },
];
const SlideHome = () => {
  const { valueDropdown } = useSelector((state) => state?.dropdown);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="flex flex-col items-center mt-16 px-9">
      <div className="w-[60%] flex items-center flex-col">
        <span className="text-[70px] font-bold text-center leading-[100px]">
          Bring your creative ideas to life.
        </span>
        <div className="w-[670px] relative h-[68px] rounded-lg flex items-center pl-6 bg-blue2 mt-[40px]">
          <IconSearch></IconSearch>
          <input
            type="text"
            className="flex-grow h-full px-4 outline-none bg-blue2"
            placeholder="Search millions of photos, fonts, graphics, and more, ..."
          />
          <button
            className="relative w-auto flex gap-3 px-5 border-l border-blue1 items-center h-[30px] cursor-pointer"
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
            <span className="text-gray1">{valueDropdown || "All items"}</span>
            <IconArrowDown></IconArrowDown>
          </button>
          <DropDown
            width={"auto"}
            className="!top-[65px] right-0"
            showDropDown={showDropDown}
          ></DropDown>
        </div>
        <div className="mt-[25px] flex gap-4 transition-all">
          {data.map((items, index) => (
            <NavLink to={items.url} key={items.id} className="transition-all">
              <button className="px-[25px] h-12 items-center rounded-full border border-blue1 flex gap-4 hover:border-blue7 transition-all group">
                <span className="transition-all group-hover:text-blue7">
                  {items.category}
                </span>
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideHome;
