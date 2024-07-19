import DonarCard from "@/components/DonerCard";
import { getDonors } from "../api/doner/route";


export default async function Philanthropists() {
     const donnerData = await getDonors();

     return (
          <div className="flex flex-col items-center justify-center no-scroller">
               <div className="text-5xl text-center font-semibold text-black italic mt-10 mb-10">Our Philanthropists</div>
               <div className=" flex flex-col items-center justify-center w-[90%] sm:w-[60%]">
                    {
                         donnerData.map((item, index) => (
                              <DonarCard key={index} donnerInfo={item} />
                         ))
                    }
               </div>
          </div>
     )
}