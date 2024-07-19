"use client"
import TeammatesBox from "@/components/TeammatesBox"
import { useState } from "react"

const historyData = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vero amet corrupti sed ab repudiandae omnis asperiores libero. Ratione inventore rerum sapiente, iure nesciunt a sit. Fugiat est laudantium molestiae.
            Adipisci eveniet nostrum sequi tempora veritatis dolorum, reprehenderit odit aliquam, at temporibus corporis mollitia vitae quidem minus maiores nulla ratione repellat officia ut id molestias deserunt. Similique dolores voluptatibus dolor.
                At ducimus voluptatem, ratione accusamus atque inventore a eius iusto similique sint, architecto aut cumque necessitatibus aliquam tenetur, nobis laudantium optio. Laboriosam adipisci neque amet qui blanditiis autem, atque quam.
                Itaque voluptate repellat harum obcaecati distinctio ipsum eveniet vero unde id vitae sed reprehenderit ea adipisci tempore, enim sunt voluptas expedita maxime quos iure alias molestias eos iusto perspiciatis! Modi?
                Magni exercitationem, deserunt consequatur in iusto nobis impedit ratione accusantium odio aut dolorem necessitatibus labore numquam asperiores animi at adipisci ullam et soluta cupiditate laboriosam. Ab blanditiis ut ratione quo!
                Dolorem impedit error culpa officiis commodi dicta consequuntur maxime a molestiae quae. Molestias harum, minima ipsum quisquam, facere numquam a vitae porro blanditiis iure vel ipsam accusamus cupiditate voluptate impedit?
                Nostrum necessitatibus deleniti doloremque nam nesciunt temporibus ut! Praesentium veritatis illum sunt laborum quam. Optio blanditiis fugiat consequuntur possimus laborum exercitationem, aut, dolor modi esse sunt, commodi illum voluptates. Et.
                Illo voluptatum, placeat hic saepe fugit maxime reiciendis aliquid voluptatibus! Quae voluptatem, laboriosam a quasi eum error ut rerum doloribus ad, sint sed doloremque obcaecati atque cupiditate nesciunt dicta fugit.
                Aut, modi in. Quod, aliquid. Exercitationem delectus non vitae corporis. Et, perferendis? Perferendis praesentium consequuntur officiis laboriosam ullam est tenetur perspiciatis, eius totam, quo ab, dolore blanditiis error reiciendis velit.
                Excepturi, quam magni delectus, expedita nostrum nesciunt corrupti molestiae animi omnis tempora eveniet molestias, debitis commodi nemo deserunt eaque aperiam voluptates optio vel odit. Quasi doloremque quisquam voluptatum magni facilis!`

export default function Aboutus() {

    const [data, setData] = useState(false)

    return (
        <div>
            <div className="text-5xl text-center font-semibold text-black italic mt-10 mb-10">Our Organization</div>
            <div className="flex items-center justify-center">
                <div className=" w-[90%] sm:w-[70%] text-xl font-semibold text-gray-800">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum doloremque beatae ut quo, possimus amet inventore ipsam fuga corrupti, accusamus officiis asperiores tempora expedita ipsa adipisci officia soluta deserunt necessitatibus.
                    Magnam ratione consequatur rem dolores cum nam repellendus. Reprehenderit laudantium commodi quod quasi atque? Fugiat distinctio asperiores laudantium minima quibusdam laboriosam ex qui atque molestias, inventore sint, nihil, consequatur nostrum!
                    Aliquid quam culpa nisi accusantium, iusto obcaecati facilis atque. Porro assumenda tempora fugit alias repudiandae voluptatibus corrupti sed dignissimos, quo minima maxime eveniet ad debitis quidem aliquam voluptatum distinctio minus?
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="w-[90%] sm:w-[80%] text-3xl font-semibold">HISTORY -</div>
            </div>
            <div className="flex items-center justify-center">

                <div className="w-[90%] sm:w-[70%] text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates suscipit. Deserunt soluta expedita recusandae totam earum ex illo dicta, fugit nostrum temporibus porro doloremque. Vero rerum delectus esse ut?  {
                        data == false ? <span onClick={() => { setData(!data) }} className="text-xl font-semibold cursor-pointer">Read More...</span> : historyData
                    }
                </div>

            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-5xl italic font-semibold mt-10">Our Teammates</div>
                <TeammatesBox />
            </div>
        </div>
    )
}