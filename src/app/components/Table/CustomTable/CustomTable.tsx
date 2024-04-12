"use client"
import React, { useState } from 'react';
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

const CustomTable = ({ blockTitle, shownPerPage = false, shownButton = false, shownPagination = false, tableData }: Props) => {
    const [numRowsToShow, setNumRowsToShow] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleNumRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setNumRowsToShow(value);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(tableData.innerData.length / numRowsToShow);

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const startIndex = (currentPage - 1) * numRowsToShow;
    const endIndex = startIndex + numRowsToShow;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.title}>{blockTitle}</div>
                {shownPerPage && (
                    <div className={styles.showPerPage}>
                        <span className={styles.showPerPageSpan}>Showing </span>
                        <input className={styles.showPerPageInput} type="number" value={numRowsToShow} onChange={handleNumRowsChange} />
                        <span className={styles.showPerPageSpan}> per row</span>

                    </div>
                )}
                {shownButton && (
                    <div className={styles.buttons}>
                        <Link href="/create-budget">
                            <button className={styles.button}>Create Budget</button>
                        </Link>
                    </div>
                )}
            </header>
            <main className={styles.main}>
                <table className={`table table-hover ${styles.table}`}>
                    <thead>
                        <tr>
                            {tableData.headers.map((header) => (
                                <th key={header.id}>{header.headerName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.innerData.slice(startIndex, endIndex).map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.memoTitle}</td>
                                <td>{item.sentFrom}</td>
                                <td>{item.sentTo}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            {shownPagination && (
                <footer className={styles.footer}>
                    <div className={styles.paginationContainer}>
                        {currentPage > 1 && (
                            <div className={styles.paginationItem} onClick={handlePrevPage}>
                                <span aria-label="Previous">&lsaquo;&lsaquo;</span>
                            </div>
                        )}
                        {getPageNumbers().map((pageNumber) => (
                            <div key={pageNumber} className={styles.paginationItem} onClick={() => handlePageClick(pageNumber)}>
                                <span>{pageNumber}</span>
                            </div>
                        ))}
                        {currentPage < totalPages && (
                            <div className={styles.paginationItem} onClick={handleNextPage}>
                                <span aria-label="Next">&rsaquo;&rsaquo;</span>
                            </div>
                        )}
                    </div>
                </footer>
            )}
        </div>
    );
};

export default CustomTable;
