import React from "react";
import Inventry from "../../Components/Charts/Inventry";

export default function Dashboard({ currentUser, id }) {

  return (
    <div>
      <Inventry currentUser={currentUser} id={id} />
    </div>
  );
}
