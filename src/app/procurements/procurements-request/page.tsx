"use client";
import Image from "next/image";
import MainLayout from "../../layouts/main-layout";
import React, { useState } from "react";
import styles from "./procurements-request.module.css";
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
import LogisticsIcon from "@/app/components/Icons/LogisticsIcon/LogisticsIcon";
import BagHeaderIcon from "@/app/components/Icons/BagHeaderIcon/BagHeaderIcon";

const SelectIndicatoroptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];
const headers = [
  { id: 1, headerName: "S/N" },
  { id: 2, headerName: "Item" },
  { id: 3, headerName: "Quantity" },
  { id: 4, headerName: "Date" },
  { id: 5, headerName: "Unit Price (₦)" },
  { id: 6, headerName: "Total Price (₦)" },
  { id: 7, headerName: "VAT %" },
  { id: 8, headerName: "VAT Amount (₦)" },
  { id: 9, headerName: "Gross Amount (₦)" },

];

const innerData = [
  {
    id: 1,
    Item: "Office chairs",
    Quantity: "25",
    Date: "22/11/2022",
    Unit: "100,000.00",
    Total: "2,500,000.00",
    VAT: "7.50%",
    Amount: "187,500.00",
    Gross: "2,687,500.00",
  },
];
const ProcurementsRequest = () => {
  return (
    <MainLayout
      label="Request for, and view all requested procurements."
      title=" Procurement" icon={<BagHeaderIcon/>}
    >
      <div className={styles.main}>
        <div className={styles.top}>
          <CustomButton
            icon={<ArrowRightIcon color="black" />}
            links="procurements"
            label="Back"
          />
        </div>
        <div className={styles.body}>
          <div className={styles.form1}>
            <div className={styles.form1Top}>
              <span className={styles.formTopText1}>Procurement Request</span>
              <span className={styles.formTopText2}>
                Kindly fill in the form below to submit a logistics request
              </span>
            </div>
            <div className={styles.form1Body}>
              <div className={styles.form1BodyTop}>
                <div className={styles.form1BodyTopInput1}>
                  <InputField
                    label="Item"
                    placeholder="Enter item name"
                    width={470}
                    height={54}
                  />
                  <InputField
                    label="Quantity"
                    placeholder="Enter quantity"
                    width={470}
                    height={54}
                  />
                  <div className={styles.datePickerDiv}>
                    <span className={styles.datePickertext}>Date</span>
                    <DatePickerValue width={470} />
                  </div>
                </div>
                <div className={styles.form1BodyTopInput2}>
                  <InputField
                    label="Unit price"
                    placeholder="Enter amount"
                    width={470}
                    height={54}
                  />
                  <InputField
                    label="Total price"
                    placeholder="Enter amount"
                    width={470}
                    height={54}
                  />
                  <InputField
                    label="Requested by"
                    placeholder="Otor John"
                    width={470}
                    height={54}
                  />
                </div>
                <div className={styles.form1BodyTopInput2}>
                  <SelectIndicator
                    options={SelectIndicatoroptions}
                    placeholder="Select option"
                    height={54}
                    width={470}
                    label="Sent to"
                    showLabel={true}
                  />
                  <SelectIndicator
                    options={SelectIndicatoroptions}
                    placeholder="Select option"
                    height={54}
                    width={470}
                    label="Add Attachement"
                    showLabel={true}
                  />
                  <SelectIndicator
                    options={SelectIndicatoroptions}
                    placeholder="Select option"
                    height={54}
                    width={470}
                    label="Attachement type"
                    showLabel={true}
                  />
                </div>
              </div>
              <div className={styles.form1BodyBottom}>
                <button className={styles.buttons}>
                  Attach Payment Voucher
                </button>
              </div>
            </div>
          </div>
          <div className={styles.form2}>
            <div className={styles.form2Top}>
              <span className={styles.formTopText1}>Payment Voucher</span>
              <div className={styles.formTable}>
                <CustomTable headers={headers} innerData={innerData} />
              </div>
            </div>
            <div className={styles.form2Body}>
              <div className={styles.form2BodyMemo}>
                  <span className={styles.form2BodyText1}>
                    Beneficiary Payment Details
                  </span>
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
                  </div>
              </div>
           
            <div className={styles.form2BodyMemo}>
              <span className={styles.form2BodyText1}>Memo Activities</span>
              <div>
                <div className={styles.bottomlast}>
                  <InputField
                    label="Initiated by"
                    placeholder="Otor John"
                    width={470}
                    height={54}
                  />
                  <SelectIndicator
                    options={SelectIndicatoroptions}
                    placeholder="Select option"
                    height={54}
                    width={470}
                    label="Verified by"
                    showLabel={true}
                  />
                  <SelectIndicator
                    options={SelectIndicatoroptions}
                    placeholder="Select option"
                    height={54}
                    width={470}
                    label="Approved by"
                    showLabel={true}
                  />
                </div>
                <div className={styles.form2BodySignature}>
                  <div className={styles.form2BodySignature1}>
                    <hr className={styles.form2BodySignatureHR} />
                    <span className={styles.form2BodySignatureText}>
                      Verifier Signature
                    </span>
                  </div>
                  <div className={styles.form2BodySignature2}>
                    <hr className={styles.form2BodySignatureHR} />
                    <span className={styles.form2BodySignatureText}>
                      Authorizer Signature
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form2BodyButtons}>
            <Link href={"/procurements/procurements-details"}>
              <button className={styles.buttons1}>
                Save and Send for Approval
              </button>
            </Link>
            <button className={styles.buttons2}>Save</button>
          </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProcurementsRequest;
