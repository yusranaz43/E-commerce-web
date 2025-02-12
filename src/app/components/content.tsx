import Image from "next/image"

export default function Content(){
    return(
        <section className="mx-[260px] my-24">
           <div className="grid grid-cols-2 gap-16">
              <div className="flex gap-3">
                <Image src="/images/content1.png" alt="content 1 image"
                width={144}
                height={398}
                />

                <Image src="/images/content2.png" alt="content 2 image"
                width={180}
                height={398}
                />
              </div>

              <div className="w-[447px] h-[246px] mt-10 pl-8">
                <h5 className="text-cSky text-sm pb-5">Featured Products</h5>
                <h2 className="text-customBlue text-3xl font-bold pb-5">We love what we do</h2>
                <p className="text-gray-500 text-sm">Problems trying to resolve the conflict between <br/>
                  the two major realms of Classical physics: <br/>
                  Newtonian mechanics.<br/><br/>
 
                  Problems trying to resolve the conflict between <br/>
                  the two major realms of Classical physics: <br/>
                  Newtonian mechanics </p>
              </div>
           </div>
        </section>
    )
}