import React from 'react';

const Drawer = () => {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer">

                <h2>
                    Корзина
                    <button className='btn-remove'>
                        <img src="/image/btn-remove.svg" alt="" />
                    </button>
                </h2>

                <div className="cartItems">

                    <div className="cartItem">
                        <img src="/image/card/card-1.png" alt="" />
                        <div className="card__item-bottom--price">
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className='btn-remove'>
                            <img src="/image/btn-remove.svg" alt="" />
                        </button>
                    </div>

                    <div className="cartItem">
                        <img src="/image/card/card-1.png" alt="" />
                        <div className="card__item-bottom--price">
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className='btn-remove'>
                            <img src="/image/btn-remove.svg" alt="" />
                        </button>
                    </div>
                    <div className="cartItem">
                        <img src="/image/card/card-1.png" alt="" />
                        <div className="card__item-bottom--price">
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className='btn-remove'>
                            <img src="/image/btn-remove.svg" alt="" />
                        </button>
                    </div>

                </div>



                <ul className='drawer__bottom'>
                    <li>
                        <span>
                            Итого:
                        </span>
                        <div>

                        </div>
                        <b>
                            21 498 руб.
                        </b>
                    </li>
                    <li>
                        <span>
                            Налог 5%:
                        </span>
                        <div>

                        </div>
                        <b>
                            1074 руб.
                        </b>
                    </li>
                </ul>
                <div className='greenBtn'>
                    <button>
                        <span>Оформить заказ</span>
                        <img src="/image/arrow.svg" alt="arrow" />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Drawer;
