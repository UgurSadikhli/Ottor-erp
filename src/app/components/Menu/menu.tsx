import Image from "next/image";
import Link from "next/link";
import "./menu.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import otorerplogo from "../../../../public/assets/otor-erp-logo.png";
import DashBaardButton from "../Buttons/dashboardBTN"
import StaffButton from "../Buttons/staffBTN"
import PaymentVoucherButton from "../Buttons/paymentVoucherBTN"
import PayrollButton from "../Buttons/payrollBTN"
import MemoButton from "../Buttons/memoBTN"
import MaintenanceButton from "../Buttons/maintenanceBTN"
import LogisticsButton from "../Buttons/logisticsBTN"
import OfficeBudgetButton from "../Buttons/officeBudgetBTN"
import StocksAndIventionsButton from "../Buttons/StocksAndInventoryBTN"
import NotificationsButton from "../Buttons/notificationsBTN"
import CapacityBuildingButton from "../Buttons/capacityBuildingBTN"
import ProcurementsButton from "../Buttons/procurementsBTN"
import CircularsButton from "@/app/components/Buttons/circularsBTN";



export default function Menu() {
  return (
    <>
      <div className="main_Menu">
        <Image
          src={otorerplogo}
          alt="Description of your image"
          width={85}
          height={85}
          className="image"
        />
          <nav>
              <div className="Link">
                  <DashBaardButton/>
              </div>
              <div className="Link">
                  <StaffButton/>
              </div>
              <div className="Link">
                  <PaymentVoucherButton/>
              </div>
              <div className="Link">
                  <PayrollButton/>
              </div>
              <div className="Link">
                  <MemoButton/>
              </div>
              <div className="Link">
                  <CircularsButton/>
              </div>
              <div className="Link">
                  <MaintenanceButton/>
              </div>
              <div className="Link">
                  <LogisticsButton/>
              </div>
              <div className="Link">
                  <OfficeBudgetButton/>
              </div>
              <div className="Link">
                  <StocksAndIventionsButton/>
              </div>
              <div className="Link">
                  <NotificationsButton/>
              </div>
              <div className="Link">
                  <CapacityBuildingButton/>
              </div>
              <div className="Link">
                  <ProcurementsButton/>
              </div>
          </nav>
      </div>
    </>
  );
}
