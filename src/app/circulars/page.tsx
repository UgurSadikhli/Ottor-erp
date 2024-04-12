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
      id: 1,
      memoTitle: "1",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 2,
      memoTitle: "2",
      sentFrom: "Pater John",
      sentTo: "Kakaw Toury",
      status: "Pending",
    },
    {
      id: 3,
      memoTitle: "3",
      sentFrom: "Zater John",
      sentTo: "Baerkau Toury",
      status: "Rejected",
    },
    {
      id: 4,
      memoTitle: "4",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 5,
      memoTitle: "5",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 6,
      memoTitle: "6",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 7,
      memoTitle: "6",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 8,
      memoTitle: "6",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 9,
      memoTitle: "6",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 10,
      memoTitle: "6",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 11,
      memoTitle: "6",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
    {
      id: 12,
      memoTitle: "6",
      sentFrom: "Otor John",
      sentTo: "Ibrahim Toury",
      status: "Approved",
    },
  ],
};
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
            tableData={data}
          />
        </div>
      </div>
    </MainLayout>
  );
}
