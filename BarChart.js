import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
//using sample data set to plot initial chart visualization, will extend to server api data
class BarChart extends Component {
    render() {
      const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
      return (
        <div className="BarChart">
          <XYPlot height={200} width={500}>
            <LineSeries data={data} />
          </XYPlot>
        </div>
      );
    }
  }
  
  export default BarChart;