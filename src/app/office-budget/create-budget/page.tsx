"use client"
import React from "react";
import styles from "./CreateBudget.module.css";
import MainLayout from "../../layouts/main-layout"
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import InputField from "@/app/components/Input/input";
import DatePickerValue from "@/app/components/Calendar/calendar";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";
import CustomTable from "@/app/components/Table/CustomTable/CustomTable";
import Header from "../../components/Header/header";
import MoneySackIcon from "@/app/components/Icons/MoneySackIcon/MoneySackIcon";
import HeaderMoneySackIcon from "@/app/components/Icons/HeaderMoneySackIcon/HeaderMoneySackIcon";

const SelectIndicatoroptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];
const headers = [
  { id: 1, headerName: "S/N" },
  { id: 2, headerName: "Budget No." },
  { id: 3, headerName: "Budget Description" },
  { id: 4, headerName: "Budget Amount (₦)" },
  { id: 5, headerName: "Date" },
];

const innerData = [
  {
    id: 1,
    Budget: "00211235",
    Description: "Purchase of 10 units, 2Hp Hisense Air Conditions",
    Amount: "1,400,000.00",
    Date: "18/11/2022",
  },
];

const CreateBudget = () => {
  return (
    <MainLayout label="View, create and send budget request." title="Office Budget" icon={<HeaderMoneySackIcon color="url(#paint_linear_148_10848_0)" />}>
      {/* <Header label="View, create and send budget request." title="Office Budget" icon={<MoneySackIcon color="url(#paint_linear_148_10848_0)" />}/> */}
        <div className={styles.main}>
          <div className={styles.top}> 
          <CustomButton icon={<ArrowRightIcon color="black"/>} links="office-budget" label="Back" />
          </div>
          <div className={styles.body}>
            <div className={styles.form1}>
              <div className={styles.form1Top}>
                <span className={styles.formTopTW}>Create Budget</span>
                <span className={styles.formTopT}>Kindly fill in the form below to create a budget</span>
              </div>
              <div className={styles.form1Bottom}>
                <div className={styles.form1H1}>
                <InputField
                    label="Budget number"
                    placeholder="Enter item"
                    width={450}
                    height={54}
                  />
                  <InputField
                    label="Budget description"
                    placeholder="Enter description"
                    width={450}
                    height={54}
                  />
                  <InputField
                    label="Budget amount"
                    placeholder="Enter amount in ₦"
                    width={450}
                    height={54}
                  />
                </div>
                <div className={styles.form1H2}>
                <div className={styles.form1SpanDatePickerValue}>
                    <span className={styles.formTopDate}>Date</span>
                  <DatePickerValue width={450}  />
                </div>
                <SelectIndicator
                    options={SelectIndicatoroptions}
                    placeholder="Select option"
                    height={55}
                    width={450}
                    label="Receiving office"
                    showLabel={true}
                  />
                
                </div>
                <div className={styles.form1H3}>
                <button className={styles.buttons}>Create Budget</button>
                </div>

              </div>

            </div>
            <div className={styles.form2}>
              <div className={styles.form2Top}>
                <span className={styles.formTopTW}>Budget Request</span>
              </div>
              <div className={styles.form2Bottom}>
              <CustomTable headers={headers} innerData={innerData} />
                <button className={styles.buttons2}>Submit for Approval</button>
              </div>
            </div>

          </div>
       
        </div>
    </MainLayout>
  );
};

export default CreateBudget;
