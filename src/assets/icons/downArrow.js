import React from "react";

const DownArrow = ({color="#222222", height="34", width="40", style={padding: "0px", margin: "0px"}}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      height={height}
      width={width}
      style={style}
    >
      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
    </svg>
  );
};

export default DownArrow;
