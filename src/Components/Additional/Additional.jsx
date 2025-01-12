import React from 'react'
import img1 from '../../assets/gpay.png'
import img2 from '../../assets/apple.png'

const Additional = () => {
    return (

        <>
            <div className=' my-10 md:px-20 flex flex-col gap-16 items-center justify-center '>
                <div className='w-2/3 h-[1px] bg-gray-300'></div>

                <div className='flex flex-col gap-4 md:gap-10 '>
                    <div>
                        <h1 className='text-xl md:text-3xl font-bold text-gray-800'>Best Cuisines Near Me</h1>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-6 '>
                        <div className='border-2 hidden md:block text-sm p-4 text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>Chinese Restaurant Near..</div>
                        <div className='border-2 hidden md:block  text-sm p-4 text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>
                            South Indian Restauran..

                        </div>
                        <div className='border-2 hidden md:block text-xs md:text-sm p-4 text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>
                            American Restaurants ...

                        </div>
                        <div className='border-2 hidden md:block text-xs md:text-sm p-4 text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>

                            Asian Restaurants near..
                        </div>
                        <div className='border-2 text-xs p-2  md:text-sm md:p-4 text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>
                            Bakery near me

                        </div>
                        <div className='border-2 text-xs hidden md:block md:text-sm p-4 text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>
                            Biryani Restaurants near..

                        </div>
                        <div className='border-2 text-sm p-4 hidden md:block text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>
                            Beverages Restaurants..

                        </div>
                        <div className='border-2 text-sm p-4 hidden md:block text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>

                            Burger Restaurants near..
                        </div>

                        <div className='border-2 text-sm p-4 hidden md:block text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>
                            Cafe Restaurants ne..

                        </div>
                        <div className='border-2 text-sm p-4 hidden md:block text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>

                            Chaat Restaurants ne..
                        </div>
                        <div className='border-2 text-sm p-2 md:p-4  text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>
                            Restaurants near ..

                        </div>
                        <div className='border-2 text-sm p-2 md:p-4  text-gray-600 font-medium cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:font-semibold'>

                            Show More...
                        </div>

                        {/* 

 */}

                    </div>

                </div>


            </div>
            <div className=' p-2 md:px-28 md:py-8  flex  flex-col bg-gray-100 gap-16 items-center justify-center'>
                <div className=' flex  w-full  justify-center gap-10'>
                    <div className=' w-1/2'>
                        <h1 className= 'text-xs font-semibold md:text-2xl md:font-extrabold text-gray-700'>For better experience,download the Swiggy app now</h1>
                    </div>
                    <div className=' w-20 h-8 md:w-1/2 justify-end md:h-14 flex gap-2'>
                        <img className='' src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Additional
