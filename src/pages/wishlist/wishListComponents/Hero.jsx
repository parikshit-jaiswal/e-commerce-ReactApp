import React, { useEffect, useState } from 'react'
import Card from '../../home/homeComponents/Card';
import Btn from '../../../extraComponent/Btn';
import products from '../../../../public/data';

function Hero() {
    const [wishList, setWishList] = useState(() => JSON.parse(localStorage.getItem('wishList')) || []);
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

    const removeFromWishlist = (id) => {
        setWishList((prevList) => {
            const updatedList = prevList.filter(item => item.product_id !== id);
            return updatedList;
        });
    };

    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList));
    }, [wishList]);

    const addAllToCart = () => {
        let currentCart = JSON.parse(localStorage.getItem('cart')) || cart;

        wishList.forEach((item) => {
            const itemInCart = currentCart.find(cartItem => cartItem.product_id === item.product_id);

            if (!itemInCart) {
                const newItem = products.find(product => product.product_id === item.product_id);

                if (newItem) {
                    currentCart.push({ ...newItem, quantity: 1 });
                }
            } else {
                itemInCart.quantity += 1;
            }
        });
        setCart(currentCart);
        localStorage.setItem('cart', JSON.stringify(currentCart));
        setWishList([]);
        localStorage.removeItem('wishList');
    };

    // // Sync `cart` state with localStorage whenever `cart` changes
    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart));
    // }, [cart]);


    return (
        <div className='containerP ml-8 mt-44 mb-20'>
            <div className="text-xl flex justify-between">
                Wishlist ({wishList.length})
                <div role='button' onClick={addAllToCart} className="mr-5">
                    <Btn btnName='Move all to cart' />
                </div>
            </div>
            <div className="cards flex gap-3 flex-wrap mt-10">
                {wishList.map((item) => (
                    <Card
                        key={item.product_id}
                        p_id={item.product_id}
                        name={item.product_name}
                        originalPrice={item.original_price}
                        discountPercent={item.discount_percent}
                        priceAfterDiscount={item.price_after_discount}
                        imageUrl={item.image_url}
                        del={true}
                        removeFromWishlist={removeFromWishlist}
                    />
                ))}
            </div>

        </div>


    )
}

export default Hero