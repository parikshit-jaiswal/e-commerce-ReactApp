import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FlashSale from './homeComponents/FlashSale'
import BestSellingProducts from './homeComponents/BestSellingProducts'
import Services from './homeComponents/Services'
import Categories from './homeComponents/Categories'
import SaleBanner from '../SaleBanner'
import './homeComponents/home.css'
import products from '../../../public/data'

function HomePage() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (id) => {
        setCartItems((prevCartItems) => {
            const itemIndex = prevCartItems.findIndex(item => item.product_id === id);
            if (itemIndex > -1) {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[itemIndex].quantity += 1;
                return updatedCartItems;
            } else {
                const newItem = { ...products.find(product => product.product_id === id), quantity: 1 };
                return [...prevCartItems, newItem];
            }
        });
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <>

            <SaleBanner />
            <Navbar />
            <div className="containerP">
                <FlashSale addToCart={addToCart} />
                <hr />
                <BestSellingProducts addToCart={addToCart} />
                <Categories />
                <Services />
            </div>
            <Footer />
        </>
    )
}

export default HomePage