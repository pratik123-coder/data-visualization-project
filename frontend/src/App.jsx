// App.js
import * as React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Chart from '../Pages/Chart';

function App() {
  const [chartData, setChartData] = React.useState([]);

  React.useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/user-data');
        setChartData(response.data.users); 
      } catch (error) {
        console.error('Error fetching chart data:', error.message);
      }
    };

    fetchChartData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/chart" element={<Chart data={chartData} />} />
      </Routes>
    </Router>
  );
}

export default App;
