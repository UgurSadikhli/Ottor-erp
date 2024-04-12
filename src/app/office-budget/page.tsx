"use client";
import React from "react";
import styles from "./OfficeBudget.module.css";
import MainLayout from "@/app/layouts/main-layout";
import Card from "@/app/components/Card/card";
import StaffIcon from "@/app/components/Icons/StaffIcon/StaffIcon";
import ArrowUpIcon from "@/app/components/Icons/ArrowUpIcon/ArrowUpIcon";
import DocumentIcon from "@/app/components/Icons/DocumentIcon/DocumentIcon";
import MoneySackIcon from "@/app/components/Icons/MoneySackIcon/MoneySackIcon";
import ArrowDownIcon from "@/app/components/Icons/ArrowDownIcon/ArrowDownIcon";
import RocketIcon from "@/app/components/Icons/RocketIcon/RocketIcon";
import PeopleIcon from "@/app/components/Icons/PeopleIcon/PeopleIcon";
import Link from "next/link";
import Table from "@/app/components/Table/table";
import CustomTable from "@/app/components/Table/CustomTable/CustomTable";

const OfficeBudget = () => {
  const headers = [
    { id: 1, headerName: "S/N" },
    { id: 2, headerName: "Budget No." },
    { id: 3, headerName: "Budget Description" },
    { id: 4, headerName: "Budgeted Amount (₦)" },
    { id: 5, headerName: "Actual Amount (₦)" },
    { id: 6, headerName: "Variance (₦)" },
    { id: 7, headerName: "Date" },
];

const innerData = [
    { id: 1, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
    { id: 2, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
    { id: 3, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
    { id: 4, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
    { id: 5, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
    { id: 6, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
    { id: 7, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
    { id: 8, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
    { id: 9, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
    { id: 10, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
    { id: 11, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},

];
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.statisticsContainer}>
          <Card
            number={"₦23,000,000"}
            title="Total annual budget"
            description="5% more than last year"
            icon={<MoneySackIcon color={"#248CD8"} />}
            arrowIcon={<ArrowUpIcon color="#10A242" />}
            backgroundColor="#E8F5FF"
          />
          <Card
            number={"₦10,000,000"}
            title="Amount used, YTD"
            description=""
            icon={<MoneySackIcon color={"#F29425"} />}
            backgroundColor="#FFF4E8"
          />
          <Card
            number={"₦13,000,000"}
            title="Budget % used"
            description=""
            icon={<MoneySackIcon color={"#A601FF"} />}
            backgroundColor="#F9EFFF"
          />
          <Card
            number={"48%"}
            title="Total departments"
            description=""
            icon={<MoneySackIcon color={"#10A242"} />}
            backgroundColor="#ECFFF2"
          />
        </div>
        <div className={styles.createBudgetContainer}>
          <div>
            <span className={styles.title}>Create a Budget</span>
          </div>
          <div>
            <Link href="/office-budget/create-budget">
              <button className={styles.buttons}>Create Budget</button>
            </Link>
          </div>
        </div>
        <div className={styles.budgetHistoryContainer}>
          <CustomTable
            blockTitle="Budget History"
            headers={headers}
            innerData={innerData}
          />
          {/*<Table tableName={"Memo"} headers={headers} tableData={tableData}/>*/}
        </div>
      </div>
    </MainLayout>
  );
};

export default OfficeBudget;
