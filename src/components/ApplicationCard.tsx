import Image from "next/image";

export default function ApplicationCard({ stuInfo }: { stuInfo: any }) {
  return (
    <div className="border bg-stone-100/80 flex items-start justify-evenly p-5 gap-5 w-full m-5 shadow-lg shadow-stone-200 rounded-xl">
      <div className="h-[8rem] w-[8rem] rounded-full"> {stuInfo.image == "" ? <span className="text-3xl font-bold">NA</span> :  
      <img
      src={stuInfo.image}
      alt="Student Image"
      className="h-full w-full rounded-full object-cover object-center"
    /> }</div>
      <div>
        <div className="text-xl sm:text-2xl font-semibold"><span className="text-xl font-semibold text-gray-500">Name - </span>{stuInfo.name} {stuInfo.surname}</div>
        <div className="text-xl sm:text-2xl font-semibold"><span className="text-xl sm:text-2xl font-semibold text-gray-500">Score - </span>{stuInfo.neetScore}</div>
        <div className="text-2xl font-semibold"><span className="text-xl sm:text-2xl font-semibold text-gray-500">RollNumber - </span>{stuInfo.neetRoll}</div>

      </div>
    </div>
  )
}