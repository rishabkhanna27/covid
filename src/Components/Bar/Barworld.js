import React, { Component, useState, useEffect } from 'react';
import { Line, Bar} from 'react-chartjs-2';
import styles from './Bar.module.css';

import { fetchDailyData } from '../Tabs/World';


export const Barr = ({ data: { cases, recovered, deaths, country }}) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  
//console.log(cases, recovered, deaths);
const barChart = (
    cases ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [cases, recovered, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          // title: { display: true, text: `Country Name ${country}` },
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {barChart}
    </div>
  );
};

export default Barr;
