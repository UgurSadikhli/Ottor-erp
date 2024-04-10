import Link from "next/link";


const MaintenanceButton = () => (
    <Link href="/maintenance" passHref={true} legacyBehavior={true}>
    <a className="nav-link">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="clip5_1270">
          <rect
            id="Maintenance"
            width="24.000000"
            height="24.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>

        <rect
          id="Maintenance"
          width="24.000000"
          height="24.000000"
          fill="#FFFFFF"
          fill-opacity="0"
        />
        <g clip-path="url(#clip5_1270)">
          <path
            id="Vector"
            d="M8.67 6.53C6.94 6.53 5.53 7.94 5.53 9.67C5.53 11.41 6.94 12.82 8.67 12.82C10.41 12.82 11.82 11.41 11.82 9.67C11.82 7.94 10.41 6.53 8.67 6.53ZM8.7 9.31C9.74 9.59 9.87 10.23 9.88 10.49C9.9 10.98 9.55 11.45 9.05 11.63C9.02 11.64 8.99 11.64 8.96 11.65L8.96 12.12L8.27 12.12L8.27 11.64C7.92 11.54 7.58 11.29 7.28 10.83L7.86 10.4C8.25 11.03 8.67 10.97 8.84 10.91C9.03 10.84 9.19 10.67 9.18 10.52C9.18 10.37 9 10.17 8.53 10.04C7.49 9.76 7.36 9.12 7.35 8.87C7.33 8.37 7.68 7.9 8.18 7.72C8.21 7.72 8.24 7.71 8.27 7.7L8.27 7.23L8.96 7.23L8.96 7.71C9.3 7.81 9.66 8.06 9.95 8.53L9.37 8.95C8.98 8.32 8.56 8.38 8.4 8.44C8.2 8.51 8.04 8.68 8.05 8.84C8.05 8.98 8.23 9.18 8.7 9.31L8.7 9.31Z"
            fill="#272525"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M13.36 14.36C13.77 13.96 14.12 13.51 14.4 13.02L15.45 13.3L15.58 13.04C16.01 12.15 16.27 11.2 16.34 10.22L16.35 9.93L15.3 9.64C15.3 8.5 15 7.38 14.43 6.39L15.2 5.62L15.04 5.38C14.77 4.98 14.46 4.6 14.1 4.24C13.75 3.89 13.37 3.58 12.97 3.31L12.73 3.15L11.96 3.92C10.98 3.35 9.85 3.05 8.71 3.05L8.42 2L8.14 2.02C7.16 2.08 6.2 2.33 5.31 2.77L5.05 2.89L5.33 3.94C4.84 4.23 4.39 4.58 3.98 4.99C3.58 5.39 3.23 5.84 2.94 6.33L1.89 6.05L1.77 6.31C1.33 7.2 1.08 8.16 1.02 9.14L1 9.42L2.05 9.71C2.05 10.86 2.35 11.97 2.92 12.96L2.15 13.73L2.31 13.97C2.57 14.37 2.89 14.75 3.24 15.11C3.6 15.46 3.98 15.77 4.38 16.04L4.62 16.2L5.39 15.43C6.37 16 7.5 16.3 8.64 16.3L8.93 17.36L9.22 17.34C10.2 17.27 11.15 17.01 12.04 16.58L12.3 16.45L12.02 15.4C12.51 15.12 12.96 14.77 13.36 14.36L13.36 14.36ZM8.66 14.2C6.15 14.2 4.12 12.16 4.12 9.66C4.12 7.15 6.15 5.12 8.66 5.12C11.16 5.12 13.2 7.15 13.2 9.66C13.2 12.16 11.16 14.2 8.66 14.2Z"
            fill="#272525"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M21.88 18.04C21.88 17.71 21.84 17.39 21.77 17.08L22.35 16.75L22.25 16.48C22.05 15.9 21.74 15.36 21.34 14.9L21.15 14.68L20.57 15.02C20.1 14.58 19.54 14.25 18.93 14.07L18.93 13.4L18.64 13.35C18.06 13.23 17.41 13.23 16.82 13.35L16.54 13.4L16.54 14.07C15.93 14.25 15.36 14.58 14.9 15.02L14.32 14.68L14.13 14.9C13.72 15.36 13.42 15.89 13.22 16.47L13.12 16.75L13.7 17.08C13.63 17.39 13.59 17.71 13.59 18.03C13.59 18.36 13.62 18.68 13.7 18.99L13.12 19.32L13.22 19.59C13.42 20.18 13.72 20.71 14.13 21.17L14.32 21.39L14.9 21.05C15.36 21.49 15.93 21.82 16.54 22L16.54 22.67L16.82 22.72C17.11 22.78 17.42 22.81 17.73 22.81C18.05 22.81 18.35 22.78 18.64 22.72L18.93 22.67L18.93 22C19.54 21.82 20.1 21.5 20.57 21.05L21.15 21.39L21.34 21.17C21.74 20.71 22.05 20.17 22.25 19.6L22.35 19.32L21.77 18.99C21.84 18.68 21.88 18.36 21.88 18.04L21.88 18.04ZM17.73 20.48C16.39 20.48 15.29 19.38 15.29 18.04C15.29 16.69 16.39 15.59 17.73 15.59C19.08 15.59 20.18 16.69 20.18 18.04C20.18 19.38 19.08 20.48 17.73 20.48Z"
            fill="#272525"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M19.48 10.71L19.48 11.05L20.18 11.05L20.18 10.71C20.18 9.74 20.96 8.96 21.92 8.96L22.27 8.96L22.27 8.26L21.92 8.26C20.96 8.26 20.18 7.48 20.18 6.52L20.18 6.17L19.48 6.17L19.48 6.52C19.48 7.48 18.7 8.26 17.73 8.26L17.38 8.26L17.38 8.96L17.73 8.96C18.7 8.96 19.48 9.74 19.48 10.71Z"
            fill="#272525"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </g>
      </svg>{" "}
      Maintenance
    </a>
  </Link>
);
export default MaintenanceButton;
