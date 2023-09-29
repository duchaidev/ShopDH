import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonProductDetail = () => {
  return (
    <div>
      <Skeleton
        variant="text"
        sx={{ fontSize: "24px" }}
        height={24}
        width={"65%"}
        animation="wave"
      />
      <div className="flex items-center gap-4 mt-5">
        <Skeleton variant="circular" width={25} height={25} animation="wave" />
        <Skeleton
          variant="text"
          sx={{ fontSize: "14px" }}
          height={25}
          width={"60%"}
          animation="wave"
        />
      </div>
      {/*-----------------------------------------productDetail Image + Price-----------------------------------------*/}
      <div className="grid grid-cols-10 gap-10 mt-8">
        {/*-----------------------------------------productDetail Image-----------------------------------------*/}
        <div className="flex flex-col col-span-7 gap-3">
          <div className="w-full object-cover aspect-[7/4] rounded-lg">
            <div className="w-full object-cover aspect-[7/4] rounded-lg">
              <Skeleton
                variant="rounded"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
          </div>
          <div className="flex items-center w-full gap-3">
            <div className="aspect-[7/4] w-[16.666%]">
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
            <div className="aspect-[7/4] w-[16.666%]">
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
            <div className="aspect-[7/4] w-[16.666%]">
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
            <div className="aspect-[7/4] w-[16.666%]">
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
            <div className="aspect-[7/4] w-[16.666%]">
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
            <div className="aspect-[7/4] w-[16.666%]">
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
          </div>
        </div>
        {/*-----------------------------------------productDetail Price-----------------------------------------*/}
        <div className="flex flex-col col-span-3 gap-3">
          {/*-----------------------------------------productDetail Price Box1-----------------------------------------*/}
          <div className="border rounded-lg flex flex-col gap-3 border-blue1 p-[25px]">
            <Skeleton
              variant="rectangular"
              height={16}
              width={"100%"}
              animation="wave"
            />

            <Skeleton
              variant="rectangular"
              width="100%"
              height="53px"
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="53px"
              animation="wave"
            />
            <div className="flex flex-col gap-4 mt-4">
              <Skeleton
                variant="rectangular"
                height={20}
                width={"100%"}
                animation="wave"
              />

              <div>
                <Skeleton
                  variant="rectangular"
                  height={42}
                  width={"100%"}
                  animation="wave"
                />
                <Skeleton
                  variant="rectangular"
                  height={42}
                  width={"100%"}
                  animation="wave"
                />
                <Skeleton
                  variant="rectangular"
                  height={42}
                  width={"100%"}
                  animation="wave"
                />
                <Skeleton
                  variant="rectangular"
                  height={42}
                  width={"100%"}
                  animation="wave"
                />
              </div>
              {/* </div> */}
              <Skeleton
                variant="rectangular"
                height={16}
                width={"100%"}
                animation="wave"
              />
            </div>
          </div>
          {/*-----------------------------------------productDetail Price Box2-----------------------------------------*/}
          <div className="rounded-lg bg-blue3 w-full h-[108px] overflow-hidden">
            <Skeleton
              variant="rectangular"
              height={"100%"}
              width={"100%"}
              animation="wave"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductDetail;
