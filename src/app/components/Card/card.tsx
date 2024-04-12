import Image from "next/image";
import styles from "./Card.module.css";
import { ReactElement, ReactNode } from "react";
import ArrowUpIcon from "@/app/components/Icons/ArrowUpIcon/ArrowUpIcon";

interface CardProps {
    number: string;
    title: string;
    description: string;
    icon?: ReactElement;
    arrowIcon?: ReactElement;
    backgroundColor:string;
}

export default function Card({ number, title, description, icon,arrowIcon,backgroundColor}: CardProps): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <span className={styles.staffNumber}>{number}</span>
                    <span className={styles.staffTitle}>{title}</span>
                </div>
                <div className={styles.right}>

                    <div className={styles.icon} style={{ backgroundColor }}>
                        {icon}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                {arrowIcon}
                <span className={styles.staffDescription}>{description}</span>
            </div>
        </div>
    );
}
