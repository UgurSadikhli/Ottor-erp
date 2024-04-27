import React from "react";

interface Props {
  color: string;
}

const SrockAndInventoryIcon = ({ color }: Props) => {
  return (
    <svg
      width="34.000000"
      height="34.000000"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip5_6056">
          <rect
            id="Stock"
            width="34.000000"
            height="34.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Stock"
        width="34.000000"
        height="34.000000"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip5_6056)">
        <path
          id="Vector"
          d="M5.66 11.15L12.57 11.15L12.57 4.25L5.66 4.25L5.66 11.15ZM7.84 6.42L10.39 6.42L10.39 8.98L7.84 8.98L7.84 6.42Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M15.21 4.25L28.32 4.25L28.32 6.42L15.21 6.42L15.21 4.25Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M15.21 8.98L25.68 8.98L25.68 11.15L15.21 11.15L15.21 8.98Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M5.66 20.62L12.57 20.62L12.57 13.71L5.66 13.71L5.66 20.62ZM7.84 15.89L10.39 15.89L10.39 18.44L7.84 18.44L7.84 15.89Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M15.21 13.71L28.32 13.71L28.32 15.89L15.21 15.89L15.21 13.71Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M15.21 18.44L25.68 18.44L25.68 20.62L15.21 20.62L15.21 18.44Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M5.66 30.08L12.57 30.08L12.57 23.18L5.66 23.18L5.66 30.08ZM7.84 25.35L10.39 25.35L10.39 27.91L7.84 27.91L7.84 25.35Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M15.21 23.18L28.32 23.18L28.32 25.35L15.21 25.35L15.21 23.18Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M15.21 27.91L25.68 27.91L25.68 30.09L15.21 30.09L15.21 27.91Z"
          fill={color}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  );
};

export default SrockAndInventoryIcon;
