import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FlashSale from './FlashSale'
import BestSellingProducts from './BestSellingProducts'
import Services from './Services'
import Categories from './Categories'

function HomePage() {
    return (
        <>
            <Navbar />
            <FlashSale />
            <BestSellingProducts />
            <Categories />
            <Services />
            <Footer />
        </>
    )
}

export default HomePage