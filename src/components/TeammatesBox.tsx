const contentData = [{
    url: "./emp4.jpg",
    name: "Jatin Garg",
    pos: "CEO"
},
{
    url: "./emp6.jpg",
    name: "Kavya Yadav",
    pos: "Head Manager"
},
{
    url: "./emp5.jpg",
    name: "virat Sharma",
    pos: "Technical Manager"
},
{
    url: "./emp1.jpg",
    name: "kim hoo",
    pos: "Finance Manager"
},
{
    url: "./emp3.jpg",
    name: "anne jack",
    pos: "market Manager"
},
{
    url: "./emp2.jpg",
    name: "kim root",
    pos: " Manager"
},

]


import Card from "./Card";


export default function TeammatesBox() {
    return (
        <div className=" mt-[7rem] w-[95%] md:w-[80%] grid justify-items-center gap-10 grid-cols-12 shadow-lg shadow-gray-200 p-5">

            {
                contentData.map((item, index) => (
                    <div key={index} className="col-span-10 sm:col-span-6 lg:col-span-4 ">
                        <Card contantData={item} />
                    </div>
                ))
            }
        </div>
    )
}