import React from 'react'

function Card() {
    return (
        <div className='cardBox w-[20rem] h-[22rem] rounded-lg cursor-pointer' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
            <div className="card">
                <div className="img">
                    <img className='object-cover rounded-t-lg h-56' src="https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="bg-black text-center items-center p-2  rounded-b-lg">
                    <span className='text-white'><i className="fa-solid fa-cart-shopping"></i>Add to Cart</span>
                </div>
                <div className="relative bottom-[15.7rem] left-3 flex items-center">
                    <div className="discount bg-[#DB4444] text-white text-center items-center w-fit px-3 py-1 rounded-md">-35% </div>
                    <span className="likeBtn ml-[12.7rem] bg-white h-8 w-8 flex justify-center items-center rounded-full"><i class="fa-regular fa-heart mt-[0.1rem] text-xl"></i></span>
                </div>
            </div>
            <div className="detail px-2 mt-[-2rem]">
                <div className="mt-2 mb-1 font-medium">
                    Something Nice
                </div>
                <div className="price flex gap-4">
                    <div className="text-red-600">$960</div>
                    <div className="opacity-50 line-through">$1160</div>
                </div>
            </div>

        </div >
    )
}

export default Card