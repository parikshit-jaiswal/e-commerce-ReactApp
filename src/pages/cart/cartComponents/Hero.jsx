import React, { useEffect, useState } from 'react'
import Table from './Table'
import Btn from '../../../extraComponent/Btn'

function Hero() {

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

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((e) => id !== e.product_id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }


    let [total, setTotal] = useState(0);
    const netTotal = cart.reduce((acc, e) => acc + e.price_after_discount * e.quantity, 0);
    useEffect(() => {
        setTotal(netTotal);
    }, [cart])

    return (
        <div className='containerP ml-10 mt-44'>
            <div className=" text-lg mb-[-5rem]">
                <span className='opacity-60'>Home  &nbsp;&nbsp;/</span>&nbsp;&nbsp;  Cart
            </div>
            <Table removeFromCart={removeFromCart} changeQty={changeQty} />
            <div className="flex justify-end mr-[5rem]">
                <div className="border-black border-2 w-[30rem] rounded-xl p-5">
                    <div className="text-3xl font-semibold mb-4">Cart Total</div>
                    <div className="flex justify-between p-2 text-lg"><div className="">Subtotal:</div><div className="">₹{total}</div></div>
                    <hr />
                    <div className="flex justify-between p-2 text-lg"><div className="">Shiping:</div><div className="">Free</div></div>
                    <hr />
                    <div className="flex justify-between p-2 text-lg"><div className="">Total:</div><div className="">₹{total}</div></div>
                    <div role='button' className="text-center"><Btn btnName='Process to checkout' /></div>
                </div>

            </div>
        </div>
    )
}

export default Hero