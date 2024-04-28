"use client";
import Image from "next/image";
import Table from "../components/Table/table";
import MainLayout from "../layouts/main-layout";
import Card from "../components/Card/card";
import styles from "./Dashboard.module.css";
import StaffIcon from "@/app/components/Icons/StaffIcon/StaffIcon";
import DocumentIcon from "@/app/components/Icons/DocumentIcon/DocumentIcon";
import RocketIcon from "@/app/components/Icons/RocketIcon/RocketIcon";
import PeopleIcon from "@/app/components/Icons/PeopleIcon/PeopleIcon";
import ArrowUpIcon from "@/app/components/Icons/ArrowUpIcon/ArrowUpIcon";
import ArrowDownIcon from "@/app/components/Icons/ArrowDownIcon/ArrowDownIcon";
import ChartCard from "@/app/components/ChartCard/ChartCard";
import Header from "../components/Header/header";
import React, {useEffect,useState} from "react";

function getFormattedDate() {
  const currentDate = new Date();

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = weekdays[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

  const formattedDate = `${dayOfWeek}, ${dayOfMonth}${ordinalSuffix} ${month} ${year}`;

  return formattedDate;
}

interface StaffEmployee {
  id: number;
  email: string;
  officialEmail?: string;
  emailConfirmed: boolean;
  name: string;
  surname: string;
  password: string;
  phoneNumber?: string;
  gender?: string;
  role?: string;
  designation?: string;
  staffId: string;
  profileImage?: string;
}


export default function Dashboard() {
  const [userInfo, setUserInfo] = useState<string>("Loading...");

  const [tableData, setTableData] = useState([
    // ["01", "Otor John", "Moderator", "IT"],
    // ["01", "Otor John", "Moderator", "IT"],
    // ["01", "Otor John", "Moderator", "IT"],
    // ["01", "Otor John", "Moderator", "IT"],
    // ["01", "Otor John", "Moderator", "IT"],
  ]);
  const headers = ["S/N", "Staff Name", "Staff Role", "Designation"];


  useEffect(() => {
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname");
    if (name && surname) {
      setUserInfo(`${name} ${surname}`);
    }
  }, []);

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/staff/get-all-employees", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        if (responseData) {
          const newData = responseData.map((item:StaffEmployee) => [
            item.id,
            item.name,
            item.role,
            item.designation,
          ]);

          setTableData(currentData => [...currentData, ...newData]);
        }
      } catch (error) {
        console.error("Error getting staff list: ", error);
      }
    };

    getAllEmployees();
  }, []);


  const formattedDate = getFormattedDate();

  return (
    <MainLayout
      label={`Today is ${formattedDate}.`}
      title={`Welcome, Mr. ${userInfo}`}
    >
      <div className={styles.container}>
        <div className={styles.top}>
          <Card
            number={"250"}
            title="Total number of staff"
            description="12 more than last quarter"
            icon={<StaffIcon color={"#F29425"} />}
            arrowIcon={<ArrowUpIcon color="#10A242" />}
            backgroundColor="#FFF4E8"
          />
          <Card
            number={"100"}
            title="Total application"
            description="0.2% lower than last quarter"
            icon={<DocumentIcon color={"#248CD8"} />}
            arrowIcon={<ArrowDownIcon color={"#ED3237"} />}
            backgroundColor="#E8F5FF"
          />
          <Card
            number={"10"}
            title="Total projects"
            description="2% more than last quarter"
            icon={<RocketIcon color={"#A601FF"} />}
            arrowIcon={<ArrowUpIcon color="#10A242" />}
            backgroundColor="#F9EFFF"
          />
          <Card
            number={"10"}
            title="Total departments"
            description=""
            icon={<PeopleIcon color={"#10A242"} />}
            backgroundColor="#ECFFF2"
          />
        </div>
        <div className={styles.body}>
          <Table tableName={"Memo"} headers={headers} tableData={tableData} />
          <Table
            tableName={"Staff List"}
            headers={headers}
            tableData={tableData}
          />
          <Table
            tableName={"Payment Voucher"}
            headers={headers}
            tableData={tableData}
          />
          <ChartCard
            Totalnumber={500}
            rejected={50}
            approved={370}
            pending={80}
            title={"Staff Applications Card"}
          />
        </div>
      </div>
    </MainLayout>
  );
}
