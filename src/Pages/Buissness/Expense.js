import React, { useState } from "react";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../Api";
import CustomTable from "../../Components/CustomTable";
import { DeleteIcons, EditIcons } from "../../Components/Icons";

function Expense() {
  const [body, setBody] = useState([]);
  const handleDelete = async (invid) => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .delete(`/expenses/${invid}/delete`)
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
            className="w-full h-[150px] border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
          />
          <input
            id="expenseOn"
            type="text"
            placeholder="expense On"
            className="w-full border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
          />
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            className="w-full border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
          />
          <select
            id="type"
            className="w-full border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
          >
            <option value="CR">CR</option>
            <option value="DR">DR</option>
          </select>
        </div>
      }
      popupScreenHandler={async (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let description = document.getElementById("description").value;
        let amount = document.getElementById("amount").value;
        let expenseOn = document.getElementById("expenseOn").value;
        let type = document.getElementById("type").value;
        if (
          name !== "" &&
          description !== "" &&
          amount !== "" &&
          expenseOn !== "" &&
          type !== ""
        ) {
          return BuissnessApi().then((publicApi) =>
            publicApi.post(`/expenses/create`, {
              name: name,
              description: description,
              amount: amount,
              expenseOn: expenseOn,
              type: type,
            })
          );
        } else {
          toast.error("Please fill all the fields");
        }
      }}
      link={`/expenses`}
      setBody={setBody}
      headings="SNo., Name, Description, Cost, type, expense On, Date, Actions"
      tableData={body.map((item, index) => {
        let details = [
          index + 1,
          item.expenseName,
          item.expenseDescription,
          item.expenseAmount.count,
          item.expensetype,
          item.expenseOnType,
          new Date(item.expenseTime).toLocaleString(),
          <div className="flex justify-center gap-[12px]">
            <EditIcons className="cursor-pointer" />
            <DeleteIcons
              className="cursor-pointer"
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
  );
}

export default Expense;
