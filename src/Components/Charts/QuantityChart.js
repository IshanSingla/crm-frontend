/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";

export default function QuantityChart() {
  const [quantity, setQuantity] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .get("/inventory")
          .then((res) => {
            setQuantity({
              labels: res.data.inventory.map((data) => data.inventoryName),
              datasets: [
                {
                  label: "Quantity",
                  data: res.data.inventory.map(
                    (data) => data.inventoryQuantity
                  ),
                  ids: res.data.inventory.map((data) => data._id),
                  backgroundColor: ["#0194EB", "#FB8832", "#2FFC8D", "#944CEE"],
                  borderWidth: 0,
                },
              ],
            });
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);
  return (
    <Pie
      data={quantity}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        borderColor: "white",
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      }}
    />
  );
}
