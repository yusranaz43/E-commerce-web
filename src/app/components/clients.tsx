import Image from "next/image"

export default function Clients(){
    return(
        <section className="py-16 w-full h-[175px]">
            <div className="flex justify-center space-x-6 items-center">
               <Image src="/images/Vector.png" alt="Client partner1" width={100} height={100}/>
               <Image src="/images/col-md-1.png" alt="Client partner2" width={100} height={100}/>
               <Image src="/images/col-md-2.png" alt="Client partner3" width={100} height={100}/>
               <Image src="/images/col-md-3.png" alt="Client partner4" width={100} height={100}/>
               <Image src="/images/col-md-4.png" alt="Client partner5" width={100} height={100}/>
               <Image src="/images/col-md-5.png" alt="Client partner6" width={100} height={100}/>
            </div>
        </section>
    )
}