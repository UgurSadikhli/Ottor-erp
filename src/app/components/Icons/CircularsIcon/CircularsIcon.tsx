import React from "react";

interface Props {
  color: string;
}

const CircularsIcon = ({ color }: Props) => {
  return (
    <svg
      width="15.000000"
      height="17.000000"
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" >
      <defs>
        <linearGradient
          id="paint_linear_148_9976_0"
          x1="0.000000"
          y1="0.000004"
          x2="14.799996"
          y2="16.914289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#14ADD6" />
          <stop offset="1.000000" stop-color="#384295" />
        </linearGradient>
      </defs>
      <path
        id="Vector"
        d="M10.57 12.68L14.79 12.68L10.57 16.91L10.57 12.68ZM9.51 12.15L9.51 16.91L1.05 16.91C0.47 16.91 0 16.44 0 15.85L0 1.05C0 0.47 0.47 0 1.05 0L13.74 0C14.32 0 14.79 0.47 14.79 1.05L14.79 11.62L10.04 11.62C9.75 11.62 9.51 11.86 9.51 12.15ZM2.11 3.69C2.11 3.99 2.35 4.22 2.64 4.22L12.15 4.22C12.44 4.22 12.68 3.99 12.68 3.69C12.68 3.4 12.44 3.17 12.15 3.17L2.64 3.17C2.35 3.17 2.11 3.4 2.11 3.69ZM2.11 6.87C2.11 7.16 2.35 7.39 2.64 7.39L12.15 7.39C12.44 7.39 12.68 7.16 12.68 6.87C12.68 6.57 12.44 6.34 12.15 6.34L2.64 6.34C2.35 6.34 2.11 6.57 2.11 6.87ZM12.15 10.57C12.44 10.57 12.68 10.33 12.68 10.04C12.68 9.75 12.44 9.51 12.15 9.51L2.64 9.51C2.35 9.51 2.11 9.75 2.11 10.04C2.11 10.33 2.35 10.57 2.64 10.57L12.15 10.57Z"
        fill={color}
        fill-opacity="1.000000"
        fill-rule="nonzero"
      />
    </svg>
  );
};

export default CircularsIcon;
