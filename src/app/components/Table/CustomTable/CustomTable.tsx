import React from 'react';
import styles from './CustomTable.module.css';
import Link from "next/link";

interface TableData {
    headers: Array<{
        id: number;
        headerName: string;
    }>;
    innerData: Array<{
        id: number;
        memoTitle: string;
        sentFrom: string;
        sentTo: string;
        status: string;
    }>;
}

interface Props {
    blockTitle?: string;
    shownPerPage?: boolean;
    shownButton?: boolean;
    shownPagination?: boolean;
    tableData: TableData;
}

const CustomTable = ({blockTitle, shownPerPage = false, shownButton = false, shownPagination = false, tableData} : Props) => {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.title}>{blockTitle}</div>
                {
                    shownPerPage &&
                    <div className={styles.showPerPage}>
                        <span></span>
                        <input type="text"/>
                        <span></span>
                    </div>
                }
                {
                    shownButton &&
                    <div className={styles.buttons}>
                        <Link href="/create-budget">
                            <button className={styles.button}>Create Budget</button>
                        </Link>
                    </div>
                }
            </header>
            <main className={styles.main}>
                <table className={`table table-hover ${styles.table}`}>
                    <thead>
                    <tr>
                        {
                            tableData.headers.map((header) => (
                                <th key={header.id}>{header.headerName}</th>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tableData.innerData.map((item, index)=> (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.memoTitle}</td>
                                <td>{item.sentFrom}</td>
                                <td>{item.sentTo}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </main>
            {
                shownPagination &&
                <footer className={styles.footer}>
                    <div className={styles.paginationContainer}>
                        <div className={styles.paginationItem}>
                            <span aria-label="Previous">&lsaquo;&lsaquo;</span>
                        </div>
                        <div className={styles.paginationItem}>
                            <span aria-label="Next">1</span>
                        </div>
                        <div className={styles.paginationItem}>
                            <span aria-label="Next">2</span>
                        </div>
                        <div className={styles.paginationItem}>
                            <span aria-label="Next">3</span>
                        </div>
                        <div className={styles.paginationItem}>
                            <span aria-label="Next">&rsaquo;&rsaquo;</span>
                        </div>
                    </div>
                </footer>
            }

        </div>
    );
};

export default CustomTable;