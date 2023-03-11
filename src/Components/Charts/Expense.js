import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../Api";
import CustomChart from "./CustomChart";

export default function Expense() {
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
                },
                {
                  label: "DR",
                  data: res.data.inventory.map((data) =>
                    data.expensetype === "DR" ? data.expenseAmount.count : null
                  ),
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
    <div className="p-6">
      <div className="flex justify-center items-center text-4xl text-white mb-9 -mt-6 font-semibold">
        Expenses
      </div>
      <div className="grid md:grid-cols-12 grid-cols-6 gap-6">
        <div className="col-span-6">
          <CustomChart data={Quantity} type="expenses" />
        </div>
        <div className="col-span-6">
          <CustomChart data={Cost} type="expenses" />
        </div>
      </div>
    </div>
  );
}
