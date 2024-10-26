import React from 'react'

function TableRow({ productName = "Something", image_url = "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074295.jpg?t=st=1729927623~exp=1729931223~hmac=abebbd4e4b0ede6f10ae9cd75b5f8081996a36dd638e7454de8625daf4be3b69&w=900", price = "999", quantity = 1, subTotal = 999 }) {
    return (
        <li class="tableRow">
            <div class="col col-1"><img src={image_url} alt="" /></div><span>{productName}</span>
            <div class="col col-2">₹{price}</div>
            <div class="col col-3">{quantity}</div>
            <div class="col col-4">₹{subTotal}</div>
        </li>
    )
}

export default TableRow