import React, { Component } from 'react';
import logo from '../src/images/logo.png'

export class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt=""/>
            </div>
        )
    }
}

export default Header
