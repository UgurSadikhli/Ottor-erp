"use client";
import MainLayout from "../../layouts/main-layout"
import styles from './create-payment-voucher.module.css'
import InputField from "@/app/components/Input/input";
import IconButton from "@/app/components/IconButton/iconButton";
import PlusIcon from "@/app/components/Icons/PlusIcon/PlusIcon"
import React from "react";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function CreatePaymentVoucher() {

    const SelectIndicatoroptions = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ];

    return (
        <MainLayout>

<div className={styles.main}>

            <div className={`${styles.MainContainer}`}>
                <h2 className="mb-4">Payment Voucher</h2>

                <div className="row">
                    <div className="col-md-4">
                        <InputField
                            label="Subject"
                            placeholder="Enter subject"
                            width={700}
                            height={55}
                        />
                    </div>
                </div>

                <div className="row mt-5">

                    <table className="table table-bordered">
                        <thead className={styles.customTableHead}>
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Class</th>
                            <th scope="col">Description</th>
                            <th scope="col">QTY</th>
                            <th scope="col">Unit Price (₦)</th>
                            <th scope="col">Amount (₦)</th>
                            <th scope="col">VAT %</th>
                            <th scope="col">VAT Amount (₦)</th>
                            <th scope="col">Gross Amount (₦)</th>
                            <th scope="col">WHT%</th>
                            <th scope="col">WHT Amount</th>
                            <th scope="col">Net Amount</th>
                        </tr>
                        </thead>
                        <tbody className={styles.customTableBody}>
                        <tr>
                            <td>01</td>
                            <td>Consultancy service</td>
                            <td>FARS</td>
                            <td>1</td>
                            <td>1,000,000.00</td>
                            <td>1,000,000.00</td>
                            <td>7,50%</td>
                            <td>75,000.00</td>
                            <td>1,075,000.00</td>
                            <td>2.5%</td>
                            <td>25,000.00</td>
                            <td>1,050,000.00</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Consultancy service</td>
                            <td>FARS</td>
                            <td>1</td>
                            <td>1,000,000.00</td>
                            <td>1,000,000.00</td>
                            <td>7,50%</td>
                            <td>75,000.00</td>
                            <td>1,075,000.00</td>
                            <td>2.5%</td>
                            <td>25,000.00</td>
                            <td>1,050,000.00</td>
                        </tr>
                        </tbody>
                    </table>

                    <Stack direction="row" spacing={3}>
                        <Button
                            className={styles.buttons}
                            startIcon={<PlusIcon color={"#000"}/>}
                            sx={{fontSize: "15px", textTransform: "none"}}>
                            Add another row
                        </Button>

                    </Stack>

                    <table className="table table-bordered mt-4">
                        <thead className={`${styles.customTableHead} ${styles.customTableHead2}`}>
                        <tr>
                            <th scope="col">Total</th>
                            <th scope="col">1,500,000.00</th>
                            <th scope="col">1,500,000.00</th>
                            <th scope="col">112,500.00</th>
                            <th scope="col">75,000.00</th>
                            <th scope="col">1,537,500.00</th>
                        </tr>
                        </thead>
                    </table>

                </div>

                <div className="row mt-2">
                    <div className="col-md-12">
                        <div className={styles.labelContainer}>
                            <span className={styles.labelText}>Net Amount in words:</span>
                            <div className={styles.dotted}></div>
                        </div>
                    </div>
                </div>



                <div className={"mt-5"}>
                    <h4 className="mb-4"><b>Beneficiary Payment Details</b></h4>

                    <div className="row mt-3">
                        <div className="col-md-4">
                            <InputField
                                label="Account name"
                                placeholder="Enter name"
                                width={400}
                                height={55}
                            />
                        </div>
                        <div className="col-md-4">

                            <InputField
                                label="Account number"
                                placeholder="Enter number"
                                width={400}
                                height={55}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputField
                                label="Bank name"
                                placeholder="Enter bank name"
                                width={400}
                                height={55}
                            />
                        </div>
                    </div>
                    <div className="row mt-3 align-items-end">
                        <div className="col-md-4">
                            <button className={styles.CreateButton}>Submit Payment Voucher</button>
                        </div>
                    </div>
                </div>


            </div>

</div>


        </MainLayout>
    );
}