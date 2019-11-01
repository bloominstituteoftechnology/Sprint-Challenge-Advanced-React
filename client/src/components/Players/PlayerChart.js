import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const PlayerChart = ({ playerData }) => {
  console.log(`Hey im player chart here is my playerData, ${playerData}`);

  return (
    <ResponsiveContainer width={'100%'} height={400}>
      <BarChart
        // width={4000}
        width={2000}
        height={600}
        data={playerData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />

        <XAxis dataKey='name' fontSize={14} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='searches' barSize={30} fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PlayerChart;
