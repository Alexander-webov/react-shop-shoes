import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ onClickCart }) => {
    return (
        <header className="header">
            <NavLink to="/" end >
                <div className="logo">
                    <img src='/image/logo.svg' alt="" />
                    <div className="logo__text">
                        <h3>REACT SNEAKERS</h3>
                        <span>Магазин лучших кроссовок</span>
                    </div>
                </div>
            </NavLink>
            <ul className='headerRight'>
                <li onClick={onClickCart}>
                    <img src='./image/cart.svg' alt="cart icon" />
                    <span>
                        1205 руб.
                    </span>
                </li>
                <li>
                    <NavLink to="/favorite" end >
                        <img src='./image/heart.svg' alt="user icon" />
                    </NavLink>

                </li>
                <li>
                    <img src='./image/user.svg' alt="user icon" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
