import React from 'react';
import RechartsLineChart from './components/Recharts/RechartsLineChart'
import RechartsBarChart from './components/Recharts/RechartsBarChart';
import styles from './App.module.css'
import ChartJSLineChart from './components/ChartJS/ChartJSLineChart';

const App = () => {
  return (
    <div className={styles.container}>
      <RechartsLineChart />
      <RechartsBarChart />
      <ChartJSLineChart />
    </div>
  );
}

export default App;
