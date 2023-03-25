import React from "react";
import { EditIcons } from "../../../Components/Icons";

export default function SettingHome({ theme }) {
  const contraints = [
    { name: "Email", value: "test@gmail.com", button: true },
    { name: "City", value: "Chandigarh" },
    { name: "Website", value: "https://www.vollmx.com/", link: true },
    { name: "Phone Number", value: "+91 XXXXXXXXXX", button: true },
    { name: "Business GST", value: "None" },
    { name: "Business PAN", value: "None" },
    { name: "Business Address", value: "None" },
  ];

  return (
    <div className="w-full p-2 flex flex-col gap-12">
      {/* Upper */}
      <div className="flex">
        <div className="w-[80%] flex flex-col gap-5">
          <h1 className="text-2xl font-semibold"> Ishan Singla, 21 </h1>
          <div className="border-t border-grey"></div>
          <div>
            <table className="text-grey">
              {contraints.map((val) => {
                return (
                  <tr>
                    <td className="py-1 pr-2"> {val.name}: </td>
                    <td>
                      <div className="flex gap-2">
                        {val.link ? (
                          <a
                            href={val.value}
                            className={`underline underline-offset-2 hover:text-white
                              ${
                                theme
                                  ? "hover:text-white"
                                  : "hover:text-blue-700"
                              }
                            `}
                          >
                            {val.value}
                          </a>
                        ) : (
                          <p>{val.value}</p>
                        )}

                        {val.button && (
                          <button className="hover:text-white">
                            <EditIcons />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div></div>
      </div>

      {/* Lower */}
      <div className=" flex flex-col gap-5">
        <h1 className="text-2xl font-semibold"> Ishan Singla, 21 </h1>
        <div className="border-t border-grey"></div>
        <div>
          <table className="text-grey">
            {contraints.map((val) => {
              return (
                <tr>
                  <td className="py-1 pr-2"> {val.name}: </td>
                  <td>
                    <div className="flex gap-2">
                      {val.link ? (
                        <a
                          href={val.value}
                          className={`underline underline-offset-2 hover:text-white
                            ${
                              theme ? "hover:text-white" : "hover:text-blue-700"
                            }
                          `}
                        >
                          {val.value}
                        </a>
                      ) : (
                        <p>{val.value}</p>
                      )}

                      {val.button && (
                        <button className="hover:text-white">
                          <EditIcons />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
