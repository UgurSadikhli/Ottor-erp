import React from "react";

interface Props {
  color: string;
}

const ArrowDownFilledicon = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="currentColor"
      className="bi bi-caret-down-fill"
      viewBox="0 0 16 15"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );
};

export default ArrowDownFilledicon;
