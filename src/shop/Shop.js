import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../fakeData';
import Product from '../product/Product.js';
import Cart from '../cart/Cart';

const Shop = () => {
    function addToCartFunction (prod) {
        setCartPrd(cartPrd+1);
        // setPrd(prod);
        const newCart = [...cart , prod];
        setCart(newCart);
        // console.log('prd added' , prod);
    }
    const [prd , setPrd] = useState(fakeData);
    const [cartPrd , setCartPrd] = useState(0);
    const [cart , setCart] = useState([]);
    return (
        <div className='shopContainer'>
            <div className="productContainer">
                {
                    prd.map( currentProduct => <Product addToCartFunctions={addToCartFunction} name={currentProduct}></Product>)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart} items={cartPrd}></Cart>
            </div>
        </div>
    );
};

export default Shop;