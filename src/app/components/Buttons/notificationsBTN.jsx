import Link from "next/link";

const NotificationsButton = ({ isActive, onClick, color }) => (
  <Link href="/notifications" passHref={true} legacyBehavior={true}>
    <a className={`nav-link ${isActive ? "active" : ""}`} onClick={onClick}>
      <svg
        width="16.000000"
        height="19.000000"
        viewBox="0 0 17 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M7.71 18.16C8.2 18.16 8.66 17.97 9 17.63C9.34 17.29 9.53 16.82 9.53 16.34L5.9 16.34C5.9 16.82 6.09 17.29 6.43 17.63C6.77 17.97 7.23 18.16 7.71 18.16L7.71 18.16ZM14.26 13.35L14.26 13.35C13.85 12.94 13.62 12.39 13.62 11.81L13.62 7.71C13.62 6.48 13.23 5.27 12.51 4.27C11.79 3.27 10.77 2.52 9.6 2.12C9.45 2.08 9.32 1.98 9.22 1.85C9.13 1.72 9.08 1.57 9.08 1.41C9.08 1.05 8.95 0.7 8.7 0.44C8.45 0.17 8.12 0.02 7.75 0C7.39 -0.02 7.03 0.12 6.77 0.38C6.5 0.64 6.35 0.99 6.35 1.36L6.35 1.41C6.35 1.57 6.3 1.72 6.21 1.85C6.11 1.98 5.98 2.08 5.83 2.12C4.66 2.52 3.64 3.27 2.92 4.27C2.2 5.27 1.81 6.48 1.81 7.71L1.81 11.8C1.81 12.38 1.58 12.94 1.17 13.34L0.64 13.88C0.23 14.29 0 14.84 0 15.42L15.43 15.42C15.43 14.84 15.2 14.29 14.79 13.88L14.26 13.35Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </svg>{" "}
      Notifications
    </a>
  </Link>
);
export default NotificationsButton;
