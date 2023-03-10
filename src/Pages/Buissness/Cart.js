import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../Api";

function CartCard({ item, setFlag }) {
  const [loader, setLoader] = useState(false);
  let [count, setCount] = useState(1);

  const handleAdd = async (type) => {
    setLoader(true);
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .put(`/cart/update?type=${type}&inventoryId=${item.inventory_id}`)
          .then((res) => {
            toast.success(res.data.message);
            setFlag(true);
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

  useEffect(() => {
    setCount(item.quantity);
  }, [item.quantity]);

  return (
    <div className="p-[16px] flex gap-[20px]">
      <div>{item.inventoryName}</div>
      <div>{count}</div>
      <div>
        {item.inventoryCost.sellingPrice}/{item.inventoryCost.buyingPrice}
      </div>
      <div>
        <button
          disabled={loader}
          onClick={() => {
            handleAdd("INCRIMENT");
          }}
          className="px-2 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold"
        >
          +
        </button>
        <button
          disabled={loader}
          onClick={() => {
            handleAdd("DECREMENT");
          }}
          className="px-2 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold"
        >
          -
        </button>
      </div>
    </div>
  );
}

function Cart() {
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (popup) {
      setFlag(true);
    }
  }, [popup]);

  if (flag) {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .get("/cart")
          .then((res) => {
            if (res.data.data) {
              setCart(res.data.data);
            }
          })
          .catch((error) => {
            if (error.request.status) {
              return toast.error(error.response.data.message);
            }
            toast.error(error.messaga);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setFlag(false);
  }

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setPopup(true);
          }}
          className="bg-[#ff1243] w-[max-content] text-white p-[8px] rounded-[10px]"
        >
          Transaction
        </button>
      </div>
      {popup && (
        <div>
          <div className="fixed bg-[#ffffff] w-[50%] h-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[15]">
            <div></div>
            <div className="flex flex-col h-[100%] p-[32px]">
              {cart?.inventory?.map((item) => {
                console.log(item);
                return (
                  <CartCard key={item._id} item={item} setFlag={setFlag} />
                );
              })}
              {/* <div className="flex flex-col gap-[8px] h-[50%] p-[32px] overflow-y-scroll">
                {inventoryData.map((item, index) => {
                  let details = [
                    index + 1,
                    item.inventoryName,
                    item.inventoryDescription,
                    `${item.inventoryCost.sellingPrice}/ ${item.inventoryCost.buyingPrice}`,
                    item.inventoryQuantity,
                  ];
                  return (
                    <div
                      key={item._id}
                      className="flex gap-[16px] p-[16px] border border-solid border-black"
                    >
                      <p>{details[0]}</p>
                      <p className="grow">{details[1]}</p>
                      <button
                        onClick={() => {
                          if (!loader) {
                            handleAdd(item._id);
                          }
                        }}
                        className="px-3 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold"
                      >
                        Add
                      </button>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
          <div
            onClick={() => {
              setPopup(false);
            }}
            className="fixed top-[0%] left-[0%] w-[100%] h-[100%] bg-[rgb(0,0,0,0.4)] z-[14]"
          ></div>
        </div>
      )}
    </>
  );
}

export default Cart;
