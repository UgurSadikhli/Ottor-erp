"use client";
import Image from "next/image";
import MainLayout from "../../layouts/main-layout";
import React, { useState } from "react";
import styles from "./LogisticsRequest.module.css";
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

const SelectIndicatoroptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];
const headers = [
  { id: 1, headerName: "S/N" },
  { id: 2, headerName: "Request Title" },
  { id: 3, headerName: "Purpose" },
  { id: 4, headerName: "Date From" },
  { id: 5, headerName: "Date To" },
  { id: 6, headerName: "Amount (₦)" },
];

const innerData = [
  { id: 1, Title: "Request for travel time", Purpose: "Training course", From: "22/11/2022", To: "30/11/2022",Amount:"360,000.00"},
];
const LogisticsRequest = () => {
  return (
    <MainLayout>
     
      <div className={styles.main}>
        <div className={styles.top}>
            <CustomButton
             icon={<ArrowRightIcon color="black" />}
             links="logistics"
             label="Back"
            />
        </div>
        <div className={styles.body}>
          <div className={styles.form1}>
              <div className={styles.form1Top}>
                  <span className={styles.formTopText1}>Logistics Request</span>
                  <span className={styles.formTopText2}>Kindly fill in the form below to submit a logistics request</span>
              </div>
              <div className={styles.form1Body}>
                <div className={styles.form1BodyTop}>
                  <div className={styles.form1BodyTopInput1}>
                      <InputField
                      label="Request title"
                      placeholder="Enter title"
                      width={470}
                      height={54}
                      />
                      <InputField
                      label="Purpose"
                      placeholder="Enter purpose"
                      width={470}
                      height={54}
                      />
                        <InputField
                      label="Amount"
                      placeholder="Enter amount in ₦"
                      width={470}
                      height={54}
                      />         
                    </div>
                    <div className={styles.form1BodyTopInput2}>
                      <InputField
                      label="Requested by"
                      placeholder="Otor John Stephen"
                      width={470}
                      height={54}
                      />
                      <SelectIndicator
                      options={SelectIndicatoroptions}
                      placeholder="Sent to"
                      height={54}
                      width={470}
                      label="Sent to"
                      showLabel={true}
                      />   
                      <div className={styles.datePickerDiv}>
                        <span className={styles.datePickertext}>Date from</span>
                        <DatePickerValue  width={470}/>
                      </div>
                    </div>
                </div>
                <div className={styles.form1BodyBottom}>
                      <div className={styles.datePickerDiv}>
                        <span className={styles.datePickertext}>Date to</span>
                        <DatePickerValue  width={470}/>
                      </div>
                      <button className={styles.buttons}>Create Circular</button>
                </div>

              </div>

          </div>
          <div className={styles.form2}>
              <div className={styles.form2Top}>
                  <span className={styles.formTopText1}>Payment Voucher</span>
                  <div className={styles.formTable}>
                  <CustomTable
                  headers={headers}
                  innerData={innerData}
                  />
                  </div>
              </div>
              <div className={styles.form2Body}>
              <span className={styles.form2BodyText1}>Beneficiary Payment Details</span>
              <div className={styles.form2BodyInputSignature}>
              <div className={styles.form2BodyInputs}>
              <InputField
                      label="Account name"
                      placeholder="Otor John Stephen"
                      width={470}
                      height={54}
                      />
                       <InputField
                      label="Account number"
                      placeholder="Enter number"
                      width={470}
                      height={54}
                      />
                       <InputField
                      label="Bank name"
                      placeholder="Enter bank name"
                      width={470}
                      height={54}
                      />
              </div>
              <div className={styles.form2BodySignature}>
                <div className={styles.form2BodySignature1}>
                  <hr className={styles.form2BodySignatureHR}/>
                    <span className={styles.form2BodySignatureText}>Verifier Signature</span>
                 </div>
                 <div className={styles.form2BodySignature2}>
                  <hr className={styles.form2BodySignatureHR}/>
                    <span className={styles.form2BodySignatureText}>Authorizer Signature</span>
                 </div>
              </div>
              </div>
              <div className={styles.form2BodyButtons}>
              <button className={styles.buttons1}>Save and Send for Approval</button>

              <button className={styles.buttons2}>Save</button>

              </div>
          </div>
        </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default LogisticsRequest;
