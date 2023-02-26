/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

export default function CustomChart({ data }) {
  const [graph, setGraph] = useState(<Bar data={data} />);
  useEffect(() => {
    setGraph(<Bar data={data} />);
  }, [data]);
  const handle = (e) => {
    if (e.target.value === "Bar") {
      setGraph(<Bar data={data} />);
    } else if (e.target.value === "Line") {
      setGraph(<Line data={data} />);
    } else {
      setGraph(<Line data={data} />);
    }
  };
  return (
    <div>
      <select onChange={handle}>
        <option value="Bar">Bar</option>
        <option value="Line">Line</option>
      </select>
      {graph}
    </div>
  );
}
