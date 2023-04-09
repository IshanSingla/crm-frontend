/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../Api";

export default function ExpenseChart() {
  const [Quantity, setQuantity] = useState({
    labels: [],
    datasets: [],
  });
  const [Cost, setCost] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .get(`/expenses`)
          .then((res) => {
            setQuantity({
              labels: res.data.inventory.map((data) => data.expenseName),
              datasets: [
                {
                  label: "CR",
                  data: res.data.inventory.map((data) =>
                    data.expensetype === "CR" ? data.expenseAmount.count : null
                  ),
                  ids: res.data.inventory.map((data) => data._id),
                },
                {
                  label: "DR",
                  data: res.data.inventory.map((data) =>
                    data.expensetype === "DR" ? data.expenseAmount.count : null
                  ),
                  ids: res.data.inventory.map((data) => data._id),
                },
              ],
            });

            setCost({
              labels: res.data.inventory.map((data) =>
                new Date(data.expenseTime).toLocaleString()
              ),
              datasets: [
                {
                  label: "CR",
                  data: res.data.inventory.map((data) =>
                    data.expensetype === "CR" ? data.expenseAmount.count : null
                  ),
                  backgroundColor: ["#0194EB", "#FB8832", "#2FFC8D", "#944CEE"],
                  borderWidth: 0,
                },
                {
                  label: "DR",
                  data: res.data.inventory.map((data) =>
                    data.expensetype === "DR" ? data.expenseAmount.count : null
                  ),
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
      data={Cost}
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
