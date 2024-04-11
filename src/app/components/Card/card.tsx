import Image from "next/image";
import styles from "./Card.module.css";
import StaffIcon from "@/app/components/Icons/StaffIcon/StaffIcon";


export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <span className={styles.staffNumber}>250</span>
                    <span className={styles.staffTitle}>Total number of staff</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.icon}>
                        <StaffIcon color="#F29425"/>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <span className={styles.staffDescription}>12 more than last quarter</span>
            </div>


        </div>
    );
}
