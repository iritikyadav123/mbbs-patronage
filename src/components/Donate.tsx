"use client"

import { Input } from "./ui/input";
import { Button } from "./ui/Button";
import { useState } from "react";
import { submitDonation } from "@/app/api/doner/route";

interface donerProps  {
    name : string;
    surname: string;
    amount: string;
    message: string;
    address: string;
}

export default function Donate() {
    const [donerData, setDonerData] = useState<donerProps>({
         name : "",
         surname: "",
         amount: "",
         message : "",
         address : "",
    })

     async function handleClick() {
          const res = await submitDonation({donerData});
         alert(res + " you are successfully donte money");
         setDonerData(
          {
            name : "",
            surname: "",
            amount: "",
            message : "",
            address : "",
       }
         )
     }


    return (
        <div className=" bg-gray-100/40 overflow-auto h-[85%] no-scrollbar">
        <div className="flex items-center justify-start mt-5">
           <div className="ml-5"><span className="font-semibold text-gray-700">Name</span> <Input type="text" placeholderValue="Name" value={donerData.name} onChange={(e) =>  setDonerData(prevData => ({
      ...prevData,
      name: e.target.value
    }))} className="w-[80%]" /></div>
           <div className="font-semibold text-gray-700"><span>Surname</span> <Input className="w-[80%]" type="text" placeholderValue="surname" value={donerData.surname} onChange={(e) =>  setDonerData(prevData => ({
      ...prevData,
      surname: e.target.value
    }))}/></div>
        </div>
        <div className="ml-5 mt-5 flex items-center justify-start gap-10">
           <div className="font-semibold text-gray-700"><span>Adress</span> <Input className=" " type="text" placeholderValue="Address" value={donerData.address} onChange={(e) =>  setDonerData(prevData => ({
      ...prevData,
      address: e.target.value
    }))}/></div>
           <div className="font-semibold text-gray-700"><span>Amount</span> <Input className="w-20" type="text" placeholderValue="Amount" value={donerData.amount} onChange={(e) =>  setDonerData(prevData => ({
      ...prevData,
      amount: e.target.value
    }))}/></div>
           <Button onClick={handleClick} className="hidden sm:block w-[10rem]" >submit</Button>
           </div>
           <div className="mt-5 ml-5">
            <div className="mb-5 font-semibold text-gray-700">Message for students</div>
             <textarea value={donerData.message} className="w-[90%] md:w-[80%] h-20" onChange={(e) => {setDonerData(prevData => ({
      ...prevData,
      message: e.target.value
    }))}}/>
           </div>
           <div className="sm:hidden flex mt-5 mb-10  items-center justify-end mr-10"><Button onClick={handleClick} className="w-[10rem]">submit</Button></div>

  </div>
    )
}