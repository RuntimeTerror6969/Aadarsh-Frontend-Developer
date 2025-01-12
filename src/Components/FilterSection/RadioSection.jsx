import React from 'react'

const RadioSection = ({item, index, defaultChecked, onRadioChange}) => {
  return (
    <>
    <div className='p-2' >
       <label key={index} className='p-2'>
                <input className='w-10 '
                  type='radio'
                  id={item.strArea}
                  name='category'
                  value={item.strArea}
                  defaultChecked={item.strArea === defaultChecked}
                //   checked={}
                  onChange={()=>onRadioChange(item.strArea)}
                />
                {item.strArea}
              </label>
    </div>
    
    </>
  )
}

export default RadioSection;

