import ApplicationCard from "@/components/ApplicationCard";
import getStudentRegistration, { stuRevalidate } from "../api/studentRes/route";


export default async function StuApplication() {
    const stuApplication = await getStudentRegistration();
    { next: { tags: ['stuApplication'] } }
    stuRevalidate();
    return (
        <div className="flex flex-col items-center justify-center no-scroller">
            <div className="text-5xl text-center font-semibold text-black italic mt-10 mb-10">Student Applications</div>
            <div className=" flex flex-col items-center justify-center w-[90%] sm:w-[60%]">
                {
                    stuApplication.map((item, index) => (
                        <ApplicationCard key={index} stuInfo={item} />
                    ))
                }
            </div>
        </div>
    )
}