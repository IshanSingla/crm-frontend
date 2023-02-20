import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicApi } from "../Api";

const ListBusiness = ({ currentUser, name }) => {
  const [data, setData] = useState();
  const [updater, setUpdater] = useState("");

  const fetchData = () => {
    currentUser.getIdToken().then((token) => {
      publicApi
        .get("/buissness/", {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setData(res.data.buissness);
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  };

  const handleDelete = (id) => {
    currentUser.getIdToken().then((token) => {
      publicApi
        .delete(`/buissness/${id}/delete`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setUpdater("hgj");
        });
    });
  };

  useEffect(() => {
    if (name !== "") return;
    fetchData();
  }, [name, updater]);

  return data ? (
    <div className="border border-zinc-400 py-4 px-3 rounded-md">
      <div className="flex flex-col space-y-2">
        {data.length === 0 ? (
          <div className="">No Business Data Found!</div>
        ) : (
          data.map((val) => {
            // console.log(val);
            return (
              <div key={val._id} className="flex flex-row ">
                <Link
                  className="border border-black p-2 w-[85%] rounded-md"
                  to={`/business/${val._id}/dashboard`}
                >
                  {val.buissnessName}
                </Link>
                <button
                  onClick={() => handleDelete(val._id)}
                  className="bg-red-500 w-[15%] rounded-md"
                >
                  Delete
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default ListBusiness;
