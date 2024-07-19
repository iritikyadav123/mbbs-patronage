import Image from "next/image";

export default function Footer() {
     return (
          <div className=" bg-slate-900 text-white/60 mt-[8rem] h-[20rem] rounded-t-xl flex flex-col items-center justify-end">
               <div className="text-[15px]">Contect Us +91789349485</div>
               <div className="text-[15px]">Email - mbbspatronage@.ord</div>
               <div className="flex gap-5 items-center justify-center mt-5 mb-5">
                    {/* @ts-ignore */}
                    <img
                         src="/logo1.png"  
                         alt="Logo"
                         className="cursor-pointer h-8 w-8 "
                    />
                   
                    <img
                         src="/logo2.png"  
                         alt="Logo"
                         className="cursor-pointer h-8 w-8"
                    />
                    
                    <img
                         src="/logo3.png" 
                         alt="Logo"
                         className="cursor-pointer h-8 w-8"
                    />
                   
                    <img
                         src="/logo4.png" 
                         alt="Logo"
                         className="cursor-pointer h-8 w-8"
                    />
               </div>
               <div className="mt-2 pt-3 pb-2 w-full text-center bg-slate-800">2020 Copyright: mbbspatronage.com </div>
          </div>
     )
}