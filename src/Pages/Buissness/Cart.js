import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BuissnessApi } from '../../Api';

function Cart({setPopup}) {
    const [inventoryData, setInventoryData] = useState([]);
    const [from, setFrom] = useState(0);
    const [gap, setGap] = useState(10);
    const [pages, setPages] = useState(1);
    const [loader, setLoader] = useState(false);
    const [flag, setFlag] = useState(false);
    const [cart, setCart] = useState([]);

    const handleAdd = async (inventoryId) => {
        setLoader(true);
        BuissnessApi()
            .then((publicApi) => {
                publicApi.post("/cart/update", {
                    inventoryId: inventoryId,
                    quantity: 1
                }).then(() => {
                    toast.success("Item added to cart");
                    setFlag(true);
                    setLoader(false);
                }).catch(() => {
                    toast.error("Server error");
                    setLoader(false);
                })
            })
    }

    useEffect(() => {
        BuissnessApi()
            .then((publicApi) => {
                publicApi
                    .get(`/inventory?from=${from}&to=${from + gap}`)
                    .then((res) => {
                        setInventoryData(res.data.inventory);
                        setPages(res.data.totalPage);
                    })
                    .catch((err) => {
                        if (err.request.status) {
                            return toast.error(err.response.data.message);
                        }
                        toast.error(err.message);
                    });
            })
            .catch((err) => {
                toast.error(err.message);
            });
            setFlag(true);
    }, []);

    if(flag){
        BuissnessApi()
            .then((publicApi) => {
                publicApi.get("/cart").then((res) => {
                    // console.log(res.data);
                    if(res.data.cart){
                        setCart(res.data.cart);
                    }
                }).catch(() => {
                    toast.error("Server error");
                })
            })
        setFlag(false);
    }

    return (
        <>
            <div className='fixed bg-[#ffffff] w-[70%] h-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[15]'>
                <div>

                </div>
                <div className='flex flex-col h-[100%]'>
                    <div className='h-[50%] p-[32px] bg-[#ff5436]'>
                        {

                        }
                    </div>
                    <div className='flex flex-col gap-[8px] h-[50%] p-[32px] overflow-y-scroll'>
                        {
                            inventoryData.map((item, index) => {
                                let details = [
                                    index + 1,
                                    item.inventoryName,
                                    item.inventoryDescription,
                                    `${item.inventoryCost.sellingPrice}/ ${item.inventoryCost.buyingPrice}`,
                                    item.inventoryQuantity
                                ];
                                return (
                                    <div key={item._id} className='flex gap-[16px] p-[16px] border border-solid border-black'>
                                        <p>{details[0]}</p>
                                        <p className='grow'>{details[1]}</p>
                                        <button onClick={() => {
                                            if(!loader){
                                                handleAdd(item._id);
                                            }
                                        }} className='px-3 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold'>Add</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div onClick={() => {
                setPopup(false);
            }} className='fixed top-[0%] left-[0%] w-[100%] h-[100%] bg-[rgb(0,0,0,0.4)] z-[14]'></div>
        </>
    )
}

export default Cart;