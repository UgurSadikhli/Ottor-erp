"use client";
import Image from "next/image";
import MainLayout from "../layouts/main-layout";
import React, { useState } from "react";
import styles from "./Circulars.module.css";
import FloatingLabelInput from "../components/IconInput/input";
import SelectIndicator from "../components/SelectIndicator/SelectIndicator";
import MagnifierIcon from "../components/Icons/MagnifierIcon/MagnifierIcon";
import Link from "next/link";
import CustomTable from "../components/Table/CustomTable/CustomTable";

const SelectIndicatoroptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];
const headers = [
  { id: 1, headerName: "S/N" },
  { id: 2, headerName: "Circular Title" },
  { id: 3, headerName: "Sent From" },
  { id: 4, headerName: "Sent To" },
  { id: 5, headerName: "Date" },
  { id: 6, headerName: "Circular Type" },
  { id: 7, headerName: "Action" },
];

const innerData = [
  { id: 1, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Sent↗",Action:"View more"},
  { id: 2, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Received↙",Action:"View more"},
  { id: 3, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Sent↗",Action:"View more"},
  { id: 4, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Sent↗",Action:"View more"},
  { id: 5, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Sent↗",Action:"View more"},
  { id: 6, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Received↙",Action:"View more"},
  { id: 7, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Received↙",Action:"View more"},
  { id: 8, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Received↙",Action:"View more"},
  { id: 9, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Circular:"Received↙",Action:"View more"},

];
export default function Circulars() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (value: string) => {
    setInputValue(value);
    console.log(inputValue);
  };

  return (
    <MainLayout>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.VeryleftLeft}>
            <div className={styles.Veryleft}>
              <span className={styles.text}>Quick search a circular</span>
              <FloatingLabelInput
                value={inputValue}
                icon={<MagnifierIcon color="black" />}
                onChange={handleInputValueChange}
              />
            </div>
            <div className={styles.left}>
              <span className={styles.circularsCount}>150</span>
              <span className={styles.text}>Total circulars</span>
            </div>
          </div>
          <div  className={styles.rightVeryRight}>
            <div className={styles.right}>
              <span className={styles.text}>Filter circulars</span>
              <SelectIndicator
                options={SelectIndicatoroptions}
                placeholder="All memos"
                height={50}
                width={300}
                label="Filter circulars"
                showLabel={false}
              />
            </div>

            <div className={styles.Veryright}>
              <Link
                href="/circulars/create-ciruculas"
                passHref={true}
                legacyBehavior={true}
              >
                <button className={styles.buttons}>Create Circular</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <CustomTable
            blockTitle="All Circulars"
            shownPerPage
            shownPagination
            headers={headers}
            innerData={innerData}
          />
        </div>
      </div>
    </MainLayout>
  );
}
