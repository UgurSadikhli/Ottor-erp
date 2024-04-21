"use client";
import MainLayout from "../../layouts/main-layout"
import styles from './payslip-details.module.css'
import React from "react";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import Link from "next/link";
export default function PayslipDetails() {


    return (
        <MainLayout>

            <div className={styles.main}>


                <div className={styles.top}>
                    <CustomButton icon={<ArrowRightIcon color="black"/>} links="payroll" label="Back"/>
                </div>


                <div className={` ${styles.createBudgetContainer} mt-4`}>
                    <div className={"d-flex flex-column"}>
                        <span className={styles.title}>Ahmad Ahmadzada</span>
                        <span className={styles.minorText}>Managing Director | MD/CEO</span>

                    </div>
                    <div>
                        <Link href="#">
                            <button className={styles.buttons}>Edit Payslip</button>
                        </Link>
                    </div>
                </div>

                <div className={`${styles.MainContainer} mt-5`}>

                    <h4><b>Salary Payslip</b></h4>
                    <div className={"d-flex flex-row"}>
                        <label className={"me-5"}>Month: January</label>
                        <label>Year: 2023</label>

                    </div>


                    <div className={"d-flex flex-row mt-3"}>
                        <table className={`table ${styles.customBorderTable}`}>

                            <thead>
                            <tr>
                                <th scope="col">Salary Structure</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Basic Salary</td>
                                <td>445,331</td>
                            </tr>
                            <tr>
                                <td scope="row">Housing Allowance</td>
                                <td>222,666</td>
                            </tr>
                            <tr>
                                <td scope="row">Transport Allowance</td>
                                <td>89,066</td>
                            </tr>
                            <tr>
                                <td scope="row">Utility Allowance</td>
                                <td>44,533</td>
                            </tr>
                            <tr>
                                <td scope="row">Productivity Allowance</td>
                                <td>89,066</td>
                            </tr>
                            <tr>
                                <td scope="row">Communication Allowance</td>
                                <td>66,800</td>
                            </tr>
                            <tr>
                                <td scope="row">Inconvenience Allowance</td>
                                <td>66,800</td>
                            </tr>
                            <tr>
                                <td scope="row"><b>Gross Salary</b></td>
                                <td><b>1,024,261</b></td>
                            </tr>
                            </tbody>

                        </table>

                        <table className={`table ${styles.customBorderTable}`}>

                            <thead>
                            <tr>
                                <th scope="col">Deductions</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Tax/PAYE</td>
                                <td>163,696</td>
                            </tr>
                            <tr>
                                <td scope="row">Employee Pension</td>
                                <td>60,565</td>
                            </tr>
                            <tr>
                                <td scope="row">Total Deduction</td>
                                <td>224,261</td>
                            </tr>
                            <tr>
                                <td scope="row"><b>Net Salary</b></td>
                                <td><b>800,000</b></td>
                            </tr>

                            </tbody>

                            <tfoot>
                                <label className={styles.tableBottomText}>Net Salary in Words:   Eight Hundred Thousand Naira Only</label>
                            </tfoot>


                        </table>


                    </div>


                </div>

            </div>


        </MainLayout>
    );
}
