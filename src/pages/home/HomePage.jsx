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
    const [wishList, setWishList] = useState([]);

    const addToCart = (id) => {
        const list = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = list.findIndex(item => item.product_id === id);

        if (itemIndex > -1) {
            list[itemIndex].quantity += 1;
        } else {
            const newItem = { ...products.find(product => product.product_id === id), quantity: 1 };
            list.push(newItem);
        }
        setCartItems(list);
        localStorage.setItem('cart', JSON.stringify(list));
    };



    const addToWishList = (id) => {
        let list = JSON.parse(localStorage.getItem('wishList')) || [];

        const itemIndex = list.findIndex(item => item.product_id === id);

        if (itemIndex > -1) {
            list.splice(itemIndex, 1);
        } else {
            const newItem = products.find(product => product.product_id === id);
            if (newItem) {
                newItem.exist = true;
                list.push(newItem);
            }
        }
        setWishList(list);
        localStorage.setItem('wishList', JSON.stringify(list));
    };

    const checkWishlist = (id) => {
        let list = JSON.parse(localStorage.getItem('wishList')) || [];
        const itemIndex = list.findIndex(item => item.product_id === id);

        if (itemIndex > -1) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <SaleBanner />
            <Navbar />
            <div className="containerP mt-40">
                <FlashSale addToCart={addToCart} addToWishlist={addToWishList} checkWishlist={checkWishlist} />
                <hr />
                <BestSellingProducts addToCart={addToCart} addToWishlist={addToWishList} checkWishlist={checkWishlist} />
                <Categories />
                <Services />
            </div>
            <Footer />
        </>
    )
}

export default HomePage