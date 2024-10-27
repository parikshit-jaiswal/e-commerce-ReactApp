
function Card({ p_id, name, originalPrice, discountPercent, priceAfterDiscount, imageUrl, del = false, addToCart, addToWishlist, checkWishlist, removeFromWishlist }) {
    return (
        <div className='cardBox min-w-[20rem] h-[22rem] rounded-lg cursor-pointer dark:bg-[#282828]' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
            <div className="card ">
                <img style={{ objectFit: "cover" }} className='rounded-t-lg h-56 w-[20rem]' src={imageUrl} />

                <div className="bg-black  dark:bg-[#db4444] font-bold text-center items-center p-2  rounded-b-lg">
                    <span role='button' onClick={() => addToCart(p_id)} className='text-white hover:text-black'><i className="fa-solid fa-cart-shopping"></i> Add to Cart</span>
                </div>
                <div className="relative bottom-[15.7rem] left-3 flex justify-between items-center">
                    <div className="discount bg-[#DB4444] text-white text-center items-center w-fit px-3 py-1 rounded-md">-{discountPercent}% </div>
                    <span className="likeBtn mr-6  bg-white dark:text-black h-8 w-8 flex justify-center items-center rounded-full">
                        {del ? (<svg role="button" onClick={() => removeFromWishlist(p_id)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>)
                            : checkWishlist(p_id) ? (<i onClick={() => addToWishlist(p_id)} className="fa-solid fa-heart mt-[0.1rem] text-xl" style={{ color: "#e65f3d" }}></i>)
                                : (<i role="button" onClick={() => addToWishlist(p_id)} className="fa-regular fa-heart mt-[0.1rem] text-xl"></i>)}
                    </span>
                </div>
            </div>
            <div className="detail px-2 mt-[-2rem]">
                <div className="mt-2 mb-1 font-medium dark:text-white">
                    {name}
                </div>
                <div className="price flex gap-4 dark:text-white">
                    <div className="text-red-600">₹{priceAfterDiscount}</div>
                    <div className="opacity-50 line-through">₹{originalPrice}</div>
                </div>
            </div>

        </div >
    )
}

export default Card