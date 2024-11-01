import Card from './Card'
import Btn from '../../../extraComponent/Btn';
import products from '../../../../public/data';



function FlashSale({ addToCart, addToWishlist, checkWishlist }) {
    return (
        <>
            <div className=' my-16'>
                <div className="saleTime flex items-center">
                    <div className='w-5 h-10 bg-[#DB4444] rounded mr-2'></div>
                    <div className='font-bold text-[#DB4444] text-xl'>Today's</div>
                </div>
                <div className='text-4xl font-semibold my-4 dark:text-white'>
                    Flash Sales
                </div>
                <div className="cards flex gap-6 mt-9 overflow-y-scroll scrollNone">
                    {products.map((product) => (
                        <Card
                            key={product.product_id}
                            p_id={product.product_id}
                            name={product.product_name}
                            originalPrice={product.original_price}
                            discountPercent={product.discount_percent}
                            priceAfterDiscount={product.price_after_discount}
                            imageUrl={product.image_url}
                            addToCart={addToCart}
                            addToWishlist={addToWishlist}
                            checkWishlist={checkWishlist}
                        />
                    ))}
                </div>
                <div className="toggleBtn flex gap-1 justify-center mt-10">
                    <div className="left bg-[#c5c5c53b] h-12 w-12 rounded-full text-center cursor-pointer"><i className="fa-solid fa-arrow-left text-2xl mt-2 opacity-60 hover:opacity-100"></i></div>
                    <div className="left bg-[#c5c5c53b] h-12 w-12 rounded-full text-center cursor-pointer"><i className="fa-solid fa-arrow-right text-2xl mt-2 opacity-60 hover:opacity-100"></i></div>
                </div>
                <div className="text-center mt-12">
                    <Btn btnName='View All Products' />
                </div>
            </div>
        </>
    )
}

export default FlashSale