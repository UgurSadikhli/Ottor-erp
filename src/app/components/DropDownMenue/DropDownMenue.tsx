"use client";
import ArrowDownFilledicon from "../Icons/ArrowDownFilledicon/ArrowDownFilledicon";
import ProfileIcon from "../Icons/ProfileIcon/ProfileIcon";
import SettingsIcon from "../Icons/Settingsicon/SettingsIcon";
import LogoutIcon from "../Icons/LogoutIcon/LogoutIcon";
import "./DropDownMenue.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import ArrowUpFilledicon from "../Icons/ArrowUpFilledicon/ArrowUpFilledicon";
import { cookies } from "next/headers";
import { RefObject } from 'react';

export default function DropDownMenu() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [formData, setFormData] = useState({
    token: " ",
  });

  const handleLogOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/logout-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Logout successful");
        router.push("auth/sign-in");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error Logouting user:", error);
    }

    router.push("auth/sign-in");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    console.log("Logout clicked");
  };


  return (
    <div className="dropDownMenuMain" ref={dropdownRef}>
      <button className="dropDownMenuMainButton" onClick={handleToggleMenu}>
        {isMenuOpen ? (
          <ArrowUpFilledicon color="black" />
        ) : (
          <ArrowDownFilledicon color="black" />
        )}
      </button>
      {isMenuOpen && (
        <div className="dropDownMenuBody">
          <button className="dropDownMenuButton" >
            <ProfileIcon color="black" />
            Profile
          </button>
          <button className="dropDownMenuButton">
            <SettingsIcon color="black" />
            Settings
          </button>
          <button className="dropDownMenuButton" onClick={handleLogOut}>
            <LogoutIcon color="black" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
