"use client"
import React from 'react';
import styles from "./CreatePayslip.module.css";
import MainLayout from "@/app/layouts/main-layout";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import InputField from "@/app/components/Input/input";
import DatePickerValue from "@/app/components/Calendar/calendar";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";

const CreatePayslip = () => {
    return (
        <MainLayout>
            <div className={styles.main}>
                <div className={styles.top}>
                    <CustomButton icon={<ArrowRightIcon color="black"/>} links="payroll" label="Back" />
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
                                {/*<SelectIndicator*/}
                                {/*    options={SelectIndicatoroptions}*/}
                                {/*    placeholder="Select option"*/}
                                {/*    height={55}*/}
                                {/*    width={450}*/}
                                {/*    label="Receiving office"*/}
                                {/*    showLabel={true}*/}
                                {/*/>*/}

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
                            <button className={styles.buttons2}>Submit for Approval</button>
                        </div>
                    </div>

                </div>

            </div>
        </MainLayout>
    );
};

export default CreatePayslip;