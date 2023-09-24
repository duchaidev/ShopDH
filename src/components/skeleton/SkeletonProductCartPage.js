import { Skeleton, Stack } from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const SkeletonProductCartPage = () => {
  return (
    <Stack
      spacing={1}
      sx={{ transition: "opacity 0.5s ease" }}
      className="grid py-4 pr-6 mt-3 border-t grid-cols-20 border-blue1"
    >
      <div className="flex items-center gap-5 col-span-15">
        <FormControlLabel control={<Checkbox />} />
        <div className="w-48 p-[6px] border rounded-sm border-blue1 aspect-[7/4]">
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div>
            <Skeleton
              variant="text"
              sx={{ fontSize: "18px" }}
              width={"100px"}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "16px" }}
              width={"100px"}
              height={"21px"}
            />
          </div>
          <div>
            <Skeleton
              variant="text"
              sx={{ fontSize: "14px" }}
              width={"100px"}
            />
            <Skeleton
              variant="text"
              //   sx={{ fontSize: "14px" }}
              height={"55px"}
              width={"250px"}
              style={{ marginTop: "6px" }}
            />
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default SkeletonProductCartPage;
