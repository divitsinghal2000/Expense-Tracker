import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const sum = (dataPointValues) => {
    let ans = 0;
    for (let value of dataPointValues) {
      ans += value;
    }
    return ans;
  };
  const totalMaxValue = sum(dataPointValues);
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
