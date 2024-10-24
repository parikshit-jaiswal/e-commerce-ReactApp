import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FlashSale from './homeComponents/FlashSale'
import BestSellingProducts from './homeComponents/BestSellingProducts'
import Services from './homeComponents/Services'
import Categories from './homeComponents/Categories'
import SaleBanner from '../SaleBanner'
import './homeComponents/home.css'

function HomePage() {
    return (
        <>

            <SaleBanner />
            <Navbar />
            <div className="containerP">
                <FlashSale />
                <BestSellingProducts />
                <Categories />
                <Services />
            </div>
            <Footer />
        </>
    )
}

export default HomePage