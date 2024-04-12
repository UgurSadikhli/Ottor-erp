import Link from "next/link";


const CircularsButton = () => (
    <Link
        href="/circulars"
        passHref={true}
        legacyBehavior={true}
    >
        <a className="nav-link">
            <svg width="21.000000" height="21.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip5_1263">
                        <rect id="Circulars" width="24.000000" height="24.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                </defs>
                <rect id="Circulars" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0"/>
                <g clip-path="url(#clip5_1263)">
                    <path id="Vector"
                          d="M15.57 16.68L19.79 16.68L15.57 20.91L15.57 16.68ZM14.51 16.15L14.51 20.91L6.05 20.91C5.47 20.91 5 20.44 5 19.85L5 5.05C5 4.47 5.47 4 6.05 4L18.74 4C19.32 4 19.79 4.47 19.79 5.05L19.79 15.62L15.04 15.62C14.75 15.62 14.51 15.86 14.51 16.15ZM7.11 7.7C7.11 7.99 7.35 8.22 7.64 8.22L17.15 8.22C17.44 8.22 17.68 7.99 17.68 7.7C17.68 7.4 17.44 7.17 17.15 7.17L7.64 7.17C7.35 7.17 7.11 7.4 7.11 7.7ZM7.11 10.87C7.11 11.16 7.35 11.4 7.64 11.4L17.15 11.4C17.44 11.4 17.68 11.16 17.68 10.87C17.68 10.57 17.44 10.34 17.15 10.34L7.64 10.34C7.35 10.34 7.11 10.57 7.11 10.87ZM17.15 14.57C17.44 14.57 17.68 14.33 17.68 14.04C17.68 13.75 17.44 13.51 17.15 13.51L7.64 13.51C7.35 13.51 7.11 13.75 7.11 14.04C7.11 14.33 7.35 14.57 7.64 14.57L17.15 14.57Z"
                          fill="#272525" fill-opacity="1.000000" fill-rule="nonzero"/>
                </g>
            </svg>
            {" "}
            Circulars
        </a>
    </Link>
);
export default CircularsButton;
