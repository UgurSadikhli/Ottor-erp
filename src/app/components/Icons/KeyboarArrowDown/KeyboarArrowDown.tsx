import React from "react";

interface Props {
  color: string;
}

const KeyboarArrowDownIcon = ({ color }: Props) => {
  return (
    <svg
      width="17.000000"
      height="9.000000"
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="shape"
        d="M0 0L8 8L16 0"
        stroke={ color }
        stroke-opacity="1.000000"
        stroke-width="1.500000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default KeyboarArrowDownIcon;
