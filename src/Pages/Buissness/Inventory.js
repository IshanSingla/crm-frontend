import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CustomTable from "../../Components/CustomTable";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";
import InventryTrans from "./InventryTrans";
import { DeleteIcons, EditIcons } from "../../Components/Icons";
import Cart from "./Cart";
import TagList from "./Components/TagList";

function Inventory() {
  const [body, setBody] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleAdd = async (inventoryId) => {
    setLoader(true);
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .put(`/cart/update?type=PUSH&inventoryId=${inventoryId}`)
          .then((res) => {
            toast.success(res.data.message);
            setLoader(false);
          })
          .catch((error) => {
            setLoader(false);
            if (error.request.status) {
              return toast.error(error.response.data.message);
            }
            toast.error(error.messaga);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleDelete = async (invid) => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .delete(`/inventory/${invid}/delete`)
          .then((res) => {
            toast.success("Deleted");
            setBody(body.filter((item) => item._id !== invid));
          })
          .catch((err) => {
            if (err.request.status) {
              return toast.error(err.response.data.message);
            }
            toast.error("Something went wrong");
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex md:flex-row flex-col gap-3 overflow-auto h-full w-full">
      <CustomTable
        popupScreenFields={
          <div className="flex flex-col space-y-3">
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            />
            <textarea
              id="description"
              placeholder="Description"
              className="h-[150px] border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            />
            <div className="flex space-x-2">
              <input
                id="buyingPrice"
                type="number"
                placeholder="Cost Price"
                className="w-full border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
              />
              <input
                id="sellingPrice"
                type="number"
                placeholder="Selling Price"
                className="w-full border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
              />
            </div>
            <input
              id="quantity"
              type="number"
              placeholder="Quantity"
              className="w-full border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
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
            return BuissnessApi().then((publicApi) =>
              publicApi.post(`/inventory/create`, {
                name,
                description,
                sellingPrice,
                buyingPrice,
                quantity,
              })
            );
          } else {
            toast.error("Please fill all the fields");
          }
        }}
        link={`/inventory`}
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
              className="px-2 text-oran text-[13px] font-semibold"
              to={`./${item._id}`}
            >
              Details
            </Link>,
            <button
              disabled={loader}
              onClick={() => {
                handleAdd(item._id);
              }}
              className="px-2 text-oran text-[13px] font-semibold"
            >
              Add to cart
            </button>,
            <div className="flex justify-center gap-[12px]">
              <EditIcons className="cursor-pointer" />
              <DeleteIcons
                className="cursor-pointer stroke-white"
                onClick={() => handleDelete(item._id)}
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
      {/* <Routes>
        <Route path="/:inventoryid" element={<InventryTrans />} />
      </Routes> */}
      <TagList />
    </div>
  );
}

export default Inventory;
