import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CartSkeleton = ({carts}) => {
  return (
    Array(carts).fill(0).map((items,i) =>
        <div key={i} className='flex flex-col gap-3 '>
        <div className=' '>
            <Skeleton width={190} height={125}  />
        </div>
        <div>
        <div className=''>
            <Skeleton width={80}/>
        </div>

        <div className=''>
            <Skeleton width={100}/>
        </div>
        </div>
       

      
    </div>)
   
  )
}

export default CartSkeleton
