import React, { useState } from 'react'
import Table from './Table'
import Btn from '../../../extraComponent/Btn'

function Hero() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let [total, setTotal] = useState(0);
    cart.forEach(e => {
        total += e.price_after_discount * e.quantity
    });

    return (
        <div className='containerP ml-10 mt-16'>
            <div className=" text-lg mb-20">
                <span className='opacity-60'>Home  &nbsp;&nbsp;/</span>&nbsp;&nbsp;  Cart
            </div>
            <Table />
            <div className="flex justify-end mr-[5rem]">
                <div className="border-black border-2 w-[30rem] rounded-xl p-5">
                    <div className="text-3xl font-semibold mb-4">Cart Total</div>
                    <div className="flex justify-between p-2 text-lg"><div className="">Subtotal:</div><div className="">₹{total}</div></div>
                    <hr />
                    <div className="flex justify-between p-2 text-lg"><div className="">Shiping:</div><div className="">Free</div></div>
                    <hr />
                    <div className="flex justify-between p-2 text-lg"><div className="">Total:</div><div className="">₹{total}</div></div>
                    <div className="text-center"><Btn btnName='Process to checkout' /></div>
                </div>

            </div>
        </div>
    )
}

export default Hero