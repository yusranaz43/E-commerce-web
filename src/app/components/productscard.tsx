import Image from "next/image"
import Link from "next/link"

export default function ProductCard(){
    return(
        <section className="my-14">
            <div className="pt-14">
                <div className="text-center">
                    <h2 className="pb-2.5 text-gray-600">Featured Products</h2>
                    <h3 className="font-bold pb-2.5 text-gray-900 text-2xl">BESTSELLER PRODUCTS</h3>
                    <p className="text-sm text-gray-600">Problems trying to resolve the conflict between </p>
                </div>

                <div className="px-32 py-16">

                    {/* row-1 */}
                    <div className="flex gap-6">
                        <div>
                        <Image src="/images/product1.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>
                        <div>
                        <Image src="/images/product2.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>

                        <div>
                        <Image src="/images/product3.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>

                        <div>
                        <Image src="/images/product4.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>

                        <div>
                        <Image src="/images/product5.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold ">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>
                    </div>

                    {/* row-2 */}
                    <div className="flex gap-6 mt-16">
                        <div>
                        <Image src="/images/product1.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>

                        <div>
                        <Image src="/images/product6.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>

                        <div>
                        <Image src="/images/product7.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>

                        <div>
                        <Image src="/images/product8.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>

                        <div>
                        <Image src="/images/product3.png" alt=""
                        width={183}
                        height={238}/>

                        <div className="text-center pt-5 pb-5">
                            <h5 className="font-bold pb-3">Graphic Design</h5>
                            <Link href="/" className="font-bold text-gray-500 pb-3">English Department</Link>
                            <h5 className="text-gray-400 font-semibold">$16.48 <span className="text-green-700 font-semibold">$6.48</span></h5>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="pl-[524px]">
                    <button className="bg-white border border-cSky text-cSky hover:bg-customBlue font-semibold text-sm font-sans rounded-lg w-56 h-10">LOAD MORE PRODUCTS</button>
                </div>
            </div>
        </section>
    )
}