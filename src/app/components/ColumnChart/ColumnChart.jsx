import * as React from "react";
import Stack from "@mui/material/Stack";
import { BarChart } from "@mui/x-charts/BarChart";
import { legendClasses } from "@mui/x-charts/ChartsLegend";
import styles from "./ColumnChart.module.css";
import { borderLeft, borderRadius, color } from "@mui/system";

export default function ColumnChart() {
  const barChartsParams = {
    xAxis: [
      {
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        scaleType: "band",
      },
    ],
    series: [
      {
        data: [290, 390, 390, 320, 317,317, 425, 375, 290, 460,420,430],
        stack: "1",
        label: "Net salary",
        color: "#248CD8",
      },
      {
        data: [0, 30, 0, 0, 40,0, 0, 0, 0, 0,0,65],
        stack: "1",
        label: "Tax",
        color: "#A601FF",
      },
      {
        data: [40, 100, 100, 100, 70,40, 50, 45, 30, 50,50,65],
        stack: "1",
        label: "Loan",
        color: "#F29425",
      },
    ],
    sx: {
      [`& .${legendClasses.root}`]: {
        display: "none",
      },
    },
    height: 260,
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ height: "14vh", width: "100%", m: 1 }}
    >
      <div style={{ flexGrow: 1 }}>
        <div className={styles.main}>
          <div className={styles.head}>
            <span className={styles.Title}>Annual payroll summary</span>
            <div className={styles.headLeft}>
              <div className={styles.square}>
                <div className={styles.square1}> </div>
                <span className={styles.Title1}>Net salary</span>
              </div>

              <div className={styles.square}>
                <div className={styles.square2}></div>
                <span className={styles.Title1}>Tax</span>
              </div>

              <div className={styles.square}>
                <div className={styles.square3}></div>
                <span className={styles.Title1}>Loan</span>
              </div>
            </div>
          </div>
          <BarChart {...barChartsParams} />
        </div>
      </div>
    </Stack>
  );
}
