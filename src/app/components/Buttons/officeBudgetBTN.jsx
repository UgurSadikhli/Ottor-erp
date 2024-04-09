import Link from "next/link";


const OfficeBudgetButton = () => (
    <Link href="/pages/officeBudget" passHref={true} legacyBehavior={true}>
              <a className="nav-link">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <clipPath id="clip5_1284">
                    <rect
                      id="Budget"
                      width="24.000000"
                      height="24.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                  <rect
                    id="Budget"
                    width="24.000000"
                    height="24.000000"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip5_1284)">
                    <path
                      id="Vector"
                      d="M15.32 7.79C14.21 7.96 13.06 8.05 11.91 8.05C10.75 8.05 9.6 7.96 8.49 7.79C6.4 9.23 5 11.93 5 15.06C5 19.69 8.09 21.24 11.91 21.24C15.73 21.24 18.82 19.69 18.82 15.06C18.82 11.93 17.42 9.23 15.32 7.79ZM12.58 17.67L12.58 18.38C12.58 18.54 12.46 18.65 12.31 18.65L11.52 18.65C11.37 18.65 11.25 18.54 11.25 18.38L11.25 17.69C10.45 17.6 9.8 16.94 9.72 16.12C9.72 16.04 9.74 15.96 9.79 15.91C9.85 15.85 9.93 15.81 10.01 15.81L10.81 15.81C10.95 15.81 11.04 15.91 11.08 16.02C11.12 16.21 11.29 16.37 11.5 16.37L12.2 16.37C12.56 16.37 12.87 16.1 12.91 15.77C12.92 15.58 12.87 15.39 12.73 15.25C12.6 15.12 12.43 15.04 12.23 15.04L11.71 15.04C10.64 15.04 9.72 14.26 9.62 13.24C9.53 12.18 10.24 11.26 11.25 11.07L11.25 10.38C11.25 10.22 11.37 10.11 11.52 10.11L12.31 10.11C12.46 10.11 12.58 10.22 12.58 10.38L12.58 11.07C13.4 11.16 14.04 11.82 14.12 12.64C14.12 12.72 14.1 12.8 14.04 12.85C13.98 12.91 13.9 12.95 13.83 12.95L13.02 12.95C12.89 12.95 12.77 12.85 12.75 12.74C12.71 12.55 12.54 12.39 12.33 12.39L11.64 12.39C11.27 12.39 10.97 12.66 10.93 12.99C10.91 13.18 10.97 13.37 11.1 13.51C11.24 13.64 11.41 13.74 11.6 13.74L12.2 13.74C12.75 13.74 13.31 13.99 13.69 14.39C14.08 14.81 14.27 15.37 14.21 15.95C14.13 16.77 13.46 17.48 12.58 17.67L12.58 17.67Z"
                      fill="#272525"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M8.99 6.46C9.89 6.6 10.87 6.67 11.91 6.67C12.94 6.67 13.92 6.6 14.83 6.46L15.55 3.89C15.71 3.35 15.21 2.87 14.67 3.02C12.87 3.6 10.95 3.6 9.14 3.04C8.6 2.87 8.1 3.37 8.26 3.91L8.99 6.46Z"
                      fill="#272525"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
                Office Budget
              </a>
            </Link>
);
export default OfficeBudgetButton;
