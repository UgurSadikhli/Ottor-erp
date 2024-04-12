import React from "react";
import styles from "./OfficeBudget.module.css";
import MainLayout from "@/app/layouts/main-layout";
import Card from "@/app/components/Card/card";
import StaffIcon from "@/app/components/Icons/StaffIcon/StaffIcon";
import ArrowUpIcon from "@/app/components/Icons/ArrowUpIcon/ArrowUpIcon";
import DocumentIcon from "@/app/components/Icons/DocumentIcon/DocumentIcon";
import ArrowDownIcon from "@/app/components/Icons/ArrowDownIcon/ArrowDownIcon";
import RocketIcon from "@/app/components/Icons/RocketIcon/RocketIcon";
import PeopleIcon from "@/app/components/Icons/PeopleIcon/PeopleIcon";
import Link from "next/link";
import Table from "@/app/components/Table/table";
import CustomTable from "@/app/components/Table/CustomTable/CustomTable";

const OfficeBudget = () => {
  const data = {
    headers: [
      {
        id: 0,
        headerName: "S/N",
      },
      {
        id: 1,
        headerName: "Memo Title",
      },
      {
        id: 2,
        headerName: "Sent From",
      },
      {
        id: 3,
        headerName: "Sent To",
      },
      {
        id: 4,
        headerName: "Status",
      },
    ],
    innerData: [
      {
        id: 0,
        memoTitle: "Operation Memo",
        sentFrom: "Otor John",
        sentTo: "Ibrahim Toury",
        status: "Approved",
      },
      {
        id: 1,
        memoTitle: "Operation Memo",
        sentFrom: "Pater John",
        sentTo: "Kakaw Toury",
        status: "Pending",
      },
      {
        id: 2,
        memoTitle: "Operation Memo",
        sentFrom: "Zater John",
        sentTo: "Baerkau Toury",
        status: "Rejected",
      },
      {
        id: 0,
        memoTitle: "Operation Memo",
        sentFrom: "Otor John",
        sentTo: "Ibrahim Toury",
        status: "Approved",
      },
      {
        id: 1,
        memoTitle: "Operation Memo",
        sentFrom: "Pater John",
        sentTo: "Kakaw Toury",
        status: "Pending",
      },
      {
        id: 2,
        memoTitle: "Operation Memo",
        sentFrom: "Zater John",
        sentTo: "Baerkau Toury",
        status: "Rejected",
      },
      {
        id: 0,
        memoTitle: "Operation Memo",
        sentFrom: "Otor John",
        sentTo: "Ibrahim Toury",
        status: "Approved",
      },
      {
        id: 1,
        memoTitle: "Operation Memo",
        sentFrom: "Pater John",
        sentTo: "Kakaw Toury",
        status: "Pending",
      },
      {
        id: 2,
        memoTitle: "Operation Memo",
        sentFrom: "Zater John",
        sentTo: "Baerkau Toury",
        status: "Rejected",
      },
      {
        id: 0,
        memoTitle: "Operation Memo",
        sentFrom: "Otor John",
        sentTo: "Ibrahim Toury",
        status: "Approved",
      },
      {
        id: 1,
        memoTitle: "Operation Memo",
        sentFrom: "Pater John",
        sentTo: "Kakaw Toury",
        status: "Pending",
      },
      {
        id: 2,
        memoTitle: "Operation Memo",
        sentFrom: "Zater John",
        sentTo: "Baerkau Toury",
        status: "Rejected",
      },
      {
        id: 0,
        memoTitle: "Operation Memo",
        sentFrom: "Otor John",
        sentTo: "Ibrahim Toury",
        status: "Approved",
      },
      {
        id: 1,
        memoTitle: "Operation Memo",
        sentFrom: "Pater John",
        sentTo: "Kakaw Toury",
        status: "Pending",
      },
      {
        id: 2,
        memoTitle: "Operation Memo",
        sentFrom: "Zater John",
        sentTo: "Baerkau Toury",
        status: "Rejected",
      },
      {
        id: 0,
        memoTitle: "Operation Memo",
        sentFrom: "Otor John",
        sentTo: "Ibrahim Toury",
        status: "Approved",
      },
      {
        id: 1,
        memoTitle: "Operation Memo",
        sentFrom: "Pater John",
        sentTo: "Kakaw Toury",
        status: "Pending",
      },
      {
        id: 2,
        memoTitle: "Operation Memo",
        sentFrom: "Zater John",
        sentTo: "Baerkau Toury",
        status: "Rejected",
      },
    ],
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.statisticsContainer}>
          <Card
            number={250}
            title="Total number of staff"
            description="12 more than last quarter"
            icon={<StaffIcon color={"#F29425"} />}
            arrowIcon={<ArrowUpIcon color="#10A242" />}
            backgroundColor="#FFF4E8"
          />
          <Card
            number={100}
            title="Total application"
            description="0.2% lower than last quarter"
            icon={<DocumentIcon color={"#248CD8"} />}
            arrowIcon={<ArrowDownIcon color={"#ED3237"} />}
            backgroundColor="#E8F5FF"
          />
          <Card
            number={10}
            title="Total projects"
            description="2% more than last quarter"
            icon={<RocketIcon color={"#A601FF"} />}
            arrowIcon={<ArrowUpIcon color="#10A242" />}
            backgroundColor="#F9EFFF"
          />
          <Card
            number={10}
            title="Total departments"
            description=""
            icon={<PeopleIcon color={"#10A242"} />}
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
          <CustomTable blockTitle="Budget History" tableData={data} />
          {/*<Table tableName={"Memo"} headers={headers} tableData={tableData}/>*/}
        </div>
      </div>
    </MainLayout>
  );
};

export default OfficeBudget;
