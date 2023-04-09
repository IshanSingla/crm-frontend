/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";

export default function CostChart() {
  const [cost, setCost] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .get("/inventory")
          .then((res) => {
            setCost({
              labels: res.data.inventory.map((data) => data.inventoryName),
              datasets: [
                {
                  label: "Selling Price",
                  data: res.data.inventory.map(
                    (data) => data.inventoryCost.sellingPrice
                  ),
                  ids: res.data.inventory.map((data) => data._id),
                  backgroundColor: "#FEB95A",
                  tension: 0.3,
                  borderColor: "#FEB95A",
                },
                {
                  label: "Buying Price",
                  data: res.data.inventory.map(
                    (data) => data.inventoryCost.buyingPrice
                  ),
                  ids: res.data.inventory.map((data) => data._id),
                  backgroundColor: "#D8D9DB",
                  tension: 0.3,
                  borderColor: "#D8D9DB",
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
    <Line
      data={cost}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}
