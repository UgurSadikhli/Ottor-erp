import ArrowDownFilledicon from "../Icons/ArrowDownFilledicon/ArrowDownFilledicon";
import ProfileIcon from "../Icons/ProfileIcon/ProfileIcon";
import SettingsIcon from "../Icons/Settingsicon/SettingsIcon";
import LogoutIcon from "../Icons/LogoutIcon/LogoutIcon";
import "./DropDownMenue.css";

export default function DropDownMenue() {
  return (
    <div className="dropDownMenuMain">
      <button className="dropDownMenuMainButton">
        <ArrowDownFilledicon color={"red"} />
      </button>
      <div className="dropDownMenuBody">
        <button className="dropDownMenuButton">
          <ProfileIcon color="black" /> Profile{" "}
        </button>

        <button className="dropDownMenuButton">
          <SettingsIcon color="black" />
          Settings
        </button>

        <button className="dropDownMenuButton">
          <LogoutIcon color="black" />
          Logout
        </button>
      </div>
    </div>
  );
}
