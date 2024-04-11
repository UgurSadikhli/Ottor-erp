import React, {ReactElement} from 'react';
import styles from "./ChartCard.module.css";
import MiniDoughnutChart from "@/app/components/MiniDoughtnutChart/MiniDoughnutChart";


interface ChartCardProps {
    title: string;
    // number: number;
    // description: string;
    // icon?: ReactElement;
    // arrowIcon?: ReactElement;
    // backgroundColor:string;
}
const ChartCard = ({ title }: ChartCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.staffTitle}>{title}</span>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <span className={styles.totalTitle}>500 Total applications</span>
                    <div className={styles.totalContainer}>
                        <div className={styles.totalFigure}></div>
                         <span className={styles.totalItems}><b>80</b> Pending</span>
                    </div>
                    <div className={styles.totalContainer}>
                        <div className={styles.totalFigure}></div>
                       <span className={styles.totalItems}> <b>370</b> Approved</span>
                    </div>
                    <div className={styles.totalContainer}>
                        <div className={styles.totalFigure}></div>
                       <span className={styles.totalItems}> <b>50</b> Rejected</span>
                    </div>
                </div>
                <div className={styles.right}>
                    <MiniDoughnutChart/>
                </div>
            </div>
            <div className={styles.bottom}>

            </div>
        </div>
    );
};

export default ChartCard;