import { useEffect, useState } from "react";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";

export default function Settings() {
  const [data, setData] = useState();
  useEffect(() => {
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
  }, []);
  return data ? (
    <div className="settings">
      <div className="w-[100%] flex flex-wrap justify-center gap-5">
        <div className="w-fit bg-white shadow-xl rounded-2xl">
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
        <EmailAccess />
      </div>
    </div>
  ) : (
    <div className="h-fit justify-center items-center flex ">Loader</div>
  );
}

const EmailAccess = () => {
  const [email, setEmail] = useState("");
  const Handle = () => {
    if (email === "") {
      toast.error("Email is required");
      return;
    }
    BuissnessApi().then((publicApi) => {
      publicApi
        .post(`/adduser`, {
          email,
        })
        .then((res) => {
          toast.success(res.data.message);
        })
        .catch((err) => {
          if (err.request.status) {
            return toast.error(err.response.data.message);
          }
          toast.error(err.message);
        });
    });
  };
  return (
    <div className="w-fit bg-white shadow-xl rounded-2xl">
      <div className="p-5 h-full flex flex-col justify-center">
        <div className="border border-slate-500 mb-4">
          <input
            value={email}
            placeholder="Enter Email"
            className="p-3"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={Handle}
            className="text-xl bg-amber-400 p-1 px-3 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
