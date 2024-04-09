import Link from "next/link";


const ProcurementsButton = () => (
    <Link href="/pages/procurements" passHref={true} legacyBehavior={true}>
    <a className="nav-link">
      <svg
        width="23.000000"
        height="23.000000"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="clip5_1313">
          <rect
            id="Procurement"
            width="23.000000"
            height="23.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
        <rect
          id="Procurement"
          width="23.000000"
          height="23.000000"
          fill="#FFFFFF"
          fill-opacity="0"
        />
        <g clip-path="url(#clip5_1313)">
          <path
            id="Vector"
            d="M15.14 10.75L14.5 6.18C14.43 5.62 13.96 5.21 13.4 5.21L12.73 5.21C12.68 3.42 11.22 2 9.43 2C7.64 2 6.17 3.42 6.13 5.21L5.44 5.21C4.88 5.21 4.41 5.62 4.34 6.18L3 15.6C2.92 16.27 3.44 16.87 4.1 16.87L9.45 16.87C9.64 13.72 12.06 11.16 15.14 10.75L15.14 10.75ZM9.41 3.35C10.46 3.35 11.3 4.19 11.37 5.23L7.47 5.23C7.51 4.19 8.37 3.35 9.41 3.35L9.41 3.35ZM9.41 10.86C7.73 10.86 6.37 9.5 6.37 7.82C6.37 7.45 6.67 7.15 7.04 7.15C7.4 7.15 7.7 7.45 7.7 7.82C7.7 8.76 8.46 9.52 9.41 9.52C10.33 9.52 11.11 8.76 11.11 7.82C11.11 7.45 11.41 7.15 11.78 7.15C12.14 7.15 12.45 7.45 12.45 7.82C12.45 9.52 11.09 10.86 9.41 10.86L9.41 10.86Z"
            fill="#272525"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M16.03 12.02C13.14 12.02 10.79 14.37 10.79 17.26C10.79 20.15 13.14 22.5 16.03 22.5C18.91 22.5 21.26 20.15 21.26 17.26C21.27 14.37 18.91 12.02 16.03 12.02ZM18.38 16.48L16.03 18.96C15.9 19.09 15.72 19.18 15.55 19.18C15.38 19.18 15.18 19.11 15.08 18.96L13.68 17.47C13.4 17.22 13.42 16.78 13.68 16.55C13.93 16.29 14.37 16.31 14.62 16.57L15.55 17.54L17.43 15.56C17.69 15.3 18.1 15.28 18.38 15.53C18.63 15.79 18.63 16.2 18.38 16.48L18.38 16.48Z"
            fill="#272525"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </g>
      </svg>
      Procurements
    </a>
  </Link>
);
export default ProcurementsButton;
