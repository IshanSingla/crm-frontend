import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
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
    <Doughnut
      data={quantity}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      }}
    />
  );
}
