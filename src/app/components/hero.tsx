import Image from 'next/image';

export default function Hero(){
    return(
      <section className=''>
        <div className=' bg-customSeaGreen mx-14 rounded-xl mt-6 w-[1150px] h-[469px]'>
        
        {/* Large white circle */}
        <div className='absolute top-24 right-12 w-[400px] h-[400px] bg-white rounded-full'></div>

        {/* Small circles */}
        <div className='absolute top-[124px] right-[450px] w-20 h-20 bg-white rounded-full'></div>
        <div className='absolute top-56 right-5 w-4 h-4 bg-purple-500 rounded-full'></div>
        <div className='absolute top-[315px] right-5 w-6 h-6 bg-white rounded-full z-10'></div>

          <div className='absolute top-64 left-44 text-left'>
            <h5 className='text-customBlue font-bold text-sm'>SUMMER 2020</h5>
            <h1 className='text-6xl text-customBlue font-bold pt-7'>NEW COLLECTION</h1>
            <h4 className='text-gray-600 pt-6'>We know how large objects will act,<br/> but things on a small scale.</h4>
            <button className='bg-sky-500 text-white mt-5 w-[140px] h-[45px] rounded-md font-bold hover:bg-customBlue'>SHOP NOW</button>
          </div>
        <div className=' pt-1.5 absolute right-0'>
         <Image src="/images/technology 1.png" alt="Technology visual representation"
         width={520}
         height={520}
         objectFit="contain"
          />
        </div>
        </div>
      </section>
    )
  }