import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, Route, Routes } from "react-router-dom";
import CustomTable from "../../Components/CustomTable";
import { publicApi } from "../../Api";
import { toast } from "react-toastify";
import InventryTrans from "./InventryTrans";

function Inventory({ currentUser, id }) {
  const [body, setBody] = useState([]);
  return (
    <div className="flex">
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
            <input
              id="cost"
              type="number"
              placeholder="Cost"
              className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
            />
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
          let cost = document.getElementById("cost").value;
          let quantity = document.getElementById("quantity").value;
          let token = await currentUser.getIdToken();
          if (
            name !== "" &&
            description !== "" &&
            cost !== "" &&
            quantity !== ""
          ) {
            return publicApi.post(
              `/buissness/${id}/inventory/create`,
              {
                name: name,
                description: description,
                cost: cost,
                quantity: quantity,
              },
              {
                headers: {
                  authorization: token,
                },
              }
            );
          } else {
            toast.error("Please fill all the fields");
          }
        }}
        link={`/buissness/${id}/inventory`}
        currentUser={currentUser}
        setBody={setBody}
        headings="SNo., Name, Description, Cost,Quantity, Transac. Details, Actions"
        tableData={body.map((item, index) => {
          let details = [
            index + 1,
            item.inventoryName,
            item.inventoryDescription,
            item.inventoryCost.count,
            item.inventoryQuantity,
            <Link
              className="px-2 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold"
              to={`./${item._id}`}
            >
              Show Details
            </Link>,
            <div className="flex justify-center gap-[10px]">
              <CreateIcon
                fontSize="small"
                sx={{ "&:hover": { cursor: "pointer" } }}
              />
              <DeleteIcon
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
        <Route
          path="/:inventoryid"
          element={<InventryTrans currentUser={currentUser} id={id} />}
        />
      </Routes>
    </div>
  );
}

export default Inventory;
