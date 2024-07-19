
interface condentDataProps {
    url : string;
    name : string;
    pos : string;
}

export default function Card({contantData} : {contantData :condentDataProps}) {
    return (
        <div className=" w-[19rem] flex flex-col items-center justify-center h-[25rem] gap-5 rounded-xl shadow-xl shadow-gray-400/80 bg-gray-50 cursor-pointer">
            <div className=" h-[15rem] w-[15rem] rounded-xl overflow-hidden shadow-xl shadow-gray-400">
                <img src={contantData.url} className="h-full w-full object-cover object-center" /> 
            </div>
            <div className=" w-full flex flex-col items-center justify-center gap-5">
                 <div className="text-2xl text-gray-800/80 font-semibold italic">{contantData.name}</div>
                 <div className="text-2xl text-gray-800/80 font-semibold italic">{contantData.pos}</div>
            </div>
        </div>
    )
}