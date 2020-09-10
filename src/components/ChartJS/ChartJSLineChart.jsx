import React from 'react'
import styles from './ChartJSLineChart.module.css'
import { Line } from 'react-chartjs-2'
import { ChartData } from '../../data'

const ChartJSLineChart = () => {

    return (
        <div className={styles.container}>
            <div>
                <h1>Chart.js</h1>
                <p>Line Chart</p>
            </div>
            <div className={styles.chartContainer}>
                <Line
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

export default ChartJSLineChart