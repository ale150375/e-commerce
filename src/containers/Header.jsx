import React from 'react';
import search from '../assets/icons/search.svg';
import shoppingCart from '../assets/icons/shopping-cart.svg';
import menu from '../assets/icons/menu.svg';
import logo from '../assets/icons/logo.svg';

export const Header = () => {
    return (
      <div className="nav-container">
        <img src={logo} alt="logo" className="logo" />
      <nav className="navbar">
          <ul>
              <li>
                  <a href="/productos">Productos</a>
              </li>
              <li>
                  <a href="/blog">Blog</a>
              </li>
              <li>
                  <a href="/tienda">Tienda</a>
              </li>
              <li>
                  <a href="/contacto">Contacto</a>
              </li>
              <li>
                  <a href="cart"><img src={shoppingCart} alt="" className="shop"/></a>
              </li>
              <li className="navbar-input">
                  <input type="text" placeholder=" Buscar producto" id="product" />
                      <img src={search} alt="search"/>
              </li>
          </ul>
      </nav>
      <div className="navbar-mobile">
          <ul>
              <li className="nav-mobile">
                  <a href="/shopping-cart" className="nav-mobile--cart">
                      <img  src={shoppingCart} alt="shopping cart" />
                  </a>
              </li>
                <li>
                  <a href="menu" className="nav-mobile--menu">
                      <img  src={menu} alt="menu" />
                  </a>
                </li>
          </ul>
      </div>
  </div>
    );
}

