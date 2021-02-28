import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

const Cart = (props) => {
    const totalBill = props.cart.reduce((total , prd) => total+prd.price , 0);
    return (
        <div>
            <p>Items Ordered : {props.items}</p>
            <br/>
            <p>Ordered Item List :</p>
            <p>Price : {totalBill}</p>
            <ul>
                {
                    props.cart.map(prd => {
                        <li>{prd.name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Cart;