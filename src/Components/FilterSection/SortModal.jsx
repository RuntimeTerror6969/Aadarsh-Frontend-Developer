import React from 'react';

const SortModal = ({ onClose, selectedSortOption, onApplySort, onRadioChange }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 text-gray-700'>
            <div className='bg-white absolute left-48 top-36 rounded-3xl shadow-lg w-44 h-64'>
                <div className='flex flex-col h-48 px-1 py-6 text-gray-600'>
                   
                        <label className=' flex justify-between gap-4 py-3 px-4'>
                            <p className=' flex flex-col'> Relevance <span className='text-xs'>(Default) </span> </p> 
                            <input
                                className='w-4 '
                                type='radio'
                                name='sortOption'
                                value='Relevance (Default)'
                                defaultChecked={selectedSortOption === 'Relevance (Default)'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                        </label>


                        <label className=' flex justify-between gap-4 py-3 px-4'>
                            A-Z Sort
                            <input
                                className='w-4'
                                type='radio'
                                name='sortOption'
                                value='A-Z Sort'
                                defaultChecked={selectedSortOption === 'A-Z Sort'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                        </label>
                        <label className='  flex justify-between gap-4 py-3 px-4 '>
                            Z-A Sort
                            <input
                                className='w-4'
                                type='radio'
                                name='sortOption'
                                value='Z-A Sort'
                                defaultChecked={selectedSortOption === 'Z-A Sort'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                        </label>
                    
                    
                </div>
                <div className='w-full flex gap-4 rounded-3xl'>
                    <div className='w-full border-t p-3 px-8'>
                        <button
                            className='rounded-xl w-full text-left text-orange-600 text-base font-semibold hover:scale-95 duration-100'
                            onClick={onApplySort}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortModal;
