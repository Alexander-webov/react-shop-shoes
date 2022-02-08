import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src='/image/logo.svg' alt="" />
                <div className="logo__text">
                    <h3>REACT SNEAKERS</h3>
                    <span>Магазин лучших кроссовок</span>
                </div>
            </div>

            <ul className='headerRight'>
                <li>
                    <img src='./image/cart.svg' alt="cart icon" />
                    <span>
                        1205 руб.
                    </span>
                </li>
                <li>
                    <img src='./image/heart.svg' alt="user icon" />
                </li>
                <li>
                    <img src='./image/user.svg' alt="user icon" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
