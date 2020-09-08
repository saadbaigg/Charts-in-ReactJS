import React from 'react'
import styles from './RechartsLineChart.module.css'
import { data } from '../../data'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const RechartsLineChart = () => {

    return (
        <div className={styles.container}>
            <h1>Recharts</h1>
            <p>Line Chart</p>
            <div className={styles.chartContainer}>
                <LineChart 
                    width={1200} 
                    height={500} 
                    data={data}
                >
                    <CartesianGrid stroke="#ccc" />
                    <XAxis 
                        dataKey="name" 
                    />
                    <YAxis />
                    <Line type="monotone" dataKey="uv" stroke="red" />
                    <Line type="monotone" dataKey="pv" stroke="green" />
                    <Line type="monotone" dataKey="amt" stroke="blue" />
                </LineChart>
            </div>
        </div>
    );
}

export default RechartsLineChart;
