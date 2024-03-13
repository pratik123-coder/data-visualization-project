// Chart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

const Chart = ({ data }) => {
  const theme = useTheme();

  return (
    <>
      <Paper elevation={3} sx={{ padding: 20, margin: 20 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Salary Chart
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="fullName" />
            <YAxis />
            <Tooltip />
            <Legend />

            {/* Render a single bar for all salaries */}
            <Bar
              dataKey="salary"
              name="Salary"
              shape={(props) => {
                const { salary } = props.payload;
                const fillColor = salary > 20000 ? theme.palette.success.main : theme.palette.error.main;
                return <rect {...props} fill={fillColor} />;
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </>
  );
};

export default Chart;
