import Link from "next/link"

export const Logo=()=>{
    return (
        <Link href={'/'} className="text-3xl font-semibold flex items-center">
            <img src={'./logo.png'} className="h-7 w-7 mr-1" />
            MBBS<span className="text-lg  text-cyan-500">patronage</span>
         </Link>
    )
}