import React from 'react'
import './table.css'
import TableRow from './TableRow'

function Table() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
    return (
        <>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Product</div>
                    <div class="col col-2">Price</div>
                    <div class="col col-3">Quantity</div>
                    <div class="col col-4">Subtotal</div>
                </li>
                {cart.map((item) => (
                    <TableRow
                        key={item.product_id} // Ensure unique key for each row
                        productName={item.product_name}
                        price={item.price_after_discount}
                        quantity={item.quantity}
                        subTotal={item.price_after_discount * item.quantity} // Calculate subtotal
                        image_url={item.image_url} // Pass the image URL if needed
                    />
                ))}
            </ul>
        </>
    )
}

export default Table