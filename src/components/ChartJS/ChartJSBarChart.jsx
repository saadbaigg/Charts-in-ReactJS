import React from 'react'
import styles from './ChartJSBarChart.module.css'
import { Bar } from 'react-chartjs-2'
import { ChartData } from '../../data'

const ChartJSBarChart = () => {

    return (
        <div className={styles.container}>
            <div>
                <h1>Chart.js</h1>
                <p>Bar Chart</p>
            </div>
            <div className={styles.chartContainer}>
                <Bar
                    data={ChartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Largest Cities',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        },
                        responsive: true,
                    }}
                />
            </div>
        </div>
    )
}

export default ChartJSBarChart