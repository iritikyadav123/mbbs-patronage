"use client"

import { useEffect, useState } from "react"
import { getApplication, writeMessage } from "../api/user/route";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface applicationProps {
  id: number;
  name: string;
  surname: string;
  neetRoll: string;
  neetScore: number;
  message: string | null;
  image: string;
  section: boolean;
  userId: number;
}

export default function UserInfo() {
  const session = useSession();
  //@ts-ignore
  let userid = session.data?.user?.id
  let userId = Number(userid);
  console.log(userId);
  const [appData, setAppData] = useState<applicationProps>();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    async function getapplication() {
      const r = await getApplication(userId);
      if (r == null) {
        return;
      }
      setLoad(true);
      setAppData({
        id: r.id,
        name: r.name,
        surname: r.surname,
        neetRoll: r.neetRoll,
        neetScore: r.neetScore,
        message: r.message,
        image: r.image,
        section: r.section,
        userId: r.userId,
      });
    }
    getapplication();
  }, [userId])
  console.log(appData);
  if (load == false) {
    <div>
      <div className="text-center mt-10 mb-10 text-5xl font-semibold">User History</div>
      <div className="w-full mt-10 mb-10 max-h-25rem flex flex-col items-center justify-center">
        <div className="text-center h-[10%] w-[90%] sm:w-[80%] text-3xl font-semibold mt-2 border-b-2 border-gray-400">Application Details</div>
        <div className="">
          <div>Loading ... </div>
        </div>
      </div>
    </div>
  }
  const [message, setMessage] = useState(appData?.message || "");
  const [section, setSection] = useState(appData?.section || false);

  async function handleSubmit() {
    const res = await writeMessage(message, section, userId);
    if (res == false) {
      alert("unable to save data");
    } else {
      alert("data has been saved successfully")
    }
  }
  return (
    <div>
      <div className="text-center mt-10 mb-10 text-5xl font-semibold">User History</div>

      <div className="w-full mt-10 mb-10 max-h-25rem flex flex-col items-center justify-center">
        <div className="text-center h-[10%] w-[90%] sm:w-[80%] text-3xl font-semibold mt-2 border-b-2 border-gray-400">Application Details</div>
        <div className="">
          <img
            src={appData?.image}
            alt="Profile"
            className="h-[10rem] w-[10rem] rounded-full mt-[5rem] mb-[5rem] ring-2"
          />
          <div className="text-2xl font-semibold"><span className="font-medium text-xl">Name </span>{appData?.name} {appData?.surname}</div>
          <div className="text-2xl font-semibold"><span className="font-medium text-xl">NEET Rollnumber </span>{appData?.neetRoll}</div>
          <div className="text-2xl font-semibold"><span className="font-medium text-xl">NEET Score </span>{appData?.neetScore}</div>
          <div className="font-medium text-xl flex items-center justify-center gap-5 w-[80%]">If you get scholarship, you can mark and review you application <button className="h-10 w-10 flex item-center justify-center border-2 border-black " onClick={() => { setSection(!section) }}>{section == true && <img
            src="/check.png" // Use the absolute path for static 
            alt="Check Icon"
            className="h-8 w-8 font-bold"
          />}</button></div>
          <div className="flex flex-col items-center justify-center mt-[2rem] mb-[5rem]">
            <div className="font-medium text-xl">Review</div>
            <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className="text-xl font-semibold border-2 border-gray-600 bg-gray-100 text-gray-800 h-[10rem] w-[90%] sm:w-[80%] overflow-hidden" />
          </div>
          <div>
            <Button onClick={handleSubmit} className="">submit Review</Button>
          </div>
        </div>
      </div>
    </div>


  )
}