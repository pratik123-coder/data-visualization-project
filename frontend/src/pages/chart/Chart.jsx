import React, { useEffect, useState } from 'react';
import ChartPage from '../../components/ChartPage';
import axios from 'axios';

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get('http://localhost:8001/api/users/user-data');
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching chart data:', error.message);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div className='h-screen w-full'>
      <h1>Chart Page</h1>
      <ChartPage data={chartData} />
    </div>
  );
};

export default Chart;
