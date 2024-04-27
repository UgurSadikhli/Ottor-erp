"use client";
import MainLayout from "../../layouts/main-layout";
import React, {useState} from "react";
import styles from "./create-memo.module.css";
import SelectIndicator from "../../components/SelectIndicator/SelectIndicator";
import InputField from "../../components/Input/input";
import FocusedRingTextarea from "../../components/TextArea/textArea";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import Link from "next/link";
import DatePickerValue from "@/app/components/Calendar/calendar";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import Header from "../../components/Header/header";
import CircularsIcon from "../../components/Icons/CircularsIcon/CircularsIcon";
import PlusIcon from "@/app/components/Icons/PlusIcon/PlusIcon";
import MemoIcon from "@/app/components/Icons/MemoIcon/MemoIcon";

const SelectIndicatoroptions = [
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
];

export default function createMemo() {
    return (
        <MainLayout
        label="Create and send memos to designated offices." title="Create Memo" icon={<MemoIcon/>}>
            {/* <Header label="Search for  and view all circulars" title=" Circulars" icon={<CircularsIcon color="url(#paint_linear_148_9976_0)" />}/> */}
            <div className={styles.main}>
                <div className={styles.top}>
                    <CustomButton links="circulars" label={"Back"} icon={<ArrowRightIcon color="red"/>}/>
                </div>
                <div className={styles.body}>
                    <div className={styles.bodyTop}>
                        <span className={styles.bodyTopText}>Create Memo</span>
                    </div>
                    <div className={styles.bodyCenter}>
                        <div className={styles.labelLeft}>
                            <InputField
                                label="Memo title"
                                placeholder="Enter title"
                                width={470}
                                height={50}
                            />

                            <div>
                                <SelectIndicator
                                    label="Action"
                                    options={SelectIndicatoroptions}
                                    placeholder="Select option"
                                    height={50}
                                    width={470}
                                    showLabel={true}
                                />
                                <span className={styles.label}>Date</span>
                                <DatePickerValue width={470}/>

                            </div>
                        </div>
                        <div className={styles.labelRight}>
                            <div className={styles.labelRightElem}>
                                <div className={styles.customRow}>
                                    <InputField
                                        label="Sent from"
                                        placeholder="Enter name"
                                        width={470}
                                        height={50}
                                    />


                                    <SelectIndicator
                                        options={SelectIndicatoroptions}
                                        placeholder="Select option"
                                        height={50}
                                        width={470}
                                        label="Sent to"
                                        showLabel={true}
                                    />
                                </div>
                                <div className={styles.customRow}>
                                    <button className={styles.plusButton}>
                                        <PlusIcon color="black"/>
                                    </button>

                                </div>
                                <div className={styles.customRow}>
                                    <SelectIndicator
                                        options={SelectIndicatoroptions}
                                        placeholder="Select option"
                                        height={50}
                                        width={470}
                                        label="Add Attachment?"
                                        showLabel={true}
                                    />


                                    <SelectIndicator
                                        options={SelectIndicatoroptions}
                                        placeholder="Select Type"
                                        height={50}
                                        width={470}
                                        label="Attachmen Type"
                                        showLabel={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bodyCenter}>
                        <div className={styles.labelLeftBottom}>
                            <span className={styles.label}>Memo Body</span>
                            <FocusedRingTextarea/>

                            <div className={styles.customRow}>
                                <Link
                                    href="/memo/operations-memo"
                                    passHref={true}
                                    legacyBehavior={true}
                                >
                                <button className={styles.buttons}>Attache Payment Voucher</button>
                                </Link>
                                <button className={styles.buttons2}>Send Memo</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
