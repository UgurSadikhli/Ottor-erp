import React from "react";

interface Props {
  color: string;
}

const ProfileIcon = ({ color }: Props) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 2 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip5_1354">
          <rect
            id="Profile Icon"
            width="24.000000"
            height="24.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Profile Icon"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip5_1354)">
        <path
          id="Vector"
          d="M15.84 8.84C15.84 6.73 14.11 5 11.99 5C9.88 5 8.14 6.73 8.14 8.84C8.14 10.96 9.88 12.7 11.99 12.7C14.11 12.7 15.84 10.96 15.84 8.84Z"
          fill="#272525"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M13.52 13.5C13.03 13.66 12.52 13.74 12 13.74C11.47 13.74 10.96 13.66 10.47 13.5C8.93 12.99 7.22 13.41 6.2 14.65C5.45 15.58 5 16.77 5 18.05C5 18.77 5.57 19.34 6.29 19.34L17.7 19.34C18.42 19.34 19 18.77 19 18.05C19 16.77 18.54 15.58 17.79 14.65C16.76 13.41 15.06 12.99 13.52 13.5L13.52 13.5Z"
          fill="#272525"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </g>
      
    </svg>
  );
};

export default ProfileIcon;
