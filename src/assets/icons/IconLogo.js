import React from "react";

const IconLogo = ({ width, height }) => {
  return (
    <div>
      <svg
        width={width || "40"}
        height={height || "28"}
        viewBox="0 0 100 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_92_1806)">
          <path
            d="M100 37.5C99.9868 47.4416 96.0316 56.9721 89.0019 64.0019C81.9721 71.0316 72.4416 74.9868 62.5 75H23.75V18.75H36.25V30H58.75V18.75H71.25V56.25H58.75V42.5H36.25V62.5H62.5C69.1304 62.5 75.4893 59.8661 80.1777 55.1777C84.8661 50.4893 87.5 44.1304 87.5 37.5C87.5 30.8696 84.8661 24.5107 80.1777 19.8223C75.4893 15.1339 69.1304 12.5 62.5 12.5H12.5V75H0V0H62.5C72.4416 0.013229 81.9721 3.96836 89.0019 10.9981C96.0316 18.0279 99.9868 27.5584 100 37.5Z"
            fill="url(#paint0_radial_92_1806)"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_92_1806"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.190002 75.21) scale(100.96 100.96)"
          >
            <stop stopColor="#5FFF3F" />
            <stop offset="0.11" stopColor="#5DFF44" />
            <stop offset="0.24" stopColor="#55FF53" />
            <stop offset="0.38" stopColor="#4AFF6B" />
            <stop offset="0.53" stopColor="#39FF8D" />
            <stop offset="0.68" stopColor="#24FFB8" />
            <stop offset="0.84" stopColor="#0AFFEC" />
            <stop offset="0.89" stopColor="#01FFFF" />
          </radialGradient>
          <clipPath id="clip0_92_1806">
            <rect width="100" height="75" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconLogo;
