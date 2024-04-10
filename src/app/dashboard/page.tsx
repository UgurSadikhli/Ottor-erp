import Image from "next/image";
import "./dashboardP.css";
import Table from "../components/Table/table";
import Card from "../components/Card/card";

export default function dashboard() {
  return (
    <>
      {/* <Table /> */}
      <h1>dashboard</h1>
      <div className="main_dashboard_div">
        <div className="main_dashboard_top">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="main_dashboard_beneath">
        <Table />
        <Table />
        <Table />
        <Table />
        </div>
      </div>
    </>
  );
}
