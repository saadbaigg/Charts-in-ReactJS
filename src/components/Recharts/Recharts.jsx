import React, {} from 'react'
import styles from './Recharts.module.css'
import { data } from '../../data'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import { renderCustomAxisTick } from './CustomAxisTick'


const Recharts = () => {

    return (
        <div className={styles.container}>
            <h1>Recharts</h1>
            <div className={styles.chartContainer}>
                <LineChart 
                    width={1200} 
                    height={500} 
                    data={data}
                >
                    <Line type="monotone" dataKey="uv" stroke="red" />
                    <Line type="monotone" dataKey="pv" stroke="green" />
                    <Line type="monotone" dataKey="amt" stroke="blue" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis 
                        dataKey="name" 
                        // tick={renderCustomAxisTick} 
                    />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    );
}

export default Recharts;
