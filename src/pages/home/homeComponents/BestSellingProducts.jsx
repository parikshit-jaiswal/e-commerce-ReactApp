import React from 'react'
import Card from './Card'
import products from '../../../../public/data'

function BestSellingProducts() {
    return (
        <div className=' my-16'>
            <div className="saleTime flex items-center">
                <div className='w-5 h-10 bg-[#DB4444] rounded mr-2'></div>
                <div className='font-bold text-[#DB4444] text-xl'>This Month</div>
            </div>
            <div className='text-4xl font-semibold my-4'>Best Selling Products</div>
            <div className="cards flex gap-5 flex-wrap justify-between mt-10">
                {products.map((product) => (
                    <Card
                        key={product.product_id}
                        name={product.product_name}
                        originalPrice={product.original_price}
                        discountPercent={product.discount_percent}
                        priceAfterDiscount={product.price_after_discount}
                        imageUrl={product.image_url}
                    />
                ))}
            </div>

        </div>
    )
}

export default BestSellingProducts