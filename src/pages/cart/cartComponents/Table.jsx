import React from 'react'
import './table.css'

function Table() {
    return (
        <>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Product</div>
                    <div class="col col-2">Price</div>
                    <div class="col col-3">Quantity</div>
                    <div class="col col-4">Subtotal</div>
                </li>
                <li class="tableRow">
                    <div class="col col-1">abc</div>
                    <div class="col col-2">abc</div>
                    <div class="col col-3">abc</div>
                    <div class="col col-4">abc</div>
                </li>
            </ul>
        </>
    )
}

export default Table