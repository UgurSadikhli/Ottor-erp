"use client";
import Image from "next/image";
import MainLayout from "../../layouts/main-layout";
import React, { useState } from "react";
import styles from "./createCiruculas.module.css";
import IconButton from "@/app/components/IconButton/iconButton";
import SelectIndicator from "../../components/SelectIndicator/SelectIndicator";
import InputField from "../../components/Input/input";
import FocusedRingTextarea from "../../components/TextArea/textArea";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import Link from "next/link";
import DatePickerValue from "@/app/components/Calendar/calendar";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import Header from "../../components/Header/header";
import CircularsIcon from "../../components/Icons/CircularsIcon/CircularsIcon";

const SelectIndicatoroptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

export default function createCiruculas() {
  return (
    <MainLayout label="Search for  and view all circulars" title=" Circulars" icon={<CircularsIcon color="url(#paint_linear_148_9976_0)" />}>
      {/* <Header label="Search for  and view all circulars" title=" Circulars" icon={<CircularsIcon color="url(#paint_linear_148_9976_0)" />}/> */}
      <div className={styles.main}>
        <div className={styles.top}>
          <CustomButton links="circulars" label={"Back"} icon={<ArrowRightIcon color="red" /> }/>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyTop}>
            <span className={styles.bodyTopText}>Create Circular</span>
          </div>
          <div className={styles.bodyCenter}>
            <div className={styles.labelLeft}>
              <InputField
                label="Circular title"
                placeholder="Enter title"
                width={470}
                height={50}
              />

              <div >
                <span className={styles.label}>Date</span>
                <DatePickerValue  width={470}/>
              </div>
              <button className={styles.buttons}>Send Circular</button>
            </div>
            <div className={styles.labelRight}>
              <div className={styles.labelRightElem}>
                <InputField
                  label="Sent from"
                  placeholder="Enter name"
                  width={470}
                  height={50}
                />
                <SelectIndicator
                  options={SelectIndicatoroptions}
                  placeholder="Select option"
                  height={50}
                  width={470}
                  label="Sent to"
                  showLabel={true}
                />
              </div>
              <div className={styles.labelLeftBottom}>
                <span className={styles.label}>Circular message</span>
                <FocusedRingTextarea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
