"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";
import MainLayout from "../layouts/main-layout";
import styles from "./payroll.module.css";
import Card from "../components/Card/card";
import Payrolicon from "../components/Icons/Payrollicon/Payrolicon";
import ArrowUpIcon from "../components/Icons/ArrowUpIcon/ArrowUpIcon";
import ArrowDownIcon from "../components/Icons/ArrowDownIcon/ArrowDownIcon";
import CustomTable from "../components/Table/CustomTable/CustomTable";
import ColumnChart from "../components/ColumnChart/ColumnChart";

export default function Payroll() {
  const [currentData, setCurrentData] = useState<{
    headers: any[];
    innerData: any[];
    blockTitle: string;
    shownButton: boolean;
    btnLabel: string;
    btnLink: string;
    viewTable: string;
  }>({
    blockTitle: "Salary Defination",
    shownButton: true,
    headers: [
      { id: 1, headerName: "S/N" },
      { id: 2, headerName: "Title" },
      { id: 3, headerName: "Level" },
      { id: 4, headerName: "Basic Salary" },
      { id: 5, headerName: "Allowance" },
      { id: 6, headerName: "Gross Salary" },
      { id: 7, headerName: "Deductions" },
      { id: 8, headerName: "Net Salary" },
      { id: 9, headerName: "Action" },
    ],
    innerData: [
      {
        id: 1,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 2,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 3,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 4,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 5,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 6,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 7,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 8,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 9,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
      {
        id: 10,
        Title: "Managing Director",
        Level: "MD/CEO",
        Salary: "₦445,331.00",
        Allowance: "₦600,000.00",
        Gross: "₦1,145,331.00",
        Deductions: "₦224,000.00",
        Net: "₦224,000.00",
        Action: "Edit Delete",
      },
    ],
    btnLabel: "Create Salary Definition",
    btnLink: "payroll/create-salary-definition",
    viewTable: "",
  });
  const [activeButton, setActiveButton] = useState("Salary Breakdown");

  const handleButtonClick = (label: string) => {
    let newHeaders = [...currentData.headers];
    let newInnerData = [...currentData.innerData];
    let newBlockTitle = currentData.blockTitle;
    let newShownButton = currentData.shownButton;
    let newBtnLabel = currentData.btnLabel;
    let newBtnLink = currentData.btnLink;
    let newviewTable = currentData.viewTable;

    if (label === "Salary Breakdown") {
      setActiveButton("Salary Breakdown");
      newBlockTitle = "Salary Defination";
      newShownButton = true;
      newHeaders = [
        { id: 1, headerName: "S/N" },
        { id: 2, headerName: "Title" },
        { id: 3, headerName: "Level" },
        { id: 4, headerName: "Basic Salary" },
        { id: 5, headerName: "Allowance" },
        { id: 6, headerName: "Gross Salary" },
        { id: 7, headerName: "Deductions" },
        { id: 8, headerName: "Net Salary" },
        { id: 9, headerName: "Action" },
      ];
      newInnerData = [
        {
          id: 1,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 2,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 3,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 4,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 5,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 6,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 7,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 8,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 9,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
        {
          id: 10,
          Title: "Managing Director",
          Level: "MD/CEO",
          Salary: "₦445,331.00",
          Allowance: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deductions: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "Edit Delete",
        },
      ];
      newBtnLabel = "Create Salary Definition";
      newBtnLink = "payroll/create-salary-definition";
    } else if (label === "Tax Definitions") {
      setActiveButton("Tax Definitions");
      newBlockTitle = "Tax Definitions";
      newShownButton = true;
      newHeaders = [
        { id: 1, headerName: "S/N" },
        { id: 2, headerName: "Tax Type" },
        { id: 3, headerName: "% value" },
        { id: 4, headerName: "Action" },
      ];
      newInnerData = [
        { id: 1, Type: "NHIS", value: "2%", Action: "Edit Delete" },
        { id: 2, Type: "VAT", value: "2.5%", Action: "Edit Delete" },
        { id: 3, Type: "WHT", value: "5%", Action: "Edit Delete" },
        { id: 4, Type: "NHIS", value: "2%", Action: "Edit Delete" },
        { id: 5, Type: "NHIS", value: "2%", Action: "Edit Delete" },
        { id: 6, Type: "NHIS", value: "2%", Action: "Edit Delete" },
        { id: 7, Type: "NHIS", value: "2%", Action: "Edit Delete" },
      ];
      newBtnLabel = "Create Tax Definition";
      newBtnLink = "payroll/create-tax-definition";
    } else if (label === "Payslips") {
      setActiveButton("Payslips");
      newBlockTitle = "Employee Payslip History";
      newShownButton = true;
      newHeaders = [
        { id: 1, headerName: "S/N" },
        { id: 2, headerName: "Staff Name" },
        { id: 3, headerName: "Title" },
        { id: 4, headerName: "Level" },
        { id: 5, headerName: "Basic Salary" },
        { id: 6, headerName: "Allowances" },
        { id: 7, headerName: "Gross Salary" },
        { id: 8, headerName: "Deduction" },
        { id: 9, headerName: "Net Salary" },
        { id: 10, headerName: "Action" },
      ];
      newInnerData = [
        {
          id: 1,
          Staff: "Abubakar Alghazali",
          Title: "Managing Director",
          Level: "MD/CEO",
          Basic: "₦445,331.00",
          Allowances: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deduction: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "View more",
        },
        {
          id: 2,
          Staff: "Abubakar Alghazali",
          Title: "Managing Director",
          Level: "MD/CEO",
          Basic: "₦445,331.00",
          Allowances: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deduction: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "View more",
        },
        {
          id: 3,
          Staff: "Abubakar Alghazali",
          Title: "Managing Director",
          Level: "MD/CEO",
          Basic: "₦445,331.00",
          Allowances: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deduction: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "View more",
        },
        {
          id: 4,
          Staff: "Abubakar Alghazali",
          Title: "Managing Director",
          Level: "MD/CEO",
          Basic: "₦445,331.00",
          Allowances: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deduction: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "View more",
        },
        {
          id: 5,
          Staff: "Abubakar Alghazali",
          Title: "Managing Director",
          Level: "MD/CEO",
          Basic: "₦445,331.00",
          Allowances: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deduction: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "View more",
        },
        {
          id: 6,
          Staff: "Abubakar Alghazali",
          Title: "Managing Director",
          Level: "MD/CEO",
          Basic: "₦445,331.00",
          Allowances: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deduction: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "View more",
        },
        {
          id: 7,
          Staff: "Abubakar Alghazali",
          Title: "Managing Director",
          Level: "MD/CEO",
          Basic: "₦445,331.00",
          Allowances: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deduction: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "View more",
        },
        {
          id: 8,
          Staff: "Abubakar Alghazali",
          Title: "Managing Director",
          Level: "MD/CEO",
          Basic: "₦445,331.00",
          Allowances: "₦600,000.00",
          Gross: "₦1,145,331.00",
          Deduction: "₦224,000.00",
          Net: "₦224,000.00",
          Action: "View more",
        },
      ];
      newBtnLabel = "Create payslip";
      newviewTable = "payroll/payslip-details";
    } else if (label === "Payroll") {
      setActiveButton("Payroll");
      newBlockTitle = "Employee Payroll History";
      newShownButton = true;
      newHeaders = [
        { id: 1, headerName: "S/N" },
        { id: 2, headerName: "Payment name" },
        { id: 3, headerName: "Designation" },
        { id: 4, headerName: "Date generated" },
        { id: 5, headerName: "Payment month" },
        { id: 6, headerName: "Payment year" },
        { id: 7, headerName: "Status" },
        { id: 8, headerName: "Action" },
      ];
      newInnerData = [
        {
          id: 1,
          PaymentName: "Monthly salary",
          Designation: "Operations Department",
          DateGenerated: "30/01/2023",
          month: "January",
          year: "2023",
          Status: "Pending",
          Action: "View more",
        },
        {
          id: 2,
          PaymentName: "Monthly salary",
          Designation: "Operations Department",
          DateGenerated: "30/01/2023",
          month: "January",
          year: "2023",
          Status: "Approved",
          Action: "View more",
        },
        {
          id: 3,
          PaymentName: "Monthly salary",
          Designation: "Operations Department",
          DateGenerated: "30/01/2023",
          month: "January",
          year: "2023",
          Status: "Pending",
          Action: "View more",
        },
        {
          id: 4,
          PaymentName: "Monthly salary",
          Designation: "Operations Department",
          DateGenerated: "30/01/2023",
          month: "January",
          year: "2023",
          Status: "Rejected",
          Action: "View more",
        },
        {
          id: 5,
          PaymentName: "Monthly salary",
          Designation: "Operations Department",
          DateGenerated: "30/01/2023",
          month: "January",
          year: "2023",
          Status: "Rejected",
          Action: "View more",
        },
        {
          id: 6,
          PaymentName: "Monthly salary",
          Designation: "Operations Department",
          DateGenerated: "30/01/2023",
          month: "January",
          year: "2023",
          Status: "Approved",
          Action: "View more",
        },
        {
          id: 7,
          PaymentName: "Monthly salary",
          Designation: "Operations Department",
          DateGenerated: "30/01/2023",
          month: "January",
          year: "2023",
          Status: "Approved",
          Action: "View more",
        },
        {
          id: 8,
          PaymentName: "Monthly salary",
          Designation: "Operations Department",
          DateGenerated: "30/01/2023",
          month: "January",
          year: "2023",
          Status: "Pending",
          Action: "View more",
        },
      ];
      newBtnLabel = "Generate Payroll";
      newBtnLink = "payroll/generate-payroll";
      newviewTable = "#";
    }

    setCurrentData({
      headers: newHeaders,
      innerData: newInnerData,
      blockTitle: newBlockTitle,
      shownButton: newShownButton,
      btnLabel: newBtnLabel,
      btnLink: newBtnLink,
      viewTable: newviewTable,
    });
  };

  return (
    <MainLayout>
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <div className={styles.headLeft1}>
              <Card
                number={"5,205,350.00"}
                title="Gross salary this month"
                description="2% more than last month"
                icon={<Payrolicon color="#272525" />}
                arrowIcon={<ArrowUpIcon color="#10A242" />}
                backgroundColor="#FFF8DF"
              />
              <Card
                number={"4,550,350.00"}
                title="Net salary this month"
                description="2.1% more than last month"
                icon={<Payrolicon color="#248CD8" />}
                arrowIcon={<ArrowUpIcon color="#10A242" />}
                backgroundColor="#E8F5FF"
              />
            </div>
            <div className={styles.headLeft2}>
              <Card
                number={"550,350.00"}
                title="Total tax this month"
                description="2.1% less than last month"
                icon={<Payrolicon color="#F29425" />}
                arrowIcon={<ArrowDownIcon color="#ED3237" />}
                backgroundColor="#FFF4E8"
              />
              <Card
                number={"150,350.00"}
                title="Total loan this month"
                description="1.5% less than last month"
                icon={<Payrolicon color="#A601FF" />}
                arrowIcon={<ArrowDownIcon color="#ED3237" />}
                backgroundColor="#F9EFFF"
              />
            </div>
          </div>
          <div className={styles.headRight}>
            <ColumnChart />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.centerButtons}>
            <Button
              onClick={() => handleButtonClick("Salary Breakdown")}
              sx={{
                color:
                  activeButton === "Salary Breakdown" ? "#14add6" : "#515151",
              }}
            >
              Salary Breakdown
            </Button>
            <Button
              onClick={() => handleButtonClick("Tax Definitions")}
              sx={{
                color:
                  activeButton === "Tax Definitions" ? "#14add6" : "#515151",
              }}
            >
              Tax Definitions
            </Button>
            <Button
              onClick={() => handleButtonClick("Payslips")}
              sx={{
                color: activeButton === "Payslips" ? "#14add6" : "#515151",
              }}
            >
              Payslips
            </Button>
            <Button
              onClick={() => handleButtonClick("Payroll")}
              sx={{
                color: activeButton === "Payroll" ? "#14add6" : "#515151",
              }}
            >
              Payroll
            </Button>
          </div>
        </div>
        <div className={styles.bottom}>
          <CustomTable
            blockTitle={currentData.blockTitle}
            shownButton={currentData.shownButton}
            headers={currentData.headers}
            innerData={currentData.innerData}
            btnLabel={currentData.btnLabel}
            btnLink={currentData.btnLink}
            viewTable={currentData.viewTable}
          />
        </div>
      </div>
    </MainLayout>
  );
}
