"use client"
import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { stuRegister } from "@/app/api/studentRes/route";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "./single-image-dropzone";


export default function ResigestrationCard() {
    const [file, setFile] = useState<File>();
    const [progress, setProgress] = useState(0);

    const { edgestore } = useEdgeStore();
    let name = "";
    const [stuData, setStuData] = useState({
        name: "",
        surname: "",
        neetRoll: "",
        neetScore: "",

    })
    let urls: any;
    async function handleClick() {
        if (file) {
            const res = await edgestore.
             //@ts-ignore
            myPublicImage.upload({
                file,
                onProgressChange: (progress : any) => {
                    setProgress(progress);
                },
            });
            urls = res.url.toString();
        }
        const response = await stuRegister({ stuData, urls });
        alert(response + " register sucessfully");
        setStuData({
            name: "",
            surname: "",
            neetRoll: "",
            neetScore: "",

        })
        setFile(undefined);

    }
    return (
        <div className="overflow-y-auto h-[85%] no-scrollbar">
            <div className="flex items-center  justify-around mt-5">
                <div className="hidden sm:block font-semibold text-gray-700">Name <Input placeholderValue="name" type="text" value={stuData.name} onChange={(e) => { setStuData(prevData => ({ ...prevData, name: e.target.value })) }} className="w-[10rem]" /></div>
                <div className="hidden sm:block font-semibold text-gray-700">surname <Input type="text" value={stuData.surname} onChange={(e) => { setStuData(prevData => ({ ...prevData, surname: e.target.value })) }} placeholderValue="surname" className="w-[10rem]" /></div>
                <div>
                    <SingleImageDropzone
                        width={200}
                        height={200}
                        value={file}
                        dropzoneOptions={{
                            maxSize: 1024 * 1024 * 1,
                            maxFiles: 1
                        }}
                        onChange={(file) => {
                            setFile(file);
                        }}
                    />
                    <div className="h-[6px] w-44 border border-gray-900 rounded overflow-hidden">
                        <div
                            className="h-full bg-gray-500 transition-all duration-150"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="sm:hidden flex items-start justify-around mt-5">
                <div className=" font-semibold text-gray-700">Name <Input placeholderValue="name" type="text" value={stuData.name} onChange={(e) => { setStuData(prevData => ({ ...prevData, name: e.target.value })) }} className="w-[10rem]" /></div>
                <div className="font-semibold text-gray-700">username <Input type="text" value={stuData.surname} onChange={(e) => { setStuData(prevData => ({ ...prevData, surname: e.target.value })) }} placeholderValue="surname" className="w-[10rem]" /></div>
            </div>
            <div className="flex items-center justify-around mt-5 w-[70%] sm:w-[50%] ">
                <div className=" font-semibold text-gray-700">NEET RollNumber <Input placeholderValue="RollNumber" onChange={(e) => { setStuData(prevData => ({ ...prevData, neetRoll: e.target.value })) }} type="text" value={stuData.neetRoll} className="w-[12rem]" /></div>
                <div className="font-semibold text-gray-700">NEET Score <Input placeholderValue="Score" onChange={(e) => { setStuData(prevData => ({ ...prevData, neetScore: e.target.value })) }} value={stuData.neetScore} type="text" className="w-[5rem]" /></div>
            </div>
            <div className="flex item center justify-around mt-10 mb-5">






                <Button onClick={handleClick} className=""  >submit form</Button>
            </div>
        </div>
    )
}