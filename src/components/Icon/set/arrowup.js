import React from "react";
export default (props) => (
  <svg
    style={props.style}
    width={props.width}
    height={props.height}
    xmlns="https://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <path
      stroke={props.color}
      fill={props.fill}
      d="M 16 4.09375 L 15.28125 4.78125 L 6.78125 13.28125 L 8.21875 14.71875 L 15 7.9375 L 15 28 L 17 28 L 17 7.9375 L 23.78125 14.71875 L 25.21875 13.28125 L 16.71875 4.78125 Z"
    />
  </svg>
);
