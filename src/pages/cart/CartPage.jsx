import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SaleBanner from '../SaleBanner'
import Hero from './cartComponents/Hero'

function CartPage() {
    return (
        <>
            <SaleBanner />
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}

export default CartPage