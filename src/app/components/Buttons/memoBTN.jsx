import Link from "next/link";


const MemoButton = ({ isActive, onClick,color }) => (
    <Link href="/memo" passHref={true} legacyBehavior={true}>
    <a className={`nav-link ${isActive ? "active" : ""}`} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 27 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="clip5_1256">
          <rect
            id="Memo"
            width="24.000000"
            height="24.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
        <rect
          id="Memo"
          width="24.000000"
          height="24.000000"
          fill="#FFFFFF"
          fill-opacity="0"
        />
        <g clip-path="url(#clip5_1256)">
          <path
            id="Vector"
            d="M13.89 10.59C13.89 10.43 13.76 10.29 13.59 10.29C13.43 10.29 13.29 10.43 13.29 10.59L13.29 10.89L13.89 10.89L13.89 10.59Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M18.39 11.5L14.5 11.5L14.5 13C14.5 13.32 14.32 13.61 14.04 13.77C13.77 13.94 13.42 13.94 13.14 13.77C12.87 13.61 12.69 13.32 12.69 13L12.69 12.4C12.69 12.23 12.83 12.09 13 12.09C13.16 12.09 13.29 12.23 13.29 12.4L13.29 13C13.29 13.16 13.43 13.29 13.59 13.29C13.76 13.29 13.89 13.16 13.89 13L13.89 11.5L11.79 11.5L11.79 20.2L20.19 20.2L20.19 11.5L18.39 11.5ZM12.39 16.9C12.39 16.73 12.53 16.59 12.69 16.59L17.19 16.59C17.36 16.59 17.5 16.73 17.5 16.9C17.5 17.06 17.36 17.2 17.19 17.2L12.69 17.2C12.53 17.2 12.39 17.06 12.39 16.9ZM15.69 19L12.69 19C12.53 19 12.39 18.86 12.39 18.7C12.39 18.53 12.53 18.4 12.69 18.4L15.69 18.4C15.86 18.4 16 18.53 16 18.7C16 18.86 15.86 19 15.69 19ZM19.29 17.2L18.39 17.2C18.23 17.2 18.09 17.06 18.09 16.9C18.09 16.73 18.23 16.59 18.39 16.59L19.29 16.59C19.46 16.59 19.59 16.73 19.59 16.9C19.59 17.06 19.46 17.2 19.29 17.2ZM19.29 15.4L12.69 15.4C12.53 15.4 12.39 15.26 12.39 15.09C12.39 14.93 12.53 14.79 12.69 14.79L19.29 14.79C19.46 14.79 19.59 14.93 19.59 15.09C19.59 15.26 19.46 15.4 19.29 15.4ZM19.29 13.59L15.39 13.59C15.23 13.59 15.09 13.46 15.09 13.29C15.09 13.13 15.23 13 15.39 13L19.29 13C19.46 13 19.59 13.13 19.59 13.29C19.59 13.46 19.46 13.59 19.29 13.59Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M17.7 4.59L15.66 4.59L15.66 4.29C15.66 4.13 15.53 4 15.37 4C15.21 4 15.08 4.13 15.08 4.29L15.08 4.59L12.75 4.59L12.75 4.29C12.75 4.13 12.61 4 12.45 4C12.29 4 12.16 4.13 12.16 4.29L12.16 4.59L9.83 4.59L9.83 4.29C9.83 4.13 9.7 4 9.54 4C9.38 4 9.25 4.13 9.25 4.29L9.25 4.59L6.91 4.59L6.91 4.29C6.91 4.13 6.78 4 6.62 4C6.46 4 6.33 4.13 6.33 4.29L6.33 4.59L4.29 4.59C4.13 4.59 4 4.72 4 4.89L4 17.7C4 17.78 4.03 17.85 4.08 17.91C4.14 17.96 4.21 18 4.29 18L11 18L11 11.14C11 10.98 11.13 10.85 11.29 10.85L12.45 10.85L12.45 10.55C12.45 10.23 12.62 9.93 12.89 9.77C13.16 9.62 13.5 9.62 13.77 9.77C14.04 9.93 14.2 10.23 14.2 10.55L14.2 10.85L18 10.85L18 4.89C18 4.81 17.96 4.73 17.91 4.68C17.85 4.62 17.78 4.59 17.7 4.59ZM7.2 14.12L6.04 14.12C5.88 14.12 5.75 13.99 5.75 13.83C5.75 13.66 5.88 13.53 6.04 13.53L7.2 13.53C7.36 13.53 7.5 13.66 7.5 13.83C7.5 13.99 7.36 14.12 7.2 14.12ZM7.2 12.34L6.04 12.34C5.88 12.34 5.75 12.2 5.75 12.04C5.75 11.87 5.88 11.74 6.04 11.74L7.2 11.74C7.36 11.74 7.5 11.87 7.5 12.04C7.5 12.2 7.36 12.34 7.2 12.34ZM7.2 10.55L6.04 10.55C5.88 10.55 5.75 10.41 5.75 10.25C5.75 10.09 5.88 9.95 6.04 9.95L7.2 9.95C7.36 9.95 7.5 10.09 7.5 10.25C7.5 10.41 7.36 10.55 7.2 10.55ZM7.2 8.76L6.04 8.76C5.88 8.76 5.75 8.63 5.75 8.46C5.75 8.3 5.88 8.16 6.04 8.16L7.2 8.16C7.36 8.16 7.5 8.3 7.5 8.46C7.5 8.63 7.36 8.76 7.2 8.76ZM10.12 14.12L8.95 14.12C8.79 14.12 8.66 13.99 8.66 13.83C8.66 13.66 8.79 13.53 8.95 13.53L10.12 13.53C10.28 13.53 10.41 13.66 10.41 13.83C10.41 13.99 10.28 14.12 10.12 14.12ZM10.12 12.34L8.95 12.34C8.79 12.34 8.66 12.2 8.66 12.04C8.66 11.87 8.79 11.74 8.95 11.74L10.12 11.74C10.28 11.74 10.41 11.87 10.41 12.04C10.41 12.2 10.28 12.34 10.12 12.34ZM10.12 10.55L8.95 10.55C8.79 10.55 8.66 10.41 8.66 10.25C8.66 10.09 8.79 9.95 8.95 9.95L10.12 9.95C10.28 9.95 10.41 10.09 10.41 10.25C10.41 10.41 10.28 10.55 10.12 10.55ZM10.12 8.76L8.95 8.76C8.79 8.76 8.66 8.63 8.66 8.46C8.66 8.3 8.79 8.16 8.95 8.16L10.12 8.16C10.28 8.16 10.41 8.3 10.41 8.46C10.41 8.63 10.28 8.76 10.12 8.76ZM13.04 8.76L11.87 8.76C11.71 8.76 11.58 8.63 11.58 8.46C11.58 8.3 11.71 8.16 11.87 8.16L13.04 8.16C13.2 8.16 13.33 8.3 13.33 8.46C13.33 8.63 13.2 8.76 13.04 8.76ZM15.95 8.76L14.79 8.76C14.63 8.76 14.5 8.63 14.5 8.46C14.5 8.3 14.63 8.16 14.79 8.16L15.95 8.16C16.11 8.16 16.25 8.3 16.25 8.46C16.25 8.63 16.11 8.76 15.95 8.76ZM17.41 6.38L4.58 6.38L4.58 5.19L6.33 5.19L6.33 5.48C6.33 5.65 6.46 5.78 6.62 5.78C6.78 5.78 6.91 5.65 6.91 5.48L6.91 5.19L9.25 5.19L9.25 5.48C9.25 5.65 9.38 5.78 9.54 5.78C9.7 5.78 9.83 5.65 9.83 5.48L9.83 5.19L12.16 5.19L12.16 5.48C12.16 5.65 12.29 5.78 12.45 5.78C12.61 5.78 12.75 5.65 12.75 5.48L12.75 5.19L15.08 5.19L15.08 5.48C15.08 5.65 15.21 5.78 15.37 5.78C15.53 5.78 15.66 5.65 15.66 5.48L15.66 5.19L17.41 5.19L17.41 6.38Z"
            fill={color}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </g>
      </svg>
      Memo
    </a>
  </Link>

);
export default MemoButton;
