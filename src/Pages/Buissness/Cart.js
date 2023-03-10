import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../Api";

function Cart() {
  const [inventoryData, setInventoryData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(false);

  const handleAdd = async (inventoryId) => {
    setLoader(true);
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .post("/cart/update", {
            inventoryId: inventoryId,
            quantity: 1,
          })
          .then(() => {
            toast.success("Item added to cart");
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
    if (popup) {
      BuissnessApi()
        .then((publicApi) => {
          publicApi
            .get(`/inventory`)
            .then((res) => {
              setInventoryData(res.data.inventory);
              publicApi
                .get("/cart")
                .then((res) => {
                  if (res.data.cart) {
                    setCart(res.data.cart);
                  }
                })
                .catch((error) => {
                  setLoader(false);
                  if (error.request.status) {
                    return toast.error(error.response.data.message);
                  }
                  toast.error(error.messaga);
                });
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
    }
  }, [popup]);

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
          <div className="fixed bg-[#ffffff] w-[70%] h-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[15]">
            <div></div>
            <div className="flex flex-col h-[100%]">
              <div className="h-[50%] p-[32px] bg-[#ff5436]">{}</div>
              <div className="flex flex-col gap-[8px] h-[50%] p-[32px] overflow-y-scroll">
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
              </div>
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
