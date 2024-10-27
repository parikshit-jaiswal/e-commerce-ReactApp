import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import ThemeBtn from '../extraComponent/Themebtn'

function Navbar() {
    return (
        <nav className='h-16 w-full bg-white dark:bg-[#121212] dark:text-white z-10 flex justify-between items-end containerP pb-3 pt-16 text-[1.2rem] fixed top-6'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)} className="home hover:underline cursor-pointer hover:opacity-90"><i className="fa-solid fa-house dark:text-[#db4444]"></i> Home</Link>

            <div className="flex gap-5">
                <Link to='/wishlist' onClick={() => window.scrollTo(0, 0)} className="wishList hover:underline cursor-pointer hover:opacity-90"><i className="fa-solid fa-heart dark:text-[#db4444]"></i> Wishlist</Link>
                <Link to='/cart' onClick={() => window.scrollTo(0, 0)} className="cart hover:underline cursor-pointer hover:opacity-90"><i className="fa-solid fa-cart-shopping dark:text-[#db4444]"></i> Cart</Link>
                <div className=""><ThemeBtn /></div>
            </div>
        </nav>
    )
}

export default Navbar