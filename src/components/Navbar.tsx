"use client"

import Link from "next/link"
import { Logo } from "./ui/Logo"
import { signOut, useSession } from "next-auth/react";
export  const Navbar = () => {
  const session = useSession();
  let userid = 0;
    //@ts-ignore
    userid = session.data?.user?.id

    const handleScrollToTop = () => {
      window.scrollTo({ top : 10000, behavior: 'smooth' });
    };
     return (
        <div className="w-full sticky inset-x-0 top-0 z-[100] h-20 flex items-center justify-center bg-transparent">
        <div className="sticky z-[100] h-full inset-x-0 top-0 w-[90%] md:w-[80%] border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all  flex items-center  justify-between">
          <div className="flex items-center justify-center  w-[80%]">
            <Logo />
            <div className="hidden md:block w-[80%] ">
            <div className=" flex gap-4 ml-5 mt-5 text-xl font-semibold justify-evenly">
              <Link className="active:text-gray-600" href={"/"}>Home</Link>
              <Link className="active:text-gray-600" href={"/aboutus"}>About Us</Link>
              {/* <Link href={""}>Sponsorship Program</Link>
              <Link href={""}>Sucess Story</Link>
              <Link href={""}>Donate</Link> */}
              <Link  onClick={handleScrollToTop} className="active:text-gray-600 scroll-to-bottom transition duration-300 "
       href={""}>Contact</Link>
            </div>
            </div>
          </div>
          <div className="text-xl flex font-semibold gap-2 ">
             {
              userid == undefined  ? <div><Link className="active:text-gray-600" href={"./signup"}>Signup</Link>
               <Link className="active:text-gray-600 ml-5" href={"./login"}>Login</Link> </div> : <div><button className="active:text-gray-600" onClick={()=>{signOut()}}>Logout</button>
                <Link href="/userinfo" className="active:text-gray-600 ml-5">User</Link>
                </div>
             }
          </div>
        </div>
      </div>
     )
}

