import React from "react";
import Expense from "../../Components/Charts/Expense";
import Inventry from "../../Components/Charts/Inventry";

export default function Dashboard({ currentUser, id }) {

  return (
    <div>
      <Inventry currentUser={currentUser} id={id} />
      <Expense currentUser={currentUser} id={id} />
    </div>
  );
}
