import { useEffect, useState } from "react";
import { publicApi } from "../../Api";
import { toast } from "react-toastify";

export default function Settings({ currentUser, id }) {
  const [data, setData] = useState();

  useEffect(() => {
    currentUser.getIdToken().then((token) => {
      publicApi
        .get(`/buissness/${id}`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setData(res.data.buissness);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  }, [currentUser, id]);
  return data ? (
    <div className="settings">
      <div className="grid grid-cols-2">
        <div className="name">Name</div>
        <div className="value">{data.buissnessName}</div>
        <div className="name">Email</div>
        <div className="value">{data.buissnessContact.email}</div>
        <div className="name">Phone Number</div>
        <div className="value">+{data.buissnessContact.phone.code} {data.buissnessContact.phone.number}</div>
        <div className="name">buissness Gst</div>
        <div className="value">{data.buissnessGst}</div>
        <div className="name">buissness Pan</div>
        <div className="value">{data.buissnessPan}</div>
        <div className="name">buissness Address</div>
        <div className="value">{data.buissnessAddress??"None"}</div>
      </div>
    </div>
  ) : (
    <div className="h-fit justify-center items-center flex ">Loader</div>
  );
}
