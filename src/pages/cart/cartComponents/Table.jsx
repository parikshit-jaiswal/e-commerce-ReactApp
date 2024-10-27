import React, { useEffect, useState } from 'react'
import './table.css'
import TableRow from './TableRow'

function Table({ cart, changeQty, removeFromCart }) {

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
                        key={item.product_id}
                        p_id={item.product_id}
                        productName={item.product_name}
                        price={item.price_after_discount}
                        quantity={item.quantity}
                        subTotal={item.price_after_discount * item.quantity}
                        image_url={item.image_url}
                        changeQty={changeQty}
                        removeFromCart={removeFromCart}
                    />
                ))}
            </ul>
        </>
    )
}

export default Table