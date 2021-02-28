import React from 'react';
import'./Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);

    // destructuring
    const {name , img , price , seller} = props.name;

    return (
        <div className='productDiv'>
            <div className="imageDiv">
                <img src={img} alt=""/>
            </div>
            <div className="infoDiv">
                <strong>{name}</strong>
                <br/><br/><br/>
                <div className="sellerDiv">
                    <strong>{seller}</strong>
                </div>
                <br/>
                <div className="priceDiv">
                    <small>Only </small><strong>{price+' $'}</strong>
                </div>
                <br/>
                <div className="buttonDiv">
                    <button onClick={() => {
                            props.addToCartFunctions(props.name);
                        }
                    }><FontAwesomeIcon icon={faShoppingBag} />  Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;