"use client";
import ArrowDownFilledicon from "../Icons/ArrowDownFilledicon/ArrowDownFilledicon";
import ProfileIcon from "../Icons/ProfileIcon/ProfileIcon";
import SettingsIcon from "../Icons/Settingsicon/SettingsIcon";
import LogoutIcon from "../Icons/LogoutIcon/LogoutIcon";
import "./DropDownMenue.css";
import React from "react";
import {useRouter} from "next/navigation";

export default function DropDownMenue() {

    const router=useRouter();
    const handleLogOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();


        try {
            const response = await fetch('http://localhost:3000/api/auth/logout-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Logout successful');
                router.push("auth/sign-in");
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error Logouting user:', error);
        }


        console.log("Logout clicked");
    };




    return (
    <div className="dropDownMenuMain">
      <button className="dropDownMenuMainButton">
        <ArrowDownFilledicon color={"red"} />
      </button>
        <div className="dropDownMenuBody">
            <button className="dropDownMenuButton">
                <ProfileIcon color="black"/> Profile{" "}
            </button>

            <button className="dropDownMenuButton">
                <SettingsIcon color="black"/>
                Settings
            </button>

            <button type="button" className="dropDownMenuButton" onClick={handleLogOut}>
                <LogoutIcon color="black"/>
                Logout
            </button>

        </div>
    </div>
    );
}
