"use client";
import ArrowDownFilledicon from "../Icons/ArrowDownFilledicon/ArrowDownFilledicon";
import ProfileIcon from "../Icons/ProfileIcon/ProfileIcon";
import SettingsIcon from "../Icons/Settingsicon/SettingsIcon";
import LogoutIcon from "../Icons/LogoutIcon/LogoutIcon";
import "./DropDownMenue.css";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ArrowUpFilledicon from "../Icons/ArrowUpFilledicon/ArrowUpFilledicon";

export default function DropDownMenu() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log("Logout button clicked");
    // Perform logout logic here
    // For example:
    // router.push("/auth/sign-in");
  };

  return (
    <div className="dropDownMenuMain">
      <button className="dropDownMenuMainButton" onClick={handleToggleMenu}>
        {isMenuOpen ? (
          <ArrowUpFilledicon color="black" />
        ) : (
          <ArrowDownFilledicon color="black" />
        )}
      </button>
      {isMenuOpen && (
        <div className="dropDownMenuBody">
          <button className="dropDownMenuButton">
            <ProfileIcon color="black" />
            Profile
          </button>

          <button className="dropDownMenuButton">
            <SettingsIcon color="black" />
            Settings
          </button>

          <button className="dropDownMenuButton" onClick={handleLogout}>
            <LogoutIcon color="black" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
