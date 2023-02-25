import React, { useState } from 'react'
import { publicApi } from '../../Api';

export default function AddExpense({ id, currentUser, setBool }) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expenseOn, setExpenseOn] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    currentUser.getIdToken().then((token) => {
      if (name !== "" && description !== "" && amount !== "" && quantity !== "" && expenseOn !== "") {
        publicApi
          .post(
            `/buissness/${id}/expenses/create`,
            {
              name,
              description,
              amount,
              quantity,
              expenseOn
            },
            {
              headers: {
                authorization: token,
              },
            }
          )
          .then((res) => {
            setBool(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

  return (
    <>
      <div className='w-[30%] bg-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20 p-[32px]'>
        <input onChange={(e) => {
          setName(e.target.value);
        }} type="text" placeholder='Name' className='w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0' />
        <textarea onChange={(e) => {
          setDescription(e.target.value);
        }} placeholder='Description' className='w-full h-[150px] border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0' />
        <input onChange={(e) => {
          setAmount(e.target.value);
        }} type="text" placeholder='Amount' className='w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0' />
        <input onChange={(e) => {
          setQuantity(e.target.value);
        }} type="number" placeholder='Quantity' className='w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0' />
        <input onChange={(e) => {
          setExpenseOn(e.target.value);
        }} type="text" placeholder='Expense On' className='w-full border-2 border-solid p-[8px] bg-[transparent] border-1 border-black mb-[16px] focus:outline-0' />
        <button onClick={handleAdd} className='w-full bg-[#000C2A] text-white p-[8px] rounded-[20px]'>Add</button>
      </div>
      <div onClick={() => {
        setBool(false);
      }} className='absolute w-[100%] h-[100%] top-[0%] left-[0%] bg-[rgb(0,0,0,0.2)] z-13'></div>
    </>
  );
}