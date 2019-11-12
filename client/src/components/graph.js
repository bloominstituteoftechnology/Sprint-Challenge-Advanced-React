import React from "react";
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend
} from 'react-vis';


function Graph(props) {

    const Graphdata =  props.data.slice(0, 10).map(dataset =>(
            {x: `${dataset.name}`, y: `${dataset.searches}` }
    ));
    const {useCanvas} = props;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    console.log(Graphdata);
    return(
        
        <div>
            <XYPlot
          className="clustered-stacked-bar-chart-example"
          xType="ordinal"
          stackBy="y"
          width={1000}
          height={1000}
        >

          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            cluster="2015"
            color="#12939A"
            data={
                Graphdata
            }
          />
 
 
        </XYPlot>
        </div>
    )
}

export default Graph;