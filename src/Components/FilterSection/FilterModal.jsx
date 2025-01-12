// FilterModal.jsx

import React from 'react';
import { IoClose } from 'react-icons/io5';
import RadioSection from './RadioSection';


const FilterModal = ({ onClose, items, selectedFilter, onApplyFilters, onResetFilters, onRadioChange }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-gray-700'>
            <div className='bg-white  rounded-3xl shadow-lg w-1/2 h-3/5'>
                <div className='flex justify-between items-center p-4 border-b '>
                    <h1 className='text-2xl font-bold'>Filter</h1>
                    <div className='border rounded-full p-1 shadow-lg'>
                        <IoClose className='text-xl cursor-pointer' onClick={onClose} />
                    </div>

                </div>
                <div className='flex justify-between h-60'>

                  
                   <div className=' hidden  md:flex md:flex-col   border-r p-2   items-start w-2/5 font-semibold text-xl scrollbar-hide overflow-hidden'>
                        <div className='flex'>
                            <div className='h-10 w-1 rounded bg-orange-600 '></div>
                            <h1 className='p-3 cursor-pointer'>Sort</h1>
                        </div>
                        <h1 className='p-3 cursor-pointer'>Delivery Time</h1>
                        <h1 className='p-3 cursor-pointer'>Cuisines</h1>
                        <h1 className='p-3 cursor-pointer'>Ratings</h1>
                        
                    </div>
                  

                    <div className='flex flex-col w-full items-start'>
                        <div className='px-8 p-2 text-sm pt-4'>
                            SORT BY
                        </div>

                        <div className='flex flex-col  w-full items-start overflow-auto'>
                            {items.map((item, index) => (
                                <RadioSection item={item} key={index} defaultChecked={selectedFilter}
                                onRadioChange={onRadioChange} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className=' w-full flex gap-4 justify-end items-center shadow-2xl rounded-3xl'>
                    <div className='md:w-60 hidden md:block'>
                        <button className='text-lg hidden md:block text-orange-600 font-semibold' onClick={onResetFilters}>Clear Filters</button>
                    </div>
                    <div className='md:pr-8 '>
                        <button className='border rounded-xl p-2 w-36  md:w-48 bg-orange-600 text-base md:text-lg text-white font-bold hover:scale-95 duration-100' onClick={onApplyFilters}>
                            Apply
                        </button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default FilterModal;
