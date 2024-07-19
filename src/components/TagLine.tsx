"use client"
import { useState } from "react"
import Donate from "./Donate"
import ResigestrationCard from "./ResigestrationCard"
import { Button } from "./ui/Button"
import { Input } from "./ui/input"


export const TagLine = () => {
  const [choose, setChoose] = useState(false);
  return (
    <div className=" w-full flex-col flex items-center justify-center">
      <div className="bg-[url('/pic1.jpg')] h-[35rem] sm:w-[80%] w-full text-5xl text-gray-700 font-extrabold italic flex  justify-start  bg-center bg-cover rounded-b-lg">
        <div className="ml-10 mt-[6rem]">
          Empowering Future Doctors, Enhancing HealthCare
        </div>
      </div>
      <div className="w-[95%] md:w-[75%] h-[25rem] rounded-lg  absolute top-[55%] sm:top-[65%] overflow-hidden bg-gray-100">
        <div className="h-full">
          <div className="flex h-[15%] bg-gray-300 items-center justify-evenly text-2xl font-semibold border-b-2 border-gray-500 p-4 backdrop-blur-2xl overflow-hidden">
            <div onClick={() => { setChoose(false) }} className={`hover:text-gray-600 cursor-pointer  ${choose == false && "border-b-4 border-gray-600"}`}>Donate</div>
            <div onClick={() => { setChoose(true) }} className={`hover:text-gray-600 cursor-pointer  ${choose == true && "border-b-4 border-gray-600"}`}>student apply</div>
          </div>
          {
            choose == false ? <Donate /> : <ResigestrationCard />
          }
        </div>
      </div>
    </div>
  )
}