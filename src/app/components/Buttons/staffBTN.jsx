import Link from "next/link";
import React from "react";

const StaffButton = ({ isActive, onClick,color }) => (
  <Link href="/staff" passHref={true} legacyBehavior={true}>
    <a className={`nav-link ${isActive ? "active" : ""}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className={`bi bi-people-fill ${isActive ? "active-icon" : ""}`}
        viewBox="0 0 16 19"
      >
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
      </svg>{" "}
      Staff
    </a>
  </Link>
);

export default StaffButton;
