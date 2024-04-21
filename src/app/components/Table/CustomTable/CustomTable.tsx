"use client";
import React, { useState, useEffect,ReactElement } from "react";
import styles from "./CustomTable.module.css";
import Link from "next/link";
import CustomButton from "../../Buttons/CustomButton/CustomButton";


interface Props {
  blockTitle?: string;
  shownPerPage?: boolean;
  shownButton?: boolean;
  shownPagination?: boolean;
  headers: Array<{
    id: number;
    headerName: string;
  }>;
  innerData: Array<{
    [key: string]: any;
  }>;
  btnLabel?:string;
  btnLink?:string;
  btnIcon?:ReactElement;
}

const CustomTable = ({
  blockTitle,
  shownPerPage = false,
  shownButton = false,
  shownPagination = false,
  headers,
  innerData,
  btnLabel,
  btnLink,
  btnIcon
}: Props) => {
  const [numRowsToShow, setNumRowsToShow] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (!shownPerPage && !shownPagination) {
      setNumRowsToShow(innerData.length);
    }
  }, [shownPerPage, shownPagination, innerData]);

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

  const totalPages = Math.ceil(innerData.length / numRowsToShow);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const startIndex = (currentPage - 1) * numRowsToShow;
  const endIndex = startIndex + numRowsToShow;

  const getCellStyle = (header: string, data: string) => {
    if (header === "Status" && data === "Approved") {
      return { color: "#10A242" };
    } else if (header === "Status" && data === "Pending") {
      return { color: "#F29425" };
    } else if (header === "Status" && data === "Rejected") {
      return { color: "red" };
    } else if (header === "Variance (₦)" && data.startsWith("+")) {
      return { color: "green" }; 
    } else if (header === "Variance (₦)" && data.startsWith("-")) {
      return { color: "red" }; 
    }
    else if (header === "Action" && data === "View more") {
        return { color: "#14add6" }; 
      }
    return {};
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>{blockTitle}</div>
        {shownPerPage && (
          <div className={styles.showPerPage}>
            <span className={styles.showPerPageSpan}>Showing </span>
            <input
              className={styles.showPerPageInput}
              type="number"
              value={numRowsToShow}
              onChange={handleNumRowsChange}
            />
            <span className={styles.showPerPageSpan}> per row</span>
          </div>
        )}
        {shownButton && (
          <div className={styles.buttons}>
            {/* <Link href="/create-budget">
              <button className={styles.button}>Create Budget</button>
            </Link> */}
            <CustomButton label={btnLabel} links={btnLink} icon={btnIcon}/>
          </div>
        )}
      </header>
      <main className={styles.main}>
        <table className={`table table-hover ${styles.table}`}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.id}>{header.headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {innerData.slice(startIndex, endIndex).map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key, index) => (
                  <td
                    key={index}
                    style={getCellStyle(headers[index].headerName, item[key])}
                  >
                    {item[key]}
                  </td>
                ))}
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
              <div
                key={pageNumber}
                className={styles.paginationItem}
                onClick={() => handlePageClick(pageNumber)}
              >
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
