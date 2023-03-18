/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Bar, getElementsAtEvent, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import { useNavigate } from "react-router-dom";

export default function CustomChart({ data, type }) {
  const navigate = useNavigate();
  const chartRef = useRef();
  const [chart, setChart] = useState("Bar");

  const click = (e) => {
    if (type === "expenses") return;
    const getIndex = getElementsAtEvent(chartRef.current, e)[0];
    if (getIndex) {
      let id = localStorage.getItem("buissnessId");
      navigate(
        `/business/${id}/dashboard/${type}/${
          data.datasets[0].ids[getIndex.index]
        }`
      );
    }
  };

  return (
    <div className="rounded-xl">
      <select
        className="rounded-md bg-transparent"
        onChange={(e) => {
          setChart(e.target.value);
        }}
      >
        <option value="Bar">Bar</option>
        <option value="Line">Line</option>
      </select>
      {chart === "Bar" ? (
        <Bar
          ref={chartRef}
          onClick={click}
          options={{
            plugins: {
              legend: {
                position: "bottom",
              },
            },
          }}
          data={data}
        />
      ) : (
        <Line
          ref={chartRef}
          onClick={click}
          options={{
            plugins: {
              legend: {
                position: "bottom",
              },
            },
          }}
          data={data}
        />
      )}
    </div>
  );
}
