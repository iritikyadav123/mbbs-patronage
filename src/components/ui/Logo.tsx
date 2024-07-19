import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href={'/'} className="text-lg sm:text-3xl font-semibold flex items-center">
            <img
                src="/logo.png" 
                alt="Logo"
                className="mr-1 h-5 w-5 sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
            MBBS<span className="text-sm sm:text-lg  text-cyan-500">patronage</span>
        </Link>
    )
}