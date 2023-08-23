import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValueDropdown } from "../../redux/dropdownSlide";
import { apiGetCategories } from "../../apiRequest/apiRequestProduct";
import { useQuery } from "react-query";

const DropDown = ({ className, showDropDown }) => {
  const { data: category } = useQuery({
    queryKey: ["apiGetCategories"],
    queryFn: () => apiGetCategories(),
  });
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute z-30 top-[40px] shadow-md max-w-max flex bg-white flex-col border border-blue1 rounded-md dropdown-content ${className} ${
        showDropDown ? "open" : ""
      }`}
    >
      <span
        className="px-5 py-2 cursor-pointer hover:bg-blue1"
        onClick={() => {
          dispatch(setValueDropdown("All items"));
        }}
      >
        All items
      </span>
      {category?.categories?.map((item) => (
        <span
          className="px-5 py-2 cursor-pointer hover:bg-blue1"
          key={item.id}
          onMouseDown={() => {
            dispatch(setValueDropdown(item.name));
          }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default DropDown;
