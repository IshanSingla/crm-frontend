import React from "react";
import Expense from "../../Components/Charts/Expense";
import Inventry from "../../Components/Charts/Inventry";

export default function Dashboard({ id }) {
  return (
    <div>
      <Inventry id={id} />
      <Expense id={id} />
    </div>
  );
}
