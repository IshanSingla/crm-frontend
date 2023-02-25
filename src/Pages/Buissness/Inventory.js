import React, { useEffect, useState } from "react";
import { publicApi } from "../../Api";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import AddInventory from "../../Components/Modals/AddInventory";

function Inventory({ currentUser, id }) {
  const [from, setFrom] = useState(0);
  const [gap, setGap] = useState(10);
  const [pages, setPages] = useState(1);
  const [body, setBody] = useState([]);
  const [popup, setPopup] = useState(false);
  const [reload, setReload] = useState(false);

  let headings = [
    "SNo.",
    "Name",
    "Description",
    "Cost",
    "Quantity",
    "Transac. Details",
    "Actions"
  ];

  useEffect(() => {
    if(!popup){
      setBody([]); //hta dena baad mae
      currentUser.getIdToken().then((token) => {
        publicApi
          .get(`/buissness/${id}/inventory?from=${from}&to=${from + gap}`, {
            headers: {
              authorization: token,
            },
          })
          .then((res) => {
            setBody(res.data.inventory);
            setPages(res.data.totalPage);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    }
  }, [from, gap, popup, reload]);



  const handleNext = () => {
    if (from / gap > pages) return;
    setFrom(from + gap);
  };

  const handlePrev = () => {
    if (from - gap < 1) return;
    setFrom(from - gap);
  };

  useEffect(() => {
    console.log(from, gap, pages);
  }, [from, gap]);

  return (
    <div className="">
      <div className="flex flex-col justify-between py-2 shadow-md bg-white rounded-xl w-full md:w-[60%] container mx-auto">
        <div className="flex flex-row py-3 px-4 justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="w-[75%] bg-zinc-100 rounded-md outline-none py-1 px-2"
          />
          <button
            onClick={() => {
              setPopup(true);
            }}
            className="px-5 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold"
          >
            Add data
          </button>
          <button onClick={() => {
            setReload(!reload);
          }}>
            <img
              className="w-4"
              src={require("../../Assets/reload.svg").default}
              alt=""
            />
          </button>
          <button>
            <img
              className="w-5"
              src={require("../../Assets/more.svg").default}
              alt=""
            />
          </button>
        </div>
        <div className="overflow-auto h-[22rem] scroll">
          <table className="w-full border-space font-pop text-zinc-500">
            <thead className="">
              <tr className="font-semibold text-[13px] h-auto border-b border-zinc-200 text-center">
                {headings.map((head, headID) => (
                  <td key={headID}>
                    <div className="px-4 pb-2 ">{head}</div>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="text-[12px] text-center">
              {
                body.map((item, index) => {
                  let details = [index + 1, item.inventoryName, item.inventoryDescription, item.inventoryCost.cost, item.inventoryQuantity, "Hello", [<CreateIcon fontSize="small" sx={{ "&:hover": { cursor: "pointer" } }}/>, <DeleteIcon fontSize="small" sx={{ "&:hover": { cursor: "pointer" } }}/>]];
                  console.log(details);
                  return(
                    <tr className="p-2">
                      {details.map((item2, key) => {
                        return (
                          <>
                            {
                              (key !== 6 && key !== 5) && <td>{item2}</td>
                            }
                            {
                              (key === 5) && <td>
                                <button>Show</button>
                              </td>
                            }
                            {
                              (key === 6) && <td className="flex justify-center gap-[8px]">{item2[0]}{item2[1]}</td>
                            }
                          </>
                        )
                      })}
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-between px-4 py-2 font-pop text-[12px] border-t border-zinc-200">
          <div className="flex flex-row items-center space-x-1 ">
            <div>Rows per page</div>
            <div>
              <select
                value={gap}
                onChange={(e) => setGap(parseInt(e.target.value))}
                className="bg-zinc-100 p-1 rounded-md cursor-pointer outline-none border-none"
              >
                <option value={10}> 10 </option>
                <option value={20}> 20 </option>
                <option value={30}> 30 </option>
              </select>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex flex-row">
            <button
              onClick={handlePrev}
              className="hover:bg-zinc-100 rounded-full transition-all"
            >
              <img
                className="w-8"
                src={require("../../Assets/leftArr2.svg").default}
                alt=""
              />
            </button>
            <button
              onClick={handleNext}
              className="hover:bg-zinc-100 rounded-full transition-all"
            >
              <img
                className="w-8"
                src={require("../../Assets/rightArr2.svg").default}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      {popup && <AddInventory id={id} currentUser={currentUser} setBool={setPopup} />}
    </div>
  );
}

export default Inventory;
