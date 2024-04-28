import React from "react";
import "./table.css";

interface TableProps {
    tableName: string;
    headers: string[];
    tableData: string[][];
}

export default function Table({tableName, headers, tableData}: TableProps) {


    return (
        <div className="table_div_main">
            <div className="table_name">
                <span className="table_name_span">{tableName}</span>
            </div>

            <div className="table_div">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {rowData.map((data, cellIndex) => (
                                <td key={cellIndex} style={getCellStyle(headers[cellIndex], data)}>
                                    {data}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function getCellStyle(header: string, data: string): React.CSSProperties {
    if (header === "Status" && data === "Approved") {
        return {color: "#10A242"};
    } else if (header === "Status" && data === "Pending") {
        return {color: "#F29425"};
    } else if (header === "Status" && data === "Rejected") {
        return {color: "red"};
    }
    return {};
}
