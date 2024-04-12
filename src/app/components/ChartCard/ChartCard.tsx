import React, {ReactElement} from 'react';
import styles from "./ChartCard.module.css";
import MiniDoughnutChart from "@/app/components/MiniDoughtnutChart/MiniDoughnutChart";


interface ChartCardProps {
    title: string;
    Totalnumber:number;
    pending:number;
    approved:number;
    rejected:number;
  
}
const ChartCard = ({ title,Totalnumber,pending,approved,rejected }: ChartCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.staffTitle}>{title}</span>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <span className={styles.totalTitle}>{Totalnumber} Total applications</span>
                    <div className={styles.totalContainer}>
                        <div className={styles.totalFigure1}></div>
                         <span className={styles.totalItems}><b>{pending}</b> Pending</span>
                    </div>
                    <div className={styles.totalContainer}>
                        <div className={styles.totalFigure2}></div>
                       <span className={styles.totalItems}> <b>{approved}</b> Approved</span>
                    </div>
                    <div className={styles.totalContainer}>
                        <div className={styles.totalFigure3}></div>
                       <span className={styles.totalItems}> <b>{rejected}</b> Rejected</span>
                    </div>
                </div>
                <div className={styles.right}>
                    <MiniDoughnutChart yellow={pending} red={rejected} green={approved}/>
                </div>
            </div>
            <div className={styles.bottom}>

            </div>
        </div>
    );
};

export default ChartCard;