"use client"
import React from 'react';
import styles from "./CreatePayslip.module.css";
import MainLayout from "@/app/layouts/main-layout";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import InputField from "@/app/components/Input/input";
import DatePickerValue from "@/app/components/Calendar/calendar";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";

const SelectIndicatorOptions = {
    staffName: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ],
    titles: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ],
    levels: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ]
};

const CreatePayslip = () => {
    return (
        <MainLayout>
            <div className={styles.main}>
                <div className={styles.top}>
                    <CustomButton icon={<ArrowRightIcon color="black"/>} links="payroll" label="Back" />
                </div>
                <div className={styles.body}>
                    <div className={styles.form}>
                        <div className={styles.formTop}>
                            <span className={styles.pageTitle}>Create Payslip</span>
                            <span className={styles.formTitle}>Basic Information</span>
                        </div>
                        <div className={styles.formBody}>
                            <div className={styles.bodyContainer}>
                                <SelectIndicator
                                    options={SelectIndicatorOptions.staffName}
                                    placeholder="Select staff"
                                    height={55}
                                    width={450}
                                    label="Staff name"
                                    showLabel={true}
                                />
                                <SelectIndicator
                                    options={SelectIndicatorOptions.titles}
                                    placeholder="Select title"
                                    height={55}
                                    width={450}
                                    label="Title"
                                    showLabel={true}
                                />
                                <SelectIndicator
                                    options={SelectIndicatorOptions.levels}
                                    placeholder="Select level"
                                    height={55}
                                    width={450}
                                    label="Level"
                                    showLabel={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.formTop}>
                            <span className={styles.formTitle}>Salary Structure</span>
                        </div>
                        <div className={styles.formBody}>
                            <div className={styles.bodyContainer}>
                                <InputField
                                    label="Basic Salary"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                                <InputField
                                    label="Housing allowance"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                                <InputField
                                    label="Transport allowance"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                            </div>
                            <div className={styles.bodyContainer}>
                                <InputField
                                    label="Utility allowance"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                                <InputField
                                    label="Productivity allowance"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                                <InputField
                                    label="Communication allowance"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                            </div>
                            <div className={styles.bodyContainer}>
                                <InputField
                                    label="Inconvenience allowance"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                                <InputField
                                    label="Budget number"
                                    placeholder="Amount"
                                    width={450}
                                    height={54}
                                />

                            </div>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.formTop}>
                            <span className={styles.formTitle}>Deductions</span>
                        </div>
                        <div className={styles.formBody}>
                            <div className={styles.bodyContainer}>
                                <InputField
                                    label="TAX/PAYE"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                                <InputField
                                    label="Employee pension"
                                    placeholder="Enter amount"
                                    width={450}
                                    height={54}
                                />
                                <InputField
                                    label="Total deduction"
                                    placeholder="Amount"
                                    width={450}
                                    height={54}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.formTop}>
                            <span className={styles.formTitle}>Net Salary</span>
                        </div>
                        <div className={styles.formBody}>
                            <div className={styles.bodyContainer}>
                                <InputField
                                    label="Net salary"
                                    placeholder="Amount"
                                    width={450}
                                    height={54}
                                />
                            </div>
                        </div>
                        <div className={styles.formBottom}>
                            <button className={styles.buttons}>Create Payslip</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CreatePayslip;