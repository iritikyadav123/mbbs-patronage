"use client"

import Link from "next/link"
import { Logo } from "./ui/Logo"
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
export const Navbar = () => {
  const session = useSession();
  const [menubar , setMenubar] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  let userid = 0;
  //@ts-ignore
  userid = session.data?.user?.id

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenubar(false);
    }
  };
  const handleScroll = () => {
    setMenubar(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 10000, behavior: 'smooth' });
  };
  return (
    <div className="w-full sticky inset-x-0 top-0 z-[100] h-20 flex items-center justify-center bg-transparent">
      <div className="sticky z-[100] h-full inset-x-0 top-0 w-[90%] md:w-[80%] border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all  flex items-center  justify-between">
        <div className="flex items-center justify-start w-[80%]">
            
                 {/* ///fdjdljlfkdjljfldl */}


                 <div className="flex items-center gap-2 ">
                    <div onClick={() => {setMenubar(!menubar) }}  className="sm:hidden h-6 w-8 flex items-center justify-center hover:border-2 hover:bg-gray-100 rounded-md text-gray-50 m-2 cursor-pointer">
                        <img src="/menu.png" className="h-6 w-7  text-black active:h-7 " />
                    </div>
                    { menubar == true ?
                       <div ref={menuRef}
                       id="menu-list"  className="absolute rounded-lg sm:hidden left-[5%] top-[90%] border-4  p-4 w-[75%] flex flex-col gap-2 text-xl  font-medium bg-gray-200 backdrop-blur-xl">
                            <Link href={'/'} className="border-b-2  pt-1 rounded-lg pb-2  active:font-extrabold cursor-pointer pl-2 hover:bg-gray-300  ">HOME</Link>
                            <Link href={'aboutus'} className="border-b-2  pt-1 rounded-lg pb-2  active:font-extrabold cursor-pointer pl-2  hover:bg-gray-300">About us</Link>
                            <div onClick={handleScrollToTop}  className="border-b-2  pt-1 rounded-lg pb-2  active:font-extrabold cursor-pointer pl-2 hover:bg-gray-300 " >Contact</div>
                        </div> : null }
                    </div>
                 {/* /////////lkfjslkfjljflfjdlf */}
          <Logo />
          <div className="hidden md:block w-[80%] ">
            <div className=" flex gap-4 ml-5 mt-5 text-xl font-semibold justify-evenly">
              <Link className="active:text-gray-600" href={"/"}>Home</Link>
              <Link className="active:text-gray-600" href={"/aboutus"}>About Us</Link>
              {/* <Link href={""}>Sponsorship Program</Link>
              <Link href={""}>Sucess Story</Link>
              <Link href={""}>Donate</Link> */}
              <Link onClick={handleScrollToTop} className="active:text-gray-600 scroll-to-bottom transition duration-300 "
                href={""}>Contact</Link>
            </div>
          </div>
        </div>
        <div className="text-sm sm:text-xl flex font-semibold sm:gap-2 ">
          {
            userid == undefined ? <div><Link className="active:text-gray-600" href={"./signup"}>Signup</Link>
              <Link className="active:text-gray-600 ml-2 sm:ml-5" href={"./login"}>Login</Link> </div> : <div className="flex"><button className="active:text-gray-600" onClick={() => { signOut() }}>Logout</button>
              <Link href="/userinfo" className="active:text-gray-600 ml-2  sm:ml-5 mr-4">User</Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

