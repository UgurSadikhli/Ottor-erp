"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./menu.css";
import otorerplogo from "../../../../public/assets/otor-erp-logo.png";
import DashBaardButton from "../Buttons/dashboardBTN";
import StaffButton from "../Buttons/staffBTN";
import PaymentVoucherButton from "../Buttons/paymentVoucherBTN";
import PayrollButton from "../Buttons/payrollBTN";
import MemoButton from "../Buttons/memoBTN";
import MaintenanceButton from "../Buttons/maintenanceBTN";
import LogisticsButton from "../Buttons/logisticsBTN";
import OfficeBudgetButton from "../Buttons/officeBudgetBTN";
import StocksAndIventionsButton from "../Buttons/StocksAndInventoryBTN";
import NotificationsButton from "../Buttons/notificationsBTN";
import CapacityBuildingButton from "../Buttons/capacityBuildingBTN";
import ProcurementsButton from "../Buttons/procurementsBTN";
import CircularsButton from "@/app/components/Buttons/circularsBTN";

const menuItems = [
  { component: DashBaardButton, name: "DashBoard" },
  { component: StaffButton, name: "Staff" },
  { component: PaymentVoucherButton, name: "PaymentVoucher" },
  { component: PayrollButton, name: "Payroll" },
  { component: MemoButton, name: "Memo" },
  { component: CircularsButton, name: "Circulars" },
  { component: MaintenanceButton, name: "Maintenance" },
  { component: LogisticsButton, name: "Logistics" },
  { component: OfficeBudgetButton, name: "OfficeBudget" },
  { component: StocksAndIventionsButton, name: "StocksAndIventions" },
  { component: NotificationsButton, name: "Notifications" },
  { component: CapacityBuildingButton, name: "CapacityBuilding" },
  { component: ProcurementsButton, name: "Procurements" },
];

const Menu: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(
    localStorage.getItem("activeButton") || null
  );

  const handleButtonClick = (buttonName: string) => {
    localStorage.removeItem("activeButton");
    setActiveButton(buttonName);
    localStorage.setItem("activeButton", buttonName);
  };

  //   useEffect(() => {
  //     return () => {
  //       localStorage.removeItem("activeButton");
  //     };
  //   }, []);

  return (
    <div className="main_Menu">
      <Image
        src={otorerplogo}
        alt="Description of your image"
        width={85}
        height={85}
        className="image"
      />
      <nav>
        {menuItems.map(({ component: ButtonComponent, name }) => (
          <div
            key={name}
            className={`MainactiveIndicator ${
              activeButton === name ? "active" : ""
            }`}
          >
            {activeButton === name && <div className="activeIndicator"></div>}
            <div className={`Link ${activeButton === name ? "active" : ""}`}>
              <ButtonComponent
                isActive={activeButton === name}
                onClick={() => handleButtonClick(name)}
                color={activeButton === name ? "#14add6" : "black"}
              />
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
