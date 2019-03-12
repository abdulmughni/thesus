import React, { Component } from 'react';
import {
    Chart,
    Geom,
    Tooltip    
  } from "bizcharts";
  
class BarChart extends Component {
    render() {
        const data = [
        {
            x: "Jan",
            y: [76, 100]
        },
        {
            x: "Feb",
            y: [56, 108]
        },
        {
            x: "Mar",
            y: [38, 129]
        },
        {
            x: "Apr",
            y: [58, 155]
        },
        {
            x: "May",
            y: [45, 120]
        }
        ];
        return (
        <div>
            <Chart height={250} data={data}>
            <Tooltip />
            <Geom type="interval" position="x*y" />
            </Chart>
        </div>
        );
    }
}
  
export default BarChart;
