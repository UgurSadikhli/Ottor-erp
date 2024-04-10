import Image from "next/image";
import "./dashboardP.css";
import Table from "../components/Table/table";
import MainLayout from '../layouts/main-layout'

export default function dashboard() {
  return (
    <MainLayout>
      {/* <Table /> */}
      <h1>dashboard</h1>
      <div className="main_dashboard_div">
        <div className="main_dashboard_top"></div>
        <div className="main_dashboard_beneath">
        <Table />
        <Table />
        <Table />
        <Table />
        </div>
      </div>
    </MainLayout>
  );
}
