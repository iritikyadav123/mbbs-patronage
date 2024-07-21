
import StudentReiewCard from "@/components/StudentReviewCard";
import { TagLine } from "@/components/TagLine";
import Link from "next/link";
import { findallReview, reviewRevalidate } from "./api/user/route";



export default async function Home() {
   const reviewResponse = await findallReview();
   { next: { tags: ['reviewResponse'] } }
    reviewRevalidate();


   return (
      <div >
         <div className="flex h-14 items-center justify-center">
            <div className="flex h-full items-center justify-evenly w-[90%] sm:w-[80%] text:md sm:text-xl md:text-2xl font-semibold text-gray-800"><Link href={'/philanthropists'} className="cursor-pointer">Philanthropists</Link>
               <Link href={'/stuApplication'} className="cursor-pointer">Student Applications</Link></div>
         </div>
         <div >
            <TagLine />
         </div>
         <div className="h-[18rem] sm:h-[15rem]"></div>
         <div className=" flex flex-col items-center">
            <div className="text-center text-5xl font-semibold">Mission</div>
            <div className="mt-[4rem] w-[90%] sm:w-[80%] lg:w-[70%]  text-2xl text-gray-900/95 font-semibold">
               To provide financial support and mentorship to deserving MBBS students in India, promoting quality healthcare and social responsibility.
            </div>
         </div>
         <div className="mt-[6rem] flex flex-col items-center justify-center rounded-2xl">
            <div className="text-center text-5xl font-semibold">Success Stories</div>
            <div className=" mt-[4rem] w-[95%] md:w-[80%] grid justify-items-center gap-10 grid-cols-12  shadow-gray-200 p-5 overflow-auto no-scrollbar   lg:max-h-[100vh] rounded-2xl shadow-2xl ">
               {
                  reviewResponse && reviewResponse.map((item, index) => (
                     <div key={index} className="col-span-10 lg:col-span-6">
                        <StudentReiewCard reviewProp={item} />
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   );
}
