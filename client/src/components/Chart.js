import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const RenderLineChart = ({players})=>{
const playersdata={players}
console.log("jdfhgdjkv", playersdata)
//there is too much data and it does not fit all in the graph
const data = [{
    name: "Alex Morgan",
    country: "United States",
    searches: 100,
    id: 0
},
{
    name: "Megan Rapinoe",
    country: "United States",
    searches: 99,
    id: 1
},
{
    name: "Marta",
    country: "Brazil",
    searches: 18,
    id: 2
},
{       
    name: "Rose Lavelle",
    country: "United States",
    searches: 11,
    id: 3 
},
{
    name: "Julie Ertz",
    country: "United States",
    searches: 8,
    id: 5
},
{
    name: "Christen Press",
    country: "United States",
    searches: 8,
    id: 6
}
]
return(
       <div className="chart">
            <BarChart width={1100} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="searches" fill="#8884d8" />
        </BarChart>
       </div>
    );
}
export default RenderLineChart;