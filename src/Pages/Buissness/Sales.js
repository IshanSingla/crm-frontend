import React, { useContext, useState } from "react";
import SalesReport from "./Components/SalesReport";
import { ThemeContext } from "../../Contexts/ThemeContext";
import SalesChart from "./Components/SalesChart";
import CustomTable from "../../Components/CustomTable";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { DeleteIcons, EditIcons } from "../../Components/Icons";
import SalesTable from "./Components/SalesTable";
import TagList from "./Components/TagList";

export default function Sales() {
  const { theme } = useContext(ThemeContext);

  const [body, setBody] = useState([]);
  const [loader, setLoader] = useState(false);

  const model = {
    heading: "Platform",
    listing: "Platforms listing",
  };

  const handleAdd = async (inventoryId) => {
    setLoader(true);
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .put(`/cart/update?type=PUSH&inventoryId=${inventoryId}`)
          .then((res) => {
            toast.success(res.data.message);
            setLoader(false);
          })
          .catch((error) => {
            setLoader(false);
            if (error.request.status) {
              return toast.error(error.response.data.message);
            }
            toast.error(error.messaga);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleDelete = async (invid) => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .delete(`/inventory/${invid}/delete`)
          .then((res) => {
            toast.success("Deleted");
            setBody(body.filter((item) => item._id !== invid));
          })
          .catch((err) => {
            if (err.request.status) {
              return toast.error(err.response.data.message);
            }
            toast.error("Something went wrong");
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex md:flex-row flex-col gap-3 overflow-auto h-full w-full">
      {/* Left */}
      <div className="flex flex-col flex-1 gap-5 h-full">
        <div className="flex ">
          <div>
            <SalesReport theme={theme} />
          </div>
          <div className="w-full flex flex-col gap-3 items-center box-border">
            <p className={`${theme ? "text-white" : "text-black"} font-[500]`}>
              {" "}
              Household monthly expenses{" "}
            </p>
            <div className="h-[13rem] ">
              <SalesChart />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="h-full">
          <SalesTable theme={theme} />
        </div>
      </div>

      {/* Right */}
      <div className="w-[18rem] min-h-full overflow-auto">
        <TagList model={model} />
      </div>
    </div>
  );
}
