import React from 'react'
import './saleBanner.css'

function SaleBanner() {
    return (
        <>
            <div className="banner bg-black text-white flex justify-center p-2">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;
                <a href="#" className='font-bold underline hover:text-[#DB4444]'>
                    ShopNow
                </a>
            </div>
        </>
    )
}

export default SaleBanner