import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => {
        return dataPoint.value;
    })
    const totalMaxValue = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
