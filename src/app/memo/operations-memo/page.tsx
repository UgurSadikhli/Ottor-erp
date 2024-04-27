"use client"
import Image from "next/image";
import MainLayout from "../../layouts/main-layout";
import React, { useState } from "react";
import styles from "./operations-memo.module.css";
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

const operationsMemo = () => {
    return (
        <MainLayout label="Create and send memos to designated offices." title=" Create Memo" icon={<LogisticsIcon color="url(#paint_linear_148_8598_0)"/>}>
            {/* <Header label="Make and send logistics request." title=" Logistics" icon={<LogisticsIcon color="url(#paint_linear_148_8598_0)" />}/> */}
            <div className={styles.main}>
                <div className={styles.top}>
                    <CustomButton
                        icon={<ArrowRightIcon color="black" />}
                        links="memo/create-memo"
                        label="Back"
                    />
                </div>
                <div className={styles.body}>
                    <div className={styles.body1}>
                        <div className={styles.body1Top}>
                            <span className={styles.span1}>Operations Memo</span>
                        </div>
                        <div className={styles.body1Bottom}>
                            <span className={styles.span}><b>Date:</b> 21/12/2022</span>
                            <span className={styles.span}><b>From:</b> Otor John Stephen</span>
                            <span className={styles.span}><b>To:</b> Abubakr Algazali</span>
                            <span className={styles.span}><b>CC1:</b> Fatimah Mohammed</span>
                            <span className={styles.span}><b>CC2:</b> Sadiq Lukman</span>
                            <span className={styles.span}><b>CC3:</b> Jemz Nweke Jnr.</span>
                            <span className={styles.span}><b>Attachment:</b> No</span>
                            <span className={styles.span}><b>Memo Message:</b> Lorem ipsum dolor sit amet consectetur. Purus lacinia pulvinar morbi praesent egestas senectus non neque sem. Fermentum mi ipsum dictumst ultricies mollis. Amet praesent convallis vivamus rhoncus. Volutpat sit aliquet elementum facilisi consectetur. Amet rhoncus varius iaculis et integer. In eu praesent consequat magnis erat penatibus a. Eu nulla cursus sagittis at gravida a proin sit augue. Massa integer ut interdum orci porta duis diam id pellentesque. Sem viverra iaculis quisque etiam phasellus nullam vestibulum gravida.</span>
                        </div>
                    </div>
                    <div className={styles.body2}>
                        <hr className={styles.hr}/>
                        <Image
                            src={image}
                            width={1100}
                            height={1000}
                            alt="Description of your image"
                        />
                        <hr className={styles.hr}/>
                    </div>
                    <div className={`${styles.body3} mt-3 mb-5`}>

                        <div className={"d-flex flex-row"}>
                            <p><b>Action: </b></p>
                            <p>Recommended for approval</p>
                        </div>


                        <div className={"d-flex flex-row"}>
                            <p><b>By: </b></p>
                            <p>Fatimah Mohammed</p>
                        </div>

                        <div className={"d-flex flex-row"}>
                            <p><b>Signature: </b></p>
                            <p></p>
                        </div>


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
                        <div className={styles.body3Button}>
                            <button className={styles.buttons1}> Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default operationsMemo;
