import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../Api";
import { ThemeContext } from "../../Contexts/ThemeContext";

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
    <div className="p-3 flex gap-3">
      <div>{item.inventoryName}</div>
      <div>
        {item.inventoryCost.sellingPrice}/{item.inventoryCost.buyingPrice}
      </div>
      <div className="flex flex-row rounded-sm">
        <button
          disabled={loader}
          onClick={() => {
            handleAdd("DECREMENT");
          }}
          className="px-2 rounded-sm bg-[#1967D2] text-white text-[13px] font-semibold"
        >
          -
        </button>
        <div className="border border-black px-2 rounded-sm">{count}</div>
        <button
          disabled={loader}
          onClick={() => {
            handleAdd("INCRIMENT");
          }}
          className="px-2 rounded-sm bg-[#1967D2] text-white text-[13px] font-semibold"
        >
          +
        </button>
      </div>
    </div>
  );
}

function Cart() {
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(false);
  const [flag, setFlag] = useState(false);
  const [ammount, setAmmount] = useState({ sellingPrice: 0, buyingPrice: 0 });
  // var ammounts = { sellingPrice: 0, buyingPrice: 0 };

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
              let ammounts = { sellingPrice: 0, buyingPrice: 0 };
              res.data.data.inventory.forEach((element) => {
                ammounts.sellingPrice +=
                  element.inventoryCost.sellingPrice * element.quantity;
                ammounts.buyingPrice +=
                  element.inventoryCost.buyingPrice * element.quantity;
              });
              setAmmount(ammounts);
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

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setPopup(true);
          }}
          className={`px-4 rounded-md text-[13px] font-semibold py-3 text-oran
                  ${theme ? "bg-oran bg-opacity-20 " : "border bg-secWhite"}
              `}
        >
          Transactions
        </button>
      </div>
      {popup && (
        <div>
          <div className="fixed bg-[#ffffff] w-[35%] h-[60%] top-[50%] rounded-2xl left-[50%] translate-x-[-50%] translate-y-[-50%] z-[15] flex flex-row items-center justify-center gap-2">
            <div className="flex flex-col h-[80%] border border-black w-[45%] font-sans text-xs rounded-xl">
              <div className="flex items-center justify-center text-2xl font-semibold p-2 bg-black text-white rounded-xl">
                Products in List
              </div>
              <div className="overflow-auto">
                {cart?.inventory?.map((item) => {
                  return (
                    <CartCard key={item._id} item={item} setFlag={setFlag} />
                  );
                })}
              </div>
            </div>
            <TransCart ammount={ammount} />
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

export function TransCart({ ammount }) {
  const [type, setType] = useState("SALE");
  const [taxes, setTaxes] = useState(0);
  const [ammountpercent, setAmmountPercent] = useState(0);
  console.log(taxes, ammountpercent, type, ammount);
  return (
    <div className="flex flex-col h-[80%] border border-black w-[45%] rounded-xl items-center justify-center gap-[5%]">
      <div className="flex items-center justify-center text-2xl font-semibold p-2 bg-black text-white rounded-xl w-full h-[10%]">
        Transaction
      </div>
      <div className="h-[70%] flex flex-col gap-3  p-3">
        <div className="flex flex-row gap-2">
          <label className="text-md font-semibold">Type:</label>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
            className=""
          >
            <option value="SALE">SALE</option>
            <option value="PURCHASE">PURCHASE</option>
          </select>
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-md font-semibold">Taxes:</label>
          <input
            onChange={(e) => {
              setTaxes(Number(e.target.value));
            }}
            defaultValue={0}
            className="border w-[20%]"
            type="number"
            placeholder="Taxes"
          />
          %
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-md font-semibold">Discount:</label>
          <input
            onChange={(e) => {
              setAmmountPercent(Number(e.target.value));
            }}
            defaultValue={0}
            className="border w-[20%]"
            type="number"
            placeholder="Taxes"
          />
          %
        </div>
      </div>
      <div className="w-[80%]">
        <div className="flex flex-row gap-2">
          <label className="text-md font-semibold">Discount:</label>
          <div className=" w-[20%]">
            {type === "SALE"
              ? (ammount.sellingPrice * ammountpercent) / 100
              : (ammount.buyingPrice * ammountpercent) / 100}
            Rs
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-md font-semibold">Taxes:</label>
          <div className=" w-[20%]">
            {type === "SALE"
              ? (ammount.sellingPrice * taxes) / 100
              : (ammount.sellingPrice * taxes) / 100}
            Rs
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-md font-semibold">Total:</label>
          <div className=" w-[20%]">
            {type === "SALE"
              ? ammount.sellingPrice -
                (ammount.sellingPrice * ammountpercent) / 100 +
                (ammount.sellingPrice * taxes) / 100
              : ammount.buyingPrice -
                (ammount.buyingPrice * ammountpercent) / 100 +
                (ammount.buyingPrice * taxes) / 100}
            Rs
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center text-2xl font-semibold p-2 bg-black text-white rounded-xl w-[70%] h-[10%]">
        Done
      </button>
      <div></div>
    </div>
  );
}

export default Cart;
