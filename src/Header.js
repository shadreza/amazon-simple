import React, { Component } from 'react';
import logo from '../src/images/logo.png';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className='headerDiv'>
                <img src={logo} alt=""/>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                </nav>
            </div>
        )
    }
}

export default Header
