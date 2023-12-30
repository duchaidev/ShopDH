import React from "react";

const IconSearch = ({ width = "18", height = "18", fill = "#505050" }) => {
  return (
    <div className="cursor-pointer">
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 18"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.5 11.0027H11.71L11.43 10.7401C12.4439 9.59674 13.0011 8.13701 13 6.62733C13 5.37737 12.6188 4.15547 11.9046 3.11617C11.1903 2.07686 10.1752 1.26682 8.98744 0.788482C7.79973 0.310142 6.49279 0.184986 5.23192 0.428842C3.97104 0.672698 2.81285 1.27461 1.90381 2.15847C0.994767 3.04233 0.375703 4.16843 0.124899 5.39437C-0.125905 6.62032 0.00281635 7.89104 0.494786 9.04586C0.986756 10.2007 1.81988 11.1877 2.8888 11.8822C3.95772 12.5766 5.21442 12.9473 6.5 12.9473C8.11 12.9473 9.59 12.3736 10.73 11.4207L11 11.693V12.4611L16 17.3129L17.49 15.8641L12.5 11.0027ZM6.5 11.0027C4.01 11.0027 2 9.04834 2 6.62733C2 4.20631 4.01 2.252 6.5 2.252C8.99 2.252 11 4.20631 11 6.62733C11 9.04834 8.99 11.0027 6.5 11.0027Z" />
      </svg>
    </div>
  );
};

export default IconSearch;
