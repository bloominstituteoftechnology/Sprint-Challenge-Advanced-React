import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const Player = ({ playerData }) => {
  return (
    <BarChart
      width={1000}
      height={500}
      data={playerData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='Country' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='searches' fill='#8884d8' />
    </BarChart>
  );
};

export default Player;
