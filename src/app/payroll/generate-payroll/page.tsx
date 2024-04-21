"use client";
import MainLayout from "../../layouts/main-layout"
import styles from './generate-payroll.module.css'
import InputField from "@/app/components/Input/input";
import React from "react";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import DatePickerValue from "@/app/components/Calendar/calendar";
import CustomTable from "@/app/components/Table/CustomTable/CustomTable";
export default function GeneratePayroll() {

    const SelectIndicatoroptions = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ];


    const headers = [
        { id: 1, headerName: "S/N" },
        { id: 2, headerName: "Budget No." },
        { id: 3, headerName: "Budget Description" },
        { id: 4, headerName: "Budgeted Amount (₦)" },
        { id: 5, headerName: "Actual Amount (₦)" },
        { id: 6, headerName: "Variance (₦)" },
        { id: 7, headerName: "Date" },
    ];

    const innerData = [
        { id: 1, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 2, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 3, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 4, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 5, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 6, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 7, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 8, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 9, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 10, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 11, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 1, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 2, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 3, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 4, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 5, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 6, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 7, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 8, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"- 20,000.00",Date:"18/11/2022"},
        { id: 9, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 10, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},
        { id: 11, Budget: "00211235", Description: "Purchase of 10 units, 2Hp Hisense Air Conditions", Amount: "1,400,000.00", Actual: "1,380,000.00",Variance:"+ 20,000.00",Date:"18/11/2022"},

    ];

    return (
        <MainLayout>

            <div className={styles.main}>
            <div className={styles.top}>
                <CustomButton icon={<ArrowRightIcon color="black"/>} links="payroll" label="Back"/>
            </div>

            <div className={`${styles.MainContainer}`}>
                <h2 className="mb-4">Generate Payroll</h2>

                <div className="row">
                    <div className="col-md-4">
                        <InputField
                            label="Payment Name"
                            placeholder="Enter payment name"
                            width={400}
                            height={55}
                        />
                    </div>
                    <div className="col-md-4">

                        <SelectIndicator
                            label="Designation"
                            placeholder="Select designation"
                            options={SelectIndicatoroptions}
                            height={55}
                            width={400}
                            showLabel={true}
                        />
                    </div>
                    <div className="col-md-4">
                        <div className={styles.form1SpanDatePickerValue}>
                            <span className={styles.formTopDate}>Date</span>
                            <DatePickerValue width={400}/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <SelectIndicator
                            label="Payment month"
                            placeholder="Select month"
                            options={SelectIndicatoroptions}
                            height={55}
                            width={400}
                            showLabel={true}
                        />
                    </div>
                    <div className="col-md-4">

                        <SelectIndicator
                            label="Payment year"
                            placeholder="Select year"
                            options={SelectIndicatoroptions}
                            height={55}
                            width={400}
                            showLabel={true}
                        />
                    </div>
                </div>
                <div className="row mt-5 align-items-end">
                    <div className="col-md-4">
                        <button className={styles.CustomButton}>Generate Payroll</button>
                    </div>
                </div>
            </div>

            <div className={`${styles.MainContainer}`}>
                <h2>Staff Details</h2>

                <div className={styles.tableContainer}>
                    <CustomTable
                        headers={headers}
                        innerData={innerData}
                    />
                </div>

                <div className="row mt-5 align-items-end">
                        <button className={styles.CustomButton}>Submit</button>
                </div>

            </div>

            </div>
        </MainLayout>
    );
}
