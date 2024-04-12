"use client";
import Image from "next/image";
import MainLayout from "../layouts/main-layout";
import React, { useState } from "react";
import styles from "./Circulars.module.css";
import FloatingLabelInput from "../components/IconInput/input";
import SelectIndicator from "../components/SelectIndicator/SelectIndicator";
import MagnifierIcon from "../components/Icons/MagnifierIcon/MagnifierIcon";
import Link from "next/link";
import CustomTable from "../components/CustomTable/CustomTable";

const SelectIndicatoroptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];
const data = [
  { column1: '1', column2: '1' },
  { column1: '2', column2: '2' },
  { column1: '3', column2: '3' },
  { column1: '4', column2: '4' },
  { column1: '5', column2: '5' },
  // Add more data as needed
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

          <div className={styles.right}>
            <span className={styles.text}>Filter circulars</span>
            <SelectIndicator
              options={SelectIndicatoroptions}
              placeholder="All memos"
              height={50}
              width={240}
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
        <div className={styles.body}>
          
          <CustomTable data={data}/>
        </div>
      </div>
    </MainLayout>
  );
}
