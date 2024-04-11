import Image from "next/image";
import Table from "../components/Table/table";
import MainLayout from '../layouts/main-layout'
import Card from "../components/Card/card";
import styles from "./Dashboard.module.css";
export default function Dashboard() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.top}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className={styles.body}>
        {/*<Table />*/}
        {/*<Table />*/}
        {/*<Table />*/}
        {/*<Table />*/}
        </div>
      </div>
    </MainLayout>
  );
}
