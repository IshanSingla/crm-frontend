/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Bar, getElementsAtEvent, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CustomChart({ data, id, type }) {
  const navigate = useNavigate();
  const chartRef = useRef();
  const [chart, setChart] = useState("Bar");

  const click = (e) => {
    const getIndex = getElementsAtEvent(chartRef.current, e)[0];
    if (getIndex) {
      navigate(
        `/business/${id}/dashboard/${type}/${
          data.datasets[0].ids[getIndex.index]
        }`
      );
    }
  };

  return (
    <div>
      <select
        onChange={(e) => {
          setChart(e.target.value);
        }}
      >
        <option value="Bar">Bar</option>
        <option value="Line">Line</option>
      </select>
      {chart === "Bar" ? (
        <Bar ref={chartRef} onClick={click} data={data} />
      ) : (
        <Line ref={chartRef} onClick={click} data={data} />
      )}
    </div>
  );
}
