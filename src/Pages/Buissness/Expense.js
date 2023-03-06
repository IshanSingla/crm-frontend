import React, { useState } from "react";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../Api";
import CustomTable from "../../Components/CustomTable";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

function Expense() {
  const [body, setBody] = useState([]);
  const handleDelete = async (invid) => {
    BuissnessApi().then((publicApi) => {
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
    });
  };
  return (
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
            id="expenseOn"
            type="text"
            placeholder="expense On"
            className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
          />
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
          />
          <select
            id="type"
            className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
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
      headings="SNo., Name, Description, Cost,expense type, expense On, Date, Actions"
      tableData={body.map((item, index) => {
        let details = [
          index + 1,
          item.expenseName,
          item.expenseDescription,
          item.expenseAmount.count,
          item.expensetype,
          item.expenseOnType,
          new Date(item.expenseTime).toLocaleString(),

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
  );
}

export default Expense;
