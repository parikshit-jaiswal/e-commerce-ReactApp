import React, { useState } from 'react'
import './table.css'
import TableRow from './TableRow'

function Table() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const changeQty = (id, newQty) => {
        const updatedCart = cart.map((item) => {
            if (item.product_id === id) {
                return { ...item, quantity: newQty };
            }
            return item;
        });

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
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
                    />
                ))}
            </ul>
        </>
    )
}

export default Table