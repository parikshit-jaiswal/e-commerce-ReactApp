import React from 'react'
import Card from './Card'

function FlashSale() {
    return (
        <div className=' my-16'>
            <div className="saleTime flex items-center">
                <div className='w-5 h-10 bg-[#DB4444] rounded mr-2'></div>
                <div className='font-bold text-[#DB4444]'>Today's</div>
            </div>
            <div className='text-4xl font-semibold my-4'>
                Flash Sales
            </div>
            <div className="cards flex gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default FlashSale