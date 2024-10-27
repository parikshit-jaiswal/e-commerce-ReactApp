import React from 'react'

function TableRow({ p_id, removeFromCart, changeQty, productName = "Something", image_url = "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074295.jpg?t=st=1729927623~exp=1729931223~hmac=abebbd4e4b0ede6f10ae9cd75b5f8081996a36dd638e7454de8625daf4be3b69&w=900", price = "999", quantity = 1, subTotal = 999 }) {

    return (
        <li class="tableRow">
            <div class="col col-1"><img className='p_img h-20 rounded-lg mb-2' src={image_url} alt="" /><span className='text-lg font-bold'>{productName}</span></div>
            <div class="col col-2">₹{price}</div>
            <div class="col col-3"><input className='w-10 p-1' min={1} type="number" defaultValue={quantity} onChange={(e) => changeQty(p_id, e.target.value)} /></div>
            <div class="col col-4">₹{subTotal} <span role='button' onClick={() => removeFromCart(p_id)}><i class="fa-solid fa-trash text-2xl ml-[4vw] cursor-pointer hover:text-[#db4444]"></i></span></div>
        </li>
    )
}

export default TableRow