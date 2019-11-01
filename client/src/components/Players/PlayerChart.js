import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from 'recharts';

const PlayerChart = ({ playerData }) => {
  return (
    <ResponsiveContainer width={'90%'} height={400}>
      <BarChart
        // width={4000}
        width={2000}
        height={600}
        data={playerData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />

        <XAxis
          dataKey='name'
          fontSize={14}
          tick={{ stroke: '#8884D8', strokeWidth: 0.5 }}>
          <Label position='bottom' fontSize={12}>
            Players
          </Label>
        </XAxis>
        <YAxis>
          <Label position='bottom' offset={-200} fontSize={12}>
            Searches
          </Label>
        </YAxis>
        <Tooltip />
        <Bar dataKey='searches' barSize={30} fill='#d4d884' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PlayerChart;
