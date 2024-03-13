import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Chart from './pages/chart/Chart';


function App() {
  return (
    <div className="min-h-screen ">
      <Routes>
				<Route path='/' element={<Chart />} />
			</Routes>
    </div>
  );
}

export default App;
