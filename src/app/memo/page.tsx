"use client";
import MainLayout from '../layouts/main-layout'
import React, {useState} from "react";
import styles from "./memo.module.css"
import FloatingLabelInput from "@/app/components/IconInput/input";
import MagnifierIcon from "@/app/components/Icons/MagnifierIcon/MagnifierIcon";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";
import Link from "next/link";
import CustomTable from "@/app/components/Table/CustomTable/CustomTable";



const SelectIndicatoroptions = [
  { value: "allStaff", label: "All Staff" },
  { value: "adminStaff", label: "Admin Staff" },
  { value: "itStaff", label: "IT Staff" },
  { value: "humanResourcesStaff", label: "Human Resources Staff" },

];
const headers = [
  { id: 1, headerName: "S/N" },
  { id: 2, headerName: "Memo Title" },
  { id: 3, headerName: "Sent From" },
  { id: 4, headerName: "Sent To" },
  { id: 5, headerName: "Date" },
  { id: 6, headerName: "Attachment?" },
  { id: 7, headerName: "Memo Type" },
  { id: 8, headerName: "Action" },
];




const innerData = [
  { id: 1, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022", Attachment:"Yes" ,Circular:"Sent↗",Action:"View more"},
  { id: 2, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 3, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"Yes" ,Circular:"Sent↗",Action:"View more"},
  { id: 4, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Sent↗",Action:"View more"},
  { id: 5, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"Yes" ,Circular:"Sent↗",Action:"View more"},
  { id: 6, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"Yes" ,Circular:"Received↙",Action:"View more"},
  { id: 7, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 8, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"Yes" ,Circular:"Received↙",Action:"View more"},
  { id: 9, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 10, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 11, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 12, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 13, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 14, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 15, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 16, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 17, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 18, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 19, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},
  { id: 20, Title: "HR Circular for Operations Department Staff", sentFrom: "Admin, HR", sentTo: "Operations Staffs", Date: "16/11/2022",Attachment:"No" ,Circular:"Received↙",Action:"View more"},

];


export default function memo() {

  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (value: string) => {
    setInputValue(value);
    console.log(inputValue);
  };

  return (
      <MainLayout
          label="Create and send memos to designated offices." title="Memo">

        <div className={styles.main}>
          <div className={styles.top}>
            <div className={styles.VeryleftLeft}>
              <div className={styles.Veryleft}>
                <span className={styles.circularsCount}>300</span>
                <span className={styles.text}>Total memo</span>
              </div>
              <div className={styles.left}>
                <span className={styles.text}>Quick search a memo</span>
                <FloatingLabelInput
                    value={inputValue}
                    icon={<MagnifierIcon color="black"/>}
                    onChange={handleInputValueChange}
                />
              </div>
            </div>
            <div className={styles.rightVeryRight}>
              <div className={styles.right}>
                <span className={styles.text}>Filter memo</span>
                <SelectIndicator
                    options={SelectIndicatoroptions}
                    placeholder="All memos"
                    height={50}
                    width={300}
                    label="Filter memos"
                    showLabel={false}
                />
              </div>

              <div className={styles.Veryright}>
                <Link
                    href="/memo/create-memo"
                    passHref={true}
                    legacyBehavior={true}
                >
                  <button className={styles.buttons}>Create memo</button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.body}>
            <CustomTable
                blockTitle="All Memos"
                shownPerPage
                shownPagination
                headers={headers}
                innerData={innerData}
                viewTable="/staff/edit-staff"
            />
          </div>
        </div>
      </MainLayout>
  );
}
