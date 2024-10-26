import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='h-16 w-full bg-white z-10 flex justify-between items-end containerP pb-3 text-[1.2rem] fixed top-10'>
            <Link to='/home' className="home hover:underline cursor-pointer hover:opacity-90"><i className="fa-solid fa-house"></i> Home</Link>
            <div className="flex gap-5">
                <Link to='/wishlist' className="wishList hover:underline cursor-pointer hover:opacity-90"><i className="fa-solid fa-heart"></i> Wishlist</Link>
                <Link to='/cart' className="cart hover:underline cursor-pointer hover:opacity-90"><i className="fa-solid fa-cart-shopping"></i> Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar