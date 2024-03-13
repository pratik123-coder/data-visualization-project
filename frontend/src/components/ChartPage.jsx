import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Paper, Typography, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from '@mui/material';

const ChartPage = ({ data }) => {
  const theme = useTheme();

  return (
    <Paper elevation={3} sx={{ padding: 20, margin: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Salary Chart
      </Typography>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="salary"
          fill={theme.palette.error.main} // Use theme for color
          name="Salary less than 20k"
        />
        <Bar
          dataKey="salary"
          fill={theme.palette.success.main} // Use theme for color
          name="Salary greater than 100k"
        />
      </BarChart>
    </Paper>
  );
};

export default ChartPage;
