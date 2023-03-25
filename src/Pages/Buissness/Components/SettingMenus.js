import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SettingMenus({ theme }) {
  const menus = [
    { name: "profile" },
    { name: "integrations" },
    { name: "user and permission" },
    { name: "notifications" },
  ];
  const route = useLocation().pathname.split("/").pop();
  return (
    <div className="flex gap-12 ">
      {menus.map((val, index) => {
        return (
          <div key={index}>
            <div className="py-4">
              <Link
                className={`font-bold text-[17px]  uppercase w-[max-content] py-4
                ${theme ? "text-white border-white" : "text-black border-black"}
                ${route === val.name && "border-b-4"}
              `}
              >
                {val.name}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
