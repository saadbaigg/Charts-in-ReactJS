import React from 'react';
import RechartsLineChart from './components/Recharts/RechartsLineChart'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <RechartsLineChart />
    </div>
  );
}

export default App;
