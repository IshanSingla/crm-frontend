import { useEffect, useState } from "react";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";
import CustomTable from "../../Components/CustomTable";
import { DeleteIcons, EditIcons } from "../../Components/Icons";

export default function Settings() {
  const [data, setData] = useState();
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setData(null);
    BuissnessApi().then((publicApi) => {
      publicApi
        .get(`/one`)
        .then((res) => {
          setData(res.data.buissness);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  }, [update]);
  return data ? (
    <div className="settings flex flex-col gap-6">
      <div className="w-[100%] flex justify-center">
        <div className="w-[70%] bg-white shadow-xl rounded-2xl">
          <div className="p-5 h-full">
            <div className="grid-cols-2 grid gap-10">
              <div className="name font-bold">Name</div>
              <div className="value">{data.buissnessName}</div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="name font-bold">Email</div>
              <div className="value">{data.buissnessContact.email}</div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="name font-bold">Phone Number</div>
              <div className="value">
                +{data.buissnessContact.phone.code}{" "}
                {data.buissnessContact.phone.number}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="name font-bold">buissness Gst</div>
              <div className="value">{data.buissnessGst}</div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="name font-bold">buissness Pan</div>
              <div className="value">{data.buissnessPan}</div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="name font-bold">buissness Address</div>
              <div className="value">{data.buissnessAddress ?? "None"}</div>
            </div>
          </div>
        </div>
      </div>
      <CustomTable
        popupScreenFields={
          <div>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
            />
            <select
              id="type"
              className="w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0"
            >
              <option value="Owner">Owner</option>
              <option value="Manager">Manager</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
        }
        popupScreenHandler={async (e) => {
          e.preventDefault();
          let email = document.getElementById("email").value;
          let type = document.getElementById("type").value;
          if (email !== "" && type !== "") {
            setUpdate(!update);
            return BuissnessApi().then((publicApi) =>
              publicApi.post(`/adduser`, {
                email,
                type: type,
              })
            );
          } else {
            toast.error("Please fill all the fields");
          }
        }}
        headings="SNo, Email, Role, Actions"
        tableData={data.users.map((email, index) => {
          let details = [
            index + 1,
            email,
            data.roles[index],
            <div className="flex justify-center gap-[12px]">
            <EditIcons className="cursor-pointer" />
            <DeleteIcons className="cursor-pointer" />
          </div>,
          ];
          return (
            <tr key={email._id} className="p-2">
              {details.map((item2, key) => {
                return <td key={`${email}`}>{item2}</td>;
              })}
            </tr>
          );
        })}
      />
    </div>
  ) : (
    <div className="h-fit justify-center items-center flex ">Loader</div>
  );
}
