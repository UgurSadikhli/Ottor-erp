import MainLayout from "../layouts/main-layout";
import React from "react";
import styles from "./logistics.module.css";
import Card from "@/app/components/Card/card";
import ArrowUpIcon from "@/app/components/Icons/ArrowUpIcon/ArrowUpIcon";
import ArrowDownIcon from "@/app/components/Icons/ArrowDownIcon/ArrowDownIcon";
import Link from "next/link";
import CustomTable from "@/app/components/Table/CustomTable/CustomTable";
import Table from "../components/Table/table";

import BagIcon from "../components/Icons/BagIcon/BagIcon";
import Header from "../components/Header/header";
import LogisticsIcon from "../components/Icons/LogisticsIcon/LogisticsIcon";

export default function logistics() {
  const headers = [
    { id: 1, headerName: "S/N" },
    { id: 2, headerName: "Title" },
    { id: 3, headerName: "Purpose" },
    { id: 4, headerName: "Amount" },
    { id: 5, headerName: "Requested By" },
    { id: 6, headerName: "Sent to" },
    { id: 7, headerName: "Date" },
    { id: 8, headerName: "Status" },
    { id: 8, headerName: "Action" },
  ];

  const innerData = [
    {
      id: 1,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Pending",
      Action: "View more",
    },
    {
      id: 2,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Pending",
      Action: "View more",
    },
    {
      id: 3,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Approved",
      Action: "View more",
    },
    {
      id: 4,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Pending",
      Action: "View more",
    },
    {
      id: 5,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Rejected",
      Action: "View more",
    },
    {
      id: 6,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Pending",
      Action: "View more",
    },
    {
      id: 7,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Approved",
      Action: "View more",
    },
    {
      id: 8,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Rejected",
      Action: "View more",
    },
    {
      id: 9,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Pending",
      Action: "View more",
    },
    {
      id: 10,
      Title: "Request for travel time",
      Purpose: "Training ourse",
      Amount: "360,000.00",
      Requested: "Otor John Stephen",
      Sent: "Hassana Husseini",
      Date: "21/11/2022",
      Status: "Approved",
      Action: "View more",
    },
  ];
  return (
    <MainLayout
      label="Make and send logistics request."
      title=" Logistics"
      icon={<LogisticsIcon color="url(#paint_linear_148_8598_0)" />}
    >
      {/* <Header label="Make and send logistics request." title=" Logistics" icon={<LogisticsIcon color="url(#paint_linear_148_8598_0)" />}/> */}
      <div className={styles.container}>
        <div className={styles.statisticsContainer}>
          <Card
            number={"350"}
            title="Total request made"
            description="50 more than last year"
            icon={<BagIcon color={"#248CD8"} />}
            arrowIcon={<ArrowUpIcon color="#10A242" />}
            backgroundColor="#E8F5FF"
          />
          <Card
            number={"5,000,000"}
            title="Total cost incurred"
            description=""
            icon={<BagIcon color={"#A601FF"} />}
            backgroundColor="#F9EFFF"
          />
          <Card
            number={"70"}
            title="Pending request"
            description=""
            icon={<BagIcon color={"#F29425"} />}
            backgroundColor="#FFF4E8"
          />

          <Card
            number={"280"}
            title="Approved request"
            description="2% more than last year"
            icon={<BagIcon color={"#10A242"} />}
            arrowIcon={<ArrowDownIcon color="#ED3237" />}
            backgroundColor="#ECFFF2"
          />
        </div>
        <div className={styles.createBudgetContainer}>
          <div>
            <span className={styles.title}>Logistics request</span>
          </div>
          <div>
            <Link href="/logistics/logistics-request">
              <button className={styles.buttons}>Make Logistics Request</button>
            </Link>
          </div>
        </div>
        <div className={styles.budgetHistoryContainer}>
          <CustomTable
            blockTitle="All Logistics Request"
            headers={headers}
            innerData={innerData}
          />
          {/*  <Table tableName={"All Logistics Request"} headers={headers} tableData={tableData}/>*/}
        </div>
      </div>
    </MainLayout>
  );
}
