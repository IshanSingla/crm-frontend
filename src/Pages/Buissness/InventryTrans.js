import React from "react";
import CustomTable from "../../Components/CustomTable";

export default function InventryTrans({ id }) {
  return (
    <CustomTable
      headings="SNo., Name, Description, Cost,Quantity, Transac. Details, Actions"
    />
  );
}
