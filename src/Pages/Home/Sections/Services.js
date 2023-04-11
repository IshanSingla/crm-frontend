import React from "react";
import Cards from "../Components/Cards";
import { Link } from "react-router-dom";
import { RightArrow3 } from "../../../Components/Icons";

const details = [
  {
    id: 1,
    icon: require("../../../Assets/cube.svg").default,
    h2: (
      <h2>
        {" "}
        Inventory
        <br />
        Management{" "}
      </h2>
    ),
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eligendi necessitatibus tenetur vero illo deleniti ipsam, blanditiis amet consequuntur modi voluptates. Hic facere, possimus exercitationem minus est fugiat repudiandae deserunt.",
  },

  {
    id: 2,
    icon: require("../../../Assets/flask.svg").default,
    h2: (
      <h2>
        {" "}
        Accounting
        <br />
        Management{" "}
      </h2>
    ),
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eligendi necessitatibus tenetur vero illo deleniti ipsam, blanditiis amet consequuntur modi voluptates. Hic facere, possimus exercitationem minus est fugiat repudiandae deserunt.",
  },
  {
    id: 3,
    icon: require("../../../Assets/pound.svg").default,
    h2: (
      <h2>
        {" "}
        Invoice
        <br />
        Management{" "}
      </h2>
    ),
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eligendi necessitatibus tenetur vero illo deleniti ipsam, blanditiis amet consequuntur modi voluptates. Hic facere, possimus exercitationem minus est fugiat repudiandae deserunt.",
  },
];

export default function Services() {
  return (
    <section className="bg-secBlue relative py-20 px-5 md:px-10 min-h-screen flex flex-col space-y-10 items-center justify-center rounded-md border border-grey2 overflow-hidden">
      <div className="text-center flex flex-col justify-center items-center space-y-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#7E808F] font-bold text-5xl">
          Services & Technologies
        </h1>
        <p className="w-[60%] text-grey3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          repudiandae distinctio dolorum perferendis iure non in natus.
          Accusantium atque sequi voluptates
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-evenly gap-16">
        {details.map((item) => {
          return (
            <Cards
              key={item.id}
              icon={item.icon}
              h2={item.h2}
              para={item.para}
            />
          );
        })}
      </div>

      <div>
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-semibold"> Our services </span>
          <RightArrow3 className="fill-grey" />
        </Link>
      </div>

      {/* Circles */}
      <div className="absolute w-[151px] h-[151px] left-0 top-0 bg-[#FF5E00] blur-[156px]"></div>
      <div className="absolute w-[140px] h-[132px] right-10 bottom-10 bg-[#FEA900] blur-[156px]"></div>
    </section>
  );
}
