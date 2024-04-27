"use client"
import React, { useState, useEffect, ReactElement } from "react";
import styles from "./CustomTable.module.css";
import Link from "next/link";
import SimpleCustomButton from "../../Buttons/SimpleCustomButton/SimpleCustomButton";
import Image from "next/image";
import { borderRadius } from "@mui/system";

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
  btnLabel?: string;
  btnLink?: string;
  btnIcon?: ReactElement;
  viewTable?: string;
  onDelete?: (id: number) => void; 
  imageSRC?:string;
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
  btnIcon,
  viewTable = "",
  onDelete, 
  imageSRC="",
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
    if (value > 0) {
      setNumRowsToShow(value);
    }
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
    }else if (header === "Status" && data.startsWith("In stock")) {
      return { color: "#10A242" };
    }else if (header === "Status" && data.startsWith("Out of Stock")) {
      return { color: "#ED3237" };
    }else if (header === "Status" && data.startsWith("Low in stock")) {
      return { color: "#F29425" };
    }else if (header === "Status" && data.startsWith("All functioning")) {
      return { color: "#10A242" };
    } else if (header === "Status" && /^\d+ functioning$/.test(data)) {
      return { color: "#F29425" }; 
    }else if (header === "Status" && data.startsWith("Inprogress")) {
      return { color: "#F29425" };
    }else if (header === "Status" && data.startsWith("Completed")) {
      return { color: "#10A242" };
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
            <span className={styles.showPerPageSpan}> per page</span>
          </div>
        )}
        {shownButton && (
          <div className={styles.buttons}>
            <SimpleCustomButton
              label={btnLabel}
              links={btnLink}
              icon={btnIcon}
            />
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
  {innerData.slice(startIndex, endIndex).map((item, rowIndex) => (
    <tr key={rowIndex} >
      {Object.keys(item).map((key, colIndex) => (
        <td 
          key={colIndex}
          style={getCellStyle(headers[colIndex].headerName, item[key])}
        >
          {headers[colIndex].headerName === "Action" &&
            item[key] === "View more" ? (
              <a className={styles.view} href={viewTable}>{item[key]}</a>
            ) : headers[colIndex].headerName === "Action" &&
            item[key] === "Edit Delete" ? (
              <span>
                <button className={styles.edit}>Edit</button>{"  "}
                <button
                  className={styles.delete}
                  onClick={() => onDelete && onDelete(item.id)}
                >
                  Delete
                </button>
              </span>
            ) : headers[colIndex].headerName === "Image" ? (
              <img
                className={styles.Image}
                src={item[key]}
                alt="Image"
                width={50} 
                height={50}
                />
            ) : (
              item[key]
            )}
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
