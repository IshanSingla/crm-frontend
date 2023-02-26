import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { publicApi } from "../../Api";
import CustomChart from "./CustomChart";

export default function Inventry({ currentUser, id }) {
  const [Quantity, setQuantity] = useState({
    labels: [],
    datasets: [],
  });
  const [Cost, setCost] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    currentUser.getIdToken().then((token) => {
      publicApi
        .get(`/buissness/${id}/inventory`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setQuantity({
            labels: res.data.inventory.map((data) => data.inventoryName),
            datasets: [
              {
                label: "Quantity",
                data: res.data.inventory.map((data) => data.inventoryQuantity),
              },
            ],
          });
          setCost({
            labels: res.data.inventory.map((data) => data.inventoryName),
            datasets: [
              {
                label: "Cost",
                data: res.data.inventory.map(
                  (data) => data.inventoryCost.count
                ),
                backgroundColor: "rgba(255, 0,0, 1)",
              },
            ],
          });
          console.log(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  }, [currentUser, id]);
  return (
    <div className="p-6">
      <div className="flex justify-center items-center text-4xl mb-9 -mt-6 font-semibold">Inventry</div>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <CustomChart data={Quantity} />
        </div>
        <div className="col-span-6">
          <CustomChart data={Cost} />
        </div>
      </div>
    </div>
  );
}
