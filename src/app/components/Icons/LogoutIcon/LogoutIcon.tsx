import React from "react";

interface Props {
  color: string;
}

const LogoutIcon = ({ color }: Props) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 1 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip5_1360">
          <rect
            id="Logout Icon"
            width="24.000000"
            height="24.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Logout Icon"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip5_1360)">
        <path
          id="Vector"
          d="M20.35 12.47L17.76 15.01C17.04 15.73 15.97 14.65 16.69 13.94L17.56 13.07C17.76 12.87 17.69 12.71 17.41 12.71L8.87 12.71C8.45 12.71 8.11 12.37 8.11 11.96C8.11 11.54 8.45 11.2 8.87 11.2L17.41 11.2C17.69 11.2 17.76 11.04 17.56 10.84L16.69 9.97C15.97 9.26 17.04 8.19 17.76 8.9L20.35 11.41C20.65 11.71 20.65 12.18 20.35 12.47L20.35 12.47ZM15.88 7.03C16.22 7.38 16.22 7.94 15.88 8.29C15.53 8.63 14.97 8.63 14.63 8.29C12.6 6.26 9.31 6.26 7.29 8.29C5.26 10.31 5.26 13.6 7.29 15.63C9.31 17.65 12.6 17.65 14.63 15.63C14.97 15.28 15.53 15.28 15.88 15.63C16.22 15.97 16.22 16.53 15.88 16.88C13.16 19.6 8.75 19.6 6.03 16.88C3.32 14.16 3.32 9.75 6.03 7.03C8.75 4.32 13.16 4.32 15.88 7.03L15.88 7.03Z"
          fill="#272525"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
};

export default LogoutIcon;
