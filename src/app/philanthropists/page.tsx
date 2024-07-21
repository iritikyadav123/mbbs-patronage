import DonarCard from "@/components/DonerCard";
import { getDonors } from "../api/doner/route";
import { revalidate } from "../api/doner/route";


 



    export default async function Philanthropists() {
         const donnerData = await getDonors();
         { next: { tags: ['donnerData'] } }
        revalidate();

        return (
            <div className="flex flex-col items-center justify-center no-scroller">
                <div className="text-5xl text-center font-semibold text-black italic mt-10 mb-10">Our Philanthropists</div>
                <div className=" flex flex-col items-center justify-center w-[90%] sm:w-[60%]">
                    {
                        donnerData.map((item: any, index: number) => (
                            <DonarCard key={index} donnerInfo={item} />
                        ))
                    }
                </div>
            </div>
        )
    }
     