import React, { useState } from "react";
import { toast } from "react-toastify";
import { publicApi } from "../../Api";
import CustomTable from "../../Components/CustomTable";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

function Expense({ currentUser, id }) {
  const [body, setBody] = useState([]);
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
        let amount = document.getElementById("amount").value;
        let quantity = document.getElementById("quantity").value;
        let expenseOn = document.getElementById("expenseOn").value;
        let token = await currentUser.getIdToken();
        if (
          name !== "" &&
          description !== "" &&
          amount !== "" &&
          quantity !== "" &&
          expenseOn !== ""
        ) {
          return publicApi.post(
            `/buissness/${id}/expenses/create`,
            {
              name: name,
              description: description,
              amount: amount,
              quantity: quantity,
              expenseOn: expenseOn,
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
      link={`/buissness/${id}/expenses`}
      currentUser={currentUser}
      setBody={setBody}
      headings="SNo., Name, Description, Cost,expense type, expense On, Date, Actions"
      tableData={body.map((item, index) => {
        console.log(item);
        let details = [
          index + 1,
          item.expenseName,
          item.expenseDescription,
          item.expenseAmount.count,
          item.expensetype,
          item.expenseOnType,
          item.createdAt,

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
  );
}

export default Expense;
