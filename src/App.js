import React from 'react';
import RechartsLineChart from './components/Recharts/RechartsLineChart'
import RechartsBarChart from './components/Recharts/RechartsBarChart';
import styles from './App.module.css'
import ChartJSBarChart from './components/ChartJS/ChartJSBarChart';

const App = () => {
  return (
    <div className={styles.container}>
      <RechartsLineChart />
      <RechartsBarChart />
      <ChartJSBarChart />
    </div>
  );
}

export default App;
