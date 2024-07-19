



export default function StudentReiewCard({reviewProp} : {reviewProp : any}) {
    return <div className="h-[20rem] w-[25rem] bg-gray-100 rounded-lg shadow-xl shadow-gray-200/80">
         <div className=" h-[70%] p-5 text-xl font-medium overflow-auto no-scrollbar text-gray-900/60">
            {reviewProp.message}
         </div>
         <div className="flex items-center justify-end h-[30%] w-full">
             <div className="flex items-center justify-center h-full p-5">
                 <div><img src={reviewProp.image} className=" h-14 w-14 object-cover object-center ring-2 ring-stone-200 rounded-full"/></div>
                 <div className=" max-w-[10rem] ml-2 ">
                    <div className="text-2xl font-semibold text-slate-800">{reviewProp.name} {reviewProp.surname}</div>
                    <div className="text-xl font-medium text-gray-700">MBBS</div>
                 </div>
             </div>
         </div>
    </div>
}