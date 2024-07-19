

export default function DonarCard({ donnerInfo }: { donnerInfo: any }) {
    return (
        <div className="border bg-stone-100/80 flex items-start justify-stretch p-5 gap-5 w-full m-5 shadow-lg shadow-stone-200 rounded-xl flex-col">
            <div className="text-xl sm:text-2xl font-semibold"><span className="text-xl font-semibold text-gray-500">Name - </span>{donnerInfo.name}  {donnerInfo.surname}</div>
            <div className="text-xl sm:text-2xl font-semibold"><span className="text-xl font-semibold text-gray-500">Ammount - </span>{donnerInfo.amount}</div>
            <div className="h-[10rem] overflow-auto no-scrollbar"><span className="text-xl font-semibold text-gray-500">Message - </span>{donnerInfo.message}</div>
        </div>
    )
}