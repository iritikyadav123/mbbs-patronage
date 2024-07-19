import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href={'/'} className="text-3xl font-semibold flex items-center">
            {/* @ts-ignore */}
            <img
                src="/logo.png" // Use the absolute path for static assets
                alt="Logo"
                className="mr-1 h-10 w-10"
            />
            MBBS<span className="text-lg  text-cyan-500">patronage</span>
        </Link>
    )
}