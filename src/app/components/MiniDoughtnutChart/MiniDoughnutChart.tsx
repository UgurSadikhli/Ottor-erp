"use client"
import React, { useState, useEffect } from 'react';
import styles from "./MiniDoughnutChart.module.css";
import { Chart } from 'primereact/chart';


interface MiniDoughnutChartProps {
    yellow: number;
    green: number;
    red: number;
   
}
export default function MiniDoughnutChart({yellow,green,red}:MiniDoughnutChartProps) {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            datasets: [
                {
                    data: [yellow, green,red],
                    backgroundColor: [
                        '#F29425', 
                        '#10A242', 
                        '#E64F53'  
                    ],
                    hoverBackgroundColor: [
                        '#F29425', 
                        '#10A242', 
                        '#E64F53'  
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
        