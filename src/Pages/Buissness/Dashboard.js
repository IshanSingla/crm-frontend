import React from "react";
import Expense from "../../Components/Charts/Expense";
import Inventry from "../../Components/Charts/Inventry";

export default function Dashboard() {
  return (
    <div className="w-full">
      <Inventry />
      <Expense />
    </div>
  );
}
