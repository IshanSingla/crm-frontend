import React from "react";
import CustomTable from "../../Components/CustomTable";

export default function InventryTrans({ currentUser, id }) {
  return (
    <CustomTable
      currentUser={currentUser}
      headings="SNo., Name, Description, Cost,Quantity, Transac. Details, Actions"
    />
  );
}
