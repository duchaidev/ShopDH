import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValueDropdown } from "../../redux/dropdownSlide";

const DropDown = ({ className, showDropDown }) => {
  // const { setValue, dataButtonHead } = useContext(DropdownContext);
  const { dataDropdown } = useSelector((state) => state?.dropdown);
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute top-[40px] max-w-max flex bg-white flex-col border border-blue1 rounded-md dropdown-content ${className} ${
        showDropDown ? "open" : ""
      }`}
    >
      {dataDropdown?.map((item) => (
        <span
          className="px-5 py-2 cursor-pointer hover:bg-blue1"
          key={item.id}
          onMouseDown={() => {
            dispatch(setValueDropdown(item.text));
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default DropDown;
