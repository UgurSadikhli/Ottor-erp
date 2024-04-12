import Image from "next/image";
import Table from "../components/Table/table";
import MainLayout from '../layouts/main-layout'
import Card from "../components/Card/card";
import styles from "./Dashboard.module.css";
import StaffIcon from "@/app/components/Icons/StaffIcon/StaffIcon";
import DocumentIcon from "@/app/components/Icons/DocumentIcon/DocumentIcon";
import RocketIcon from "@/app/components/Icons/RocketIcon/RocketIcon";
import PeopleIcon from "@/app/components/Icons/PeopleIcon/PeopleIcon";
import ArrowUpIcon from "@/app/components/Icons/ArrowUpIcon/ArrowUpIcon";
import ArrowDownIcon from "@/app/components/Icons/ArrowDownIcon/ArrowDownIcon";
import ChartCard from "@/app/components/ChartCard/ChartCard";


export default function Dashboard() {

    /*Table data start*/
    const tableData = [
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Approved"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Pending"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Rejected"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Approved"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Pending"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Rejected"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Approved"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Pending"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Rejected"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Rejected"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Rejected"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Rejected"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Rejected"],
        ["01", "Operation memo", "Otor John","Ibrahim Sadiq","Rejected"],

    ];
    const headers = ["S/N", "Memo Title", "Sent From","Sent To","Status"];
    /*Table data end*/


    return (
        <MainLayout>
            <div className={styles.container}>
                <div className={styles.top}>
                    <Card
                        number={"250"}
                        title="Total number of staff"
                        description="12 more than last quarter"
                        icon={<StaffIcon color={"#F29425"}/>}
                        arrowIcon={<ArrowUpIcon color="#10A242"/>}
                        backgroundColor="#FFF4E8"
                    />
                    <Card
                        number={"100"}
                        title="Total application"
                        description="0.2% lower than last quarter"
                        icon={<DocumentIcon color={"#248CD8"}/>}
                        arrowIcon={<ArrowDownIcon color={"#ED3237"}/>}
                        backgroundColor="#E8F5FF"

                    />
                    <Card
                        number={"10"}
                        title="Total projects"
                        description="2% more than last quarter"
                        icon={<RocketIcon color={"#A601FF"}/>}
                        arrowIcon={<ArrowUpIcon color="#10A242"/>}
                        backgroundColor="#F9EFFF"

                    />
                    <Card
                        number={"10"}
                        title="Total departments"
                        description=""
                        icon={<PeopleIcon color={"#10A242"}/>}
                        backgroundColor="#ECFFF2"

                    />
                </div>
                <div className={styles.body}>
                    <Table tableName={"Memo"} headers={headers} tableData={tableData}/>
                    <Table tableName={"Staff List"} headers={headers} tableData={tableData}/>
                    <Table tableName={"Payment Voucher"} headers={headers} tableData={tableData}/>
                    <ChartCard title={"Staff Applications Card"} />
                    {/*<Table tableName={"Staff Aplication Card"} headers={headers} tableData={tableData}/>*/}
                </div>
            </div>
        </MainLayout>
    );
}
