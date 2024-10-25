import React from 'react'
import Card from './Card'

function BestSellingProducts() {
    return (
        <div className=' my-16'>
            <div className="saleTime flex items-center">
                <div className='w-5 h-10 bg-[#DB4444] rounded mr-2'></div>
                <div className='font-bold text-[#DB4444] text-xl'>This Month</div>
            </div>
            <div className='text-4xl font-semibold my-4'>Best Selling Products</div>
            <div className="cards flex gap-5 flex-wrap justify-between mt-10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default BestSellingProducts