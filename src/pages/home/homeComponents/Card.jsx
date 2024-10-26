import React from 'react'

function Card({ name, originalPrice, discountPercent, priceAfterDiscount, imageUrl }) {
    return (
        <div className='cardBox min-w-[20rem] h-[22rem] rounded-lg cursor-pointer' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
            <div className="card ">

                <img style={{ objectFit: "cover" }} className='rounded-t-lg h-56 w-[20rem]' src={imageUrl} />

                <div className="bg-black text-center items-center p-2  rounded-b-lg">
                    <span className='text-white'><i className="fa-solid fa-cart-shopping"></i>Add to Cart</span>
                </div>
                <div className="relative bottom-[15.7rem] left-3 flex justify-between items-center">
                    <div className="discount bg-[#DB4444] text-white text-center items-center w-fit px-3 py-1 rounded-md">-{discountPercent}% </div>
                    <span className="likeBtn mr-6  bg-white h-8 w-8 flex justify-center items-center rounded-full"><i className="fa-regular fa-heart mt-[0.1rem] text-xl"></i></span>
                </div>
            </div>
            <div className="detail px-2 mt-[-2rem]">
                <div className="mt-2 mb-1 font-medium">
                    {name}
                </div>
                <div className="price flex gap-4">
                    <div className="text-red-600">₹{priceAfterDiscount}</div>
                    <div className="opacity-50 line-through">₹{originalPrice}</div>
                </div>
            </div>

        </div >
    )
}

export default Card