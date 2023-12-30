import React, { useState } from "react";
import { IconArrowDown, IconTick } from "../../assets/icons";

const FiltersButtonRight = ({ isActive, setIsActive }) => {
  const [showDropDownFilter, setShowDropDownFilter] = useState(false);
  const [valueFilterDropDown, setValueFilterDropDown] = useState("");

  return (
    <div className="flex items-center justify-end">
      <div className="relative w-[260px] h-10 flex items-center border-[2px] border-blue1 rounded-md px-3">
        <div
          className="flex items-center justify-between w-full h-full"
          onClick={() => {
            setShowDropDownFilter(!showDropDownFilter);
          }}
        >
          <span className="font-semibold text-[14px] text-gray2">
            {valueFilterDropDown || "Sort by Popular"}
          </span>
          <IconArrowDown></IconArrowDown>
          <input
            type="text"
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 cursor-pointer"
            readOnly
            onBlur={() => {
              setShowDropDownFilter(false);
            }}
          />
        </div>
        <div
          className={`absolute z-10 left-0 w-full bg-white dropdown-content ${
            showDropDownFilter ? "open" : ""
          } border top-[38px] border-blue1 rounded-sm text-[14px]`}
        >
          <div
            className="flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2"
            onMouseDown={() => {
              setValueFilterDropDown("Nổi bật");
              setIsActive("popular");
            }}
          >
            <span>Nổi bật</span>
            <span>{isActive === 1 && <IconTick></IconTick>}</span>
          </div>
          <div
            className="flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2"
            onMouseDown={() => {
              setValueFilterDropDown("Bán chạy");
              setIsActive("bestseller");
            }}
          >
            <span>Bán chạy</span>
            <span>{isActive === 2 && <IconTick></IconTick>}</span>
          </div>
          <div
            className="flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2"
            onMouseDown={() => {
              setValueFilterDropDown("% Giảm giá");
              setIsActive("discount");
            }}
          >
            <span>% giảm giá</span>
            <span>{isActive === 3 && <IconTick></IconTick>}</span>
          </div>
          <div
            className="flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2"
            onMouseDown={() => {
              setValueFilterDropDown("Giá cao đến thấp");
              setIsActive("hightolowprice");
            }}
          >
            <span>Giá cao đến thấp</span>
            <span>{isActive === 4 && <IconTick></IconTick>}</span>
          </div>
          <div
            className="flex justify-between px-3 py-3 transition-all cursor-pointer border-grayEC hover:bg-blue2"
            onMouseDown={() => {
              setValueFilterDropDown("Giá thấp đến cao");
              setIsActive("lowtohighprice");
            }}
          >
            <span>Giá thấp đến cao</span>
            <span>{isActive === 5 && <IconTick></IconTick>}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersButtonRight;
