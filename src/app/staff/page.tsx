"use client";
import MainLayout from "../layouts/main-layout";
import React, {useEffect, useState} from "react";
import styles from "./staff.module.css";
import FloatingLabelInput from "../components/IconInput/input";
import SelectIndicator from "../components/SelectIndicator/SelectIndicator";
import MagnifierIcon from "../components/Icons/MagnifierIcon/MagnifierIcon";
import Link from "next/link";
import CustomTable from "../components/Table/CustomTable/CustomTable";
import HeaderStaffIcon from "../components/Icons/HeaderStaffIcon/HeaderStaffIcon";

const SelectIndicatoroptions = [
    { value: "allStaff", label: "All Staff" },
    { value: "adminStaff", label: "Admin Staff" },
    { value: "itStaff", label: "IT Staff" },
    { value: "humanResourcesStaff", label: "Human Resources Staff" },

];
const headersStaff = [
    { id: 1, headerName: "S/N" },
    { id: 2, headerName: "First Name" },
    { id: 3, headerName: "Last Name" },
    { id: 4, headerName: "Gender" },
    { id: 5, headerName: "Phone Number" },
    { id: 6, headerName: "Role" },
    { id: 7, headerName: "Designation" },
    { id: 8, headerName: "Action" },

];







interface StaffEmployee {
    id: number;
    email: string;
    officialEmail?: string;
    emailConfirmed: boolean;
    name: string;
    surname: string;
    password: string;
    phoneNumber?: string;
    gender?: string;
    role?: string;
    designation?: string;
    staffId: string;
    profileImage?: string;
}
export default function Staff() {
    const [inputValue, setInputValue] = useState("");
    const [tableData, setTableData] = useState([]);



    const handleInputValueChange = (value: string) => {
        setInputValue(value);
    };

    const getAllEmployees = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/staff/get-all-employees", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            if (responseData) {
                const newData = responseData.map((item:StaffEmployee) => [
                    item.id,
                    item.name,
                    item.surname,
                    item.gender,
                    item.phoneNumber,
                    item.role,
                    item.designation,
                    "Edit Delete"
                ]);

                setTableData(newData);
            }
        } catch (error) {
            console.error("Error getting staff list: ", error);
        }
    };


    useEffect(() => {
        setTableData([]);


        getAllEmployees();
    }, []);



    const onDeleteStaffEmployee =async (id: number) => {
        console.log(`id: ${id}`);
        const data={
            "id":id
        }
        try {
            const response = await fetch(
                "http://localhost:3000/api/staff/delete-employee",
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                console.log("response delete is ok");
                setTableData([]);
                getAllEmployees();
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error loginning user:", error);
        }
    };

    return (
        <MainLayout icon={<HeaderStaffIcon />} label="View, search for and add new staff" title=" All Staff" >
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.VeryleftLeft}>
                        <div className={styles.Veryleft}>
                            <span className={styles.text}>Quick search a staff</span>
                            <FloatingLabelInput
                                value={inputValue}
                                icon={<MagnifierIcon color="black" />}
                                onChange={handleInputValueChange}
                            />
                        </div>
                        <div className={styles.left}>
                            <span className={styles.circularsCount}>250</span>
                            <span className={styles.text}>Total circulars</span>
                        </div>
                    </div>
                    <div  className={styles.rightVeryRight}>
                        <div className={styles.right}>
                            <span className={styles.text}>Filter staff</span>
                            <SelectIndicator
                                options={SelectIndicatoroptions}
                                placeholder="All staff"
                                height={50}
                                width={300}
                                label="Filter staff"
                                showLabel={false}
                            />
                        </div>

                        <div className={styles.Veryright}>
                            <Link
                                href="/staff/add-new-staff"
                                passHref={true}
                                legacyBehavior={true}
                            >
                                <button className={styles.buttons}>Add New Staff</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    <CustomTable
                        blockTitle="All Staff"
                        shownPerPage
                        shownPagination
                        headers={headersStaff}
                        onDelete={onDeleteStaffEmployee}
                        innerData={tableData}
                        editLink={"/staff/edit-staff"}
                        viewTable="/staff/edit-staff"
                    />
                </div>
            </div>
        </MainLayout>
    );
}
