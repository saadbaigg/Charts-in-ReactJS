import React from 'react';
import RechartsLineChart from './components/Recharts/RechartsLineChart'
import RechartsBarChart from './components/Recharts/RechartsBarChart';
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <RechartsLineChart />
      <RechartsBarChart />
    </div>
  );
}

export default App;
