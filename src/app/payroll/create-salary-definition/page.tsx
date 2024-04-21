"use client";
import MainLayout from "../../layouts/main-layout"
import styles from './create-salary-definition.module.css'
import InputField from "@/app/components/Input/input";
import React from "react";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
export default function CreateSalaryDefinition() {

    const SelectIndicatoroptions = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ];

    return (
        <MainLayout>

            <div className={styles.top}>
                <CustomButton icon={<ArrowRightIcon color="black"/>} links="payroll" label="Back"/>
            </div>

            <div className={`${styles.MainContainer}`}>
                <h2 className="mb-4">Create Salary Definition</h2>

                <div className="row">
                    <div className="col-md-4">
                        <SelectIndicator
                            label="Title"
                            placeholder="Select option"
                            options={SelectIndicatoroptions}
                            height={55}
                            width={400}
                            showLabel={true}
                        />
                    </div>
                    <div className="col-md-4">

                        <SelectIndicator
                            label="Level"
                            placeholder="Select option"
                            options={SelectIndicatoroptions}
                            height={55}
                            width={400}
                            showLabel={true}
                        />
                    </div>
                    <div className="col-md-4">
                        <InputField
                            label="Basic Salary"
                            placeholder="Enter amount in Naira"
                            width={400}
                            height={55}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <InputField
                            label="Allowance"
                            placeholder="Enter amount in Naira"
                            width={400}
                            height={55}
                        />
                    </div>
                    <div className="col-md-4">

                        <InputField
                            label="Gross Salary"
                            placeholder="Enter amount in Naira"
                            width={400}
                            height={55}
                        />
                    </div>
                    <div className="col-md-4">
                        <InputField
                            label="Deductions"
                            placeholder="Enter amount in Naira"
                            width={400}
                            height={55}
                        />
                    </div>
                </div>
                <div className="row mt-3 align-items-end">
                    <div className="col-md-4">
                        <InputField
                            label="Net Salary"
                            placeholder="Enter amount in Naira"
                            width={400}
                            height={55}
                        />
                    </div>
                    <div className="col-md-4">
                        <button className={styles.CreateButton}>Submit for Approval</button>
                    </div>
                </div>
            </div>

        </MainLayout>
    );
}
