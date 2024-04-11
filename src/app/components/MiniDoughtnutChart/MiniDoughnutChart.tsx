"use client"

import React, { useState, useEffect } from 'react';
import styles from "./MiniDoughnutChart.module.css";
import { Chart } from 'primereact/chart';
export default function MiniDoughnutChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            datasets: [
                {
                    data: [80, 370, 50],
                    backgroundColor: [
                        '#F29425', // Blue
                        '#10A242', // Yellow
                        '#E64F53'  // Green
                    ],
                    hoverBackgroundColor: [
                        '#F29425', // Blue
                        '#10A242', // Yellow
                        '#E64F53'  // Green
                    ]
                }
            ]
        };
        const options = {
            cutout: '47%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className={styles.container}>
            <Chart type="doughnut" data={chartData} options={chartOptions} className={styles.test} />
        </div>
    )
}
        