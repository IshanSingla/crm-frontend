import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../Api";
import CustomChart from "./CustomChart";

export default function Inventry() {
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
          .get(`/inventory`)
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
    <div className="w-full">
      {/* <div className="flex justify-center items-center text-4xl mb-9 text-white -mt-6 font-semibold">
        Inventory
      </div> */}
      {/* <div className="grid md:grid-cols-12 grid-cols-6 gap-6"> */}
      {/* <div className="col-span-6">
          <CustomChart data={Quantity} type="inventory" />
        </div> */}
      <div className="col-span-6 ">
        <CustomChart data={Cost} type="inventory" />
      </div>
      {/* </div> */}
    </div>
  );
}
