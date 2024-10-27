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

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const netTotal = cart.reduce((acc, item) => acc + item.price_after_discount * item.quantity, 0);
        setTotal(netTotal);
    }, [cart]);

    if (cart.length > 0) {
        return (
            <div className='containerP ml-10 mt-44 mb-44'>
                <div className=" text-lg mb-16">
                    <span className='opacity-60'>Home  &nbsp;&nbsp;/</span>&nbsp;&nbsp;  Cart
                </div>
                <Table changeQty={changeQty} removeFromCart={removeFromCart} cart={cart} />
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
    } else {
        return (
            <div className="">
                <div className="mt-[10rem] mb-10 flex justify-center">
                    {/* <div className="text-black text-4xl font-extrabold relative left-[23%] top-[35vh] w-fit text-nowrap">Your <span className='text-[#db4444]'>Cart</span> Is Empty</div> */}
                    <img className='h-[35vw] w-[40vw]' src="emptyCart.svg" alt="" />
                </div>
            </div >
        )
    }

}

export default Hero