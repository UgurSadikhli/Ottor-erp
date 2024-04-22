import Image from "next/image";
import "./header.css";
import image from "../../../../public/assets/auth/img2.jpeg";
import ArrowDownFilledicon from "../Icons/ArrowDownFilledicon/ArrowDownFilledicon";
import ProfileIcon from "../Icons/ProfileIcon/ProfileIcon";
import SettingsIcon from "../Icons/Settingsicon/SettingsIcon";
import LogoutIcon from "../Icons/LogoutIcon/LogoutIcon";
import DropDownMenue from "../DropDownMenue/DropDownMenue";
import BagIcon from "../Icons/BagIcon/BagIcon";
import MoneySackIcon from "../Icons/MoneySackIcon/MoneySackIcon";
import { ReactElement } from "react";


interface HeaderProps {
  label?: string;
  icon?: ReactElement;
  title?: string;
}

export default function Header({label,icon,title}:HeaderProps) {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_left_ico">
          {icon}
        <span className="header_h1">{title}</span>
        </div>
        <span className="header_p">{label}</span>
      </div>

      <div className="header_right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          fill="currentColor"
          className="bi bi-bell-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
        </svg>
        <Image
          className="header_image"
          src={image}
          alt="Your Image"
          width={40}
          height={40}
        />
        <div className="header_perInfo">
          <span className="userName_header">Vugar Aliyev</span>
          <span className="userPosition_header">HR office</span>
        </div>
        <DropDownMenue />
      </div>
    </div>
  );
}
