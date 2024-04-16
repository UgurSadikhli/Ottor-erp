import Link from "next/link";

const LogisticsButton = ({ isActive, onClick,color }) => (
  <Link href="/logistics" passHref={true} legacyBehavior={true}>
    <a className={`nav-link ${isActive ? "active" : ""}`} onClick={onClick}>
      <svg
        width="24.000000"
        height="24.000000"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="clip5_1277">
          <rect
            id="Logistics"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
        <rect
          id="Logistics"
          width="24.000000"
          height="24.000000"
          fill="#FFFFFF"
          fillOpacity="0"
        />
        <g clipPath="url(#clip5_1277)">
          <path
            id="Vector"
            d="M5.93 11.48L5.89 11.38L3.05 11.38L3.25 11.63L3.25 11.63C4.17 12.84 5.51 13.64 7.01 13.89L7.39 13.95L7.16 13.64L7.16 13.64C6.67 12.97 6.26 12.24 5.93 11.48L5.93 11.48Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M9.5 11.38L6.48 11.38L6.59 11.6C6.93 12.34 7.36 13.03 7.87 13.66L7.99 13.81L8.11 13.66C8.62 13.03 9.05 12.34 9.39 11.6L9.5 11.38Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M10.09 11.38L10.05 11.48C9.72 12.24 9.31 12.97 8.82 13.64L8.6 13.95L8.97 13.89L8.97 13.89C10.47 13.64 11.81 12.83 12.74 11.63L12.93 11.38L10.09 11.38Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M10.76 8.4C10.73 9.16 10.59 9.91 10.37 10.64L10.3 10.84L13.26 10.84L13.3 10.76L13.3 10.76C13.69 10.03 13.92 9.23 13.97 8.41L13.98 8.25L10.77 8.25L10.76 8.4Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M5.77 8.41C5.82 9.2 5.98 9.99 6.24 10.73L6.27 10.84L9.71 10.84L9.74 10.73C10.01 9.99 10.16 9.2 10.2 8.41L10.21 8.25L5.76 8.25L5.77 8.41Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M5.62 10.64C5.39 9.91 5.25 9.16 5.22 8.4L5.21 8.25L2 8.25L2.01 8.41C2.07 9.23 2.29 10.03 2.68 10.76L2.72 10.84L5.68 10.84L5.62 10.64Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M5.22 7.56C5.25 6.79 5.39 6.04 5.62 5.31L5.68 5.11L2.72 5.11L2.68 5.19C2.29 5.92 2.07 6.72 2.01 7.54L2 7.7L5.21 7.7L5.22 7.56Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M10.2 7.54C10.16 6.75 10.01 5.96 9.74 5.22L9.71 5.11L6.27 5.11L6.24 5.22C5.98 5.96 5.82 6.75 5.77 7.54L5.76 7.7L10.21 7.7L10.2 7.54Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M10.37 5.31C10.59 6.04 10.73 6.79 10.76 7.56L10.77 7.7L13.98 7.7L13.97 7.54L13.97 7.54C13.92 6.72 13.69 5.92 13.3 5.19L13.26 5.11L10.3 5.11L10.37 5.31Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M10.05 4.47L10.09 4.57L12.93 4.57L12.74 4.32L12.74 4.32C11.81 3.12 10.47 2.31 8.97 2.06L8.6 2L8.82 2.3L8.82 2.3C9.31 2.98 9.72 3.7 10.05 4.47L10.05 4.47Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M6.48 4.57L9.5 4.57L9.39 4.35C9.05 3.61 8.62 2.92 8.11 2.29L7.99 2.14L7.87 2.29C7.36 2.92 6.93 3.61 6.59 4.35L6.48 4.57Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M5.93 4.47C6.26 3.7 6.67 2.98 7.16 2.3L7.39 2L7.01 2.06L7.01 2.06C5.51 2.31 4.17 3.11 3.25 4.32L3.05 4.57L5.89 4.57L5.93 4.47Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M21.73 19.98L19.65 19.98L19.61 20.13L19.61 20.13C19.59 20.21 19.58 20.29 19.58 20.36C19.58 20.76 19.79 21.13 20.14 21.33C20.48 21.52 20.9 21.52 21.25 21.33C21.59 21.13 21.8 20.76 21.8 20.36C21.8 20.29 21.79 20.21 21.77 20.13L21.73 19.98Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M14.47 19.98L12.39 19.98L12.35 20.13L12.35 20.13C12.33 20.21 12.32 20.29 12.32 20.36C12.32 20.76 12.53 21.13 12.88 21.33C13.22 21.52 13.64 21.52 13.99 21.33C14.33 21.13 14.54 20.76 14.54 20.36C14.54 20.29 14.53 20.21 14.51 20.13L14.47 19.98Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M22.37 17.03C21.88 16.93 21.43 16.69 21.08 16.34C20.73 15.99 20.49 15.55 20.4 15.06L20.37 14.9L18.14 14.9L18.14 19.29L22.53 19.29L22.53 17.06L22.37 17.03Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M11.6 12.72L17.44 12.72L17.44 19.29L11.6 19.29L11.6 12.72Z"
            fill={color}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </g>
      </svg>{" "}
      Logistics
    </a>
  </Link>
);
export default LogisticsButton;
