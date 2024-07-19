"use client"


import { userLogin } from "@/app/api/login/route";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";


export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("");
    const [warn, setwarn] = useState(0);
    async function handleClick() {
        const res = await userLogin(username, password);
        setwarn(res);
        if (res == 3) {
            await new Promise(r => { setTimeout(r, 1000) })
            setResponse("you are not registered");
            router.push('/signup');
        } else if (res == 1) {
            setResponse("you password is incorrect");
        }
        else {
            const res = await signIn("credentials", {
                username,
                password,
                redirect: false,
            })

            setResponse("You are successfully registered")
            await new Promise(r => { setTimeout(r, 2000) })
            router.push('/');



        }
    }
    return (
        <div className="h-[40rem] w-auto flex items-center justify-center">
            <div className="h-[80%] w-[25rem] bg-gray-100 rounded-lg shadow-xl shadow-gray-300 flex flex-col items-center ">
                <div className="mt-5 mb-5"><Logo /></div>
                <div className="text-2xl font-medium text-gray-700 mb-5" >Login</div>
                <div className="flex flex-col items-center gap-5 w-[80%] text-xl">
                    <div className="w-full">
                        Username
                        <Input value={username} type={'email'} onChange={(e) => { setUsername(e.target.value) }} placeholderValue="username" />
                    </div>
                    <div className="w-full">
                        password
                        <Input value={password} onChange={(e) => { setPassword(e.target.value) }} type={'email'} placeholderValue="password" />
                    </div>
                </div>
                <Button className="w-[10rem] mt-10" onClick={handleClick}>Login</Button>
                <div className="text-black mt-2">Have an account? <Link href={'/signup'} className="font-semibold text-blue-600">Signup</Link></div>
                <div className={`mt-5 font-semibold  ${warn == 2 ? "text-blue-700/55" : "text-red-600/55"}`}>{response}</div>
            </div>

        </div>
    )
}