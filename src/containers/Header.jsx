import React from 'react';
import search from '../assets/icons/search.svg';
import shoppingCart from '../assets/icons/shopping-cart.svg';
import menu from '../assets/icons/menu.svg';
import logo from '../assets/icons/logo.svg';

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__navbar">
                <ul className="header__desktop-nav">
                    <li className="header__nav-item">
                        <img src={logo} alt="logo" className="logo" />
                    </li>
                    <li className="header__nav-item">
                        <a href="/productos">Productos</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/blog">Blog</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/tienda">Tienda</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/contacto">Contacto</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="cart">
                            <img src={shoppingCart} alt="" className="shop" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header__input-container">
                <input className="header__input" type="text" placeholder=" Buscar producto" id="product" />
                <img src={search} alt="search" />
            </div>
            <div className="header__navbar-mobile">
                <ul className="header__navbar-mobile__icon-list">
                    <li className="header__navbar-mobile-item">
                        <a href="/shopping-cart" className="header__navbar-mobile-item--cart">
                            <img src={shoppingCart} alt="shopping cart" />
                        </a>
                    </li>
                    <li>
                        <a href="menu" className="header__nav-mobile-item">
                            <button className="header__hamburger-menu">
                                <img src={menu} alt="menu" />
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

