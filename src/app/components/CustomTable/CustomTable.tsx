// components/CustomTable.tsx

import React, { useState } from 'react';
import styles from './CustomTable.module.css';

interface CustomTableProps {
  data: any[]; // Your table data
}

const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
  const [numRowsToShow, setNumRowsToShow] = useState<number>(5); // State to track the number of rows to show
  const [startIndex, setStartIndex] = useState<number>(0); // State to track the starting index of displayed rows

  const showNextRows = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + numRowsToShow, data.length));
  };

  const showPreviousRows = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - numRowsToShow, 0));
  };

  return (
    <div>
      <div className={styles.navButtons}>
        <button onClick={showPreviousRows} disabled={startIndex === 0}>
          Previous
        </button>
        <button onClick={showNextRows} disabled={startIndex + numRowsToShow >= data.length}>
          Next
        </button>
      </div>
      <input
        type="number"
        value={numRowsToShow}
        onChange={(e) => setNumRowsToShow(parseInt(e.target.value))}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.slice(startIndex, startIndex + numRowsToShow).map((item, index) => (
            <tr key={index}>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
