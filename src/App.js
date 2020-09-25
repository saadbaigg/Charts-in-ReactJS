import React from 'react';
import RechartsLineChart from './components/Recharts/RechartsLineChart'
import RechartsBarChart from './components/Recharts/RechartsBarChart';
import styles from './App.module.css'
import ChartJSBarChart from './components/ChartJS/ChartJSBarChart';
import ChartJSLineChart from './components/ChartJS/ChartJSLineChart';
import ApexChart from './components/ApexCharts/ApexChart';

const App = () => {
  return (
    <div className={styles.container}>
      <RechartsLineChart />
      <RechartsBarChart />
      <ChartJSBarChart />
      <ChartJSLineChart />
      <ApexChart />
    </div>
  );
}

export default App;
