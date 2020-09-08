import React from 'react';
import { data } from '../../data'
import styles from './RechartsBarChart.module.css'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const RechartsBarChart = () => {

    return (
        <div className={styles.container}>
            <h1>Recharts</h1>
            <p>Line Chart</p>
            <div className={styles.chartContainer}>
                <BarChart
                    width={1200} 
                    height={500} 
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    )
}

export default RechartsBarChart