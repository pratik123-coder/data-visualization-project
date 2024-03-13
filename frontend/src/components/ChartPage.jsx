import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Typography, Paper } from '@mui/material';

const ChartPage = ({ data }) => {
  return (<>
  <div>
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Salary Chart
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#ff0000" name="Salary less than 20k" />
          <Bar dataKey="salary" fill="#00ff00" name="Salary greater than 100k" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
    </div>
    </>

  );
};

export default ChartPage;
