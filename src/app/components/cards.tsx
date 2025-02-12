import Image from "next/image"

export default function Cards(){
    return(
        <section className="mx-24">
            <div className="grid grid-cols-2 gap-4">
                <div className="row-span-2">
                    <div className="relative">
                          <Image src="/images/card1.jpg" alt="shop card1 image" 
                           width={700} 
                           height={700} 
                           objectFit="cover"/>
                        <div className="bg-customLightBlue bottom-0 text-white p-4 absolute w-[362px] h-[205px] pl-14 pt-14">
                          <h6 className="text-2xl font-bold pb-2">Top Product Of <br/> the Week</h6>
                          <button className="border border-white  bg-transparent px-4 py-2 mt-2 rounded-md font-bold">EXPLORE ITEMS</button>
                        </div>
                   </div>
                </div>
                <div className="relative">
                   <Image src="/images/card2.jpg" alt="shop card2 image" 
                   width={480} 
                   height={50} 
                   objectFit="cover"/>
                   <div className="bg-customLightBlue bottom-0 text-white p-4 absolute w-[294px] h-[150px] pl-9 pt-9">
                      <h6 className="text-xl font-semibold pb-1">Top Product Of the Week</h6>
                      <button className="border border-white bg-transparent px-4 py-2 mt-2 rounded-md font-bold">EXPLORE ITEMS</button>
                   </div>
                </div>
                <div className="relative">
                   <Image src="/images/card3.jpg" alt="shop card3 image" 
                   width={480} 
                   height={50} 
                   objectFit="cover"/>
                   <div className="bg-customLightBlue bottom-0 text-white p-4 absolute w-[294px] h-[150px] pl-9 pt-9">
                      <h6 className="text-xl font-semibold pb-1">Top Product Of the Week</h6>
                      <button className="border border-white bg-transparent px-4 py-2 mt-2 rounded-md font-bold">EXPLORE ITEMS</button>
                   </div>
                </div>
            </div>
        </section>
    )
}