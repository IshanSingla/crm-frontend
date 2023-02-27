import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, Route, Routes } from "react-router-dom";
import CustomTable from "../../Components/CustomTable";
import Api from "../../Api";
import { toast } from "react-toastify";
import InventryTrans from "./InventryTrans";

function Inventory({ id }) {
  const [body, setBody] = useState([]);

  const handleDelete = async (invid) => {
    Api().then((publicApi) => {
      publicApi
        .delete(`/buissness/${id}/inventory/${invid}/delete`)
        .then((res) => {
          toast.success("Deleted");
          setBody(body.filter((item) => item._id !== invid));
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    });
  };

  return (
    <div className="md:flex">
      <CustomTable
        popupScreenFields={
          <div>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
            />
            <textarea
              id="description"
              placeholder="Description"
              className="w-full h-[150px] border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
            />
            <div className="flex">
              <input
                id="sellingPrice"
                type="number"
                placeholder="Selling Price"
                className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
              />
              <input
                id="buyingPrice"
                type="number"
                placeholder="Buying Price"
                className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
              />
            </div>
            <input
              id="quantity"
              type="number"
              placeholder="Quantity"
              className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
            />
          </div>
        }
        popupScreenHandler={async (e) => {
          e.preventDefault();
          let name = document.getElementById("name").value;
          let description = document.getElementById("description").value;
          let sellingPrice = document.getElementById("sellingPrice").value;
          let buyingPrice = document.getElementById("buyingPrice").value;
          let quantity = document.getElementById("quantity").value;
          if (
            name !== "" &&
            description !== "" &&
            sellingPrice !== "" &&
            buyingPrice !== "" &&
            quantity !== ""
          ) {
            return Api().then((publicApi) => {
              publicApi.post(`/buissness/${id}/inventory/create`, {
                name,
                description,
                sellingPrice,
                buyingPrice,
                quantity,
              });
            });
          } else {
            toast.error("Please fill all the fields");
          }
        }}
        link={`/buissness/${id}/inventory`}
        setBody={setBody}
        headings="SNo., Name, Description, Selling/ Buying,Quantity, Details, Add/Remove, Actions"
        tableData={body.map((item, index) => {
          let details = [
            index + 1,
            item.inventoryName,
            item.inventoryDescription,
            `${item.inventoryCost.sellingPrice}/ ${item.inventoryCost.buyingPrice}`,
            item.inventoryQuantity,
            <Link
              className="px-2 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold"
              to={`./${item._id}`}
            >
              Details
            </Link>,
            <button className="px-2 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold">
              +/-
            </button>,
            <div className="flex justify-center gap-[10px]">
              <CreateIcon
                fontSize="small"
                sx={{ "&:hover": { cursor: "pointer" } }}
              />
              <DeleteIcon
                onClick={() => handleDelete(item._id)}
                fontSize="small"
                sx={{ "&:hover": { cursor: "pointer" } }}
              />
            </div>,
          ];
          return (
            <tr key={item._id} className="p-2">
              {details.map((item2, key) => {
                return <td key={`${item._id}_${key}`}>{item2}</td>;
              })}
            </tr>
          );
        })}
      />
      <Routes>
        <Route path="/:inventoryid" element={<InventryTrans id={id} />} />
      </Routes>
    </div>
  );
}

export default Inventory;
