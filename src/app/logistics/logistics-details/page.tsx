"use client"
import Image from "next/image";
import MainLayout from "../../layouts/main-layout";
import React, { useState } from "react";
import styles from "./logisticDetails.module.css";
import IconButton from "@/app/components/IconButton/iconButton";
import SelectIndicator from "../../components/SelectIndicator/SelectIndicator";
import InputField from "../../components/Input/input";
import FocusedRingTextarea from "../../components/TextArea/textArea";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import Link from "next/link";
import DatePickerValue from "@/app/components/Calendar/calendar";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import Header from "@/app/components/Header/header";
import CustomTable from "@/app/components/Table/CustomTable/CustomTable";
import image from "../../../../public/assets/logistics-reguest.png"
import LogisticsIcon from "@/app/components/Icons/LogisticsIcon/LogisticsIcon";

const SelectIndicatoroptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

const LogisticsDetails = () => {
  return (
    <MainLayout label="Make and send logistics request." title=" Logistics" icon={<LogisticsIcon color="url(#paint_linear_148_8598_0)"/>}>
      {/* <Header label="Make and send logistics request." title=" Logistics" icon={<LogisticsIcon color="url(#paint_linear_148_8598_0)" />}/> */}
      <div className={styles.main}>
        <div className={styles.top}>
        <CustomButton
            icon={<ArrowRightIcon color="black" />}
            links="logistics/logistics-request"
            label="Back"
          />
        </div>
        <div className={styles.body}>
            <div className={styles.body1}>
                <div className={styles.body1Top}>
                    <span className={styles.span1}>Request For Travel Time</span>
                </div>
                <div className={styles.body1Bottom}>
                    <span className={styles.span}><b>Purpose:</b> Training course</span>
                    <span className={styles.span}><b>Amount:</b> ₦360,000.00</span>
                    <span className={styles.span}><b>From:</b> Otor John Stephen</span>
                    <span className={styles.span}><b>To:</b> Fatimah Mohammed</span>
                    <span className={styles.span}><b>Duration:</b> 4 days - (21/12/2022 - 24/12/2022)</span>
                    <span className={styles.span}><b>Status:</b> Pending</span>
                    <span className={styles.span}><b>Attachment:</b> Yes</span>
                </div>
            </div>
            <div className={styles.body2}>
                <hr className={styles.hr}/>
                <Image
                src={image}
                width={700}
                height={500}
                alt="Description of your image"
                />     
                <hr className={styles.hr}/>
            </div>
            <div className={styles.body3}>
                <SelectIndicator
                    options={SelectIndicatoroptions}
                    placeholder="Select action"
                    height={40}
                    width={300}
                    label="Action"
                    showLabel={true}
                />
                 <InputField
                    label="Remarks"
                    placeholder="Enter remark"
                    width={300}
                    height={40}
                  />
                  <div  className={styles.body3Button}> <button className={styles.buttons1}> Submit</button> </div>
               
            </div>
        </div>
        </div>
    </MainLayout>
  );
};

export default LogisticsDetails;
