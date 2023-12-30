import React, { useState } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const AllProduct = ({ quantityProduct, children }) => {
  const [view, setView] = useState("list");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{quantityProduct} Sản phẩm</h2>
          <span className="text-sm text-gray1">
            Có thể đăng thêm {100 - quantityProduct} sản phẩm
          </span>
        </div>
        <div className="flex gap-4">
          <button className="h-[40px] flex items-center justify-center px-4 bg-blue6 border-[2px] border-blue6 text-white rounded-sm">
            + Thêm 1 sản phẩm mới
          </button>
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleChange}
            className="h-[40px]"
          >
            <ToggleButton value="list" aria-label="list">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AllProduct;
