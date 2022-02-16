import React from 'react';

const Drawer = ({ onClickCloseCart, items = [], onClickDeleteCart }) => {
    return (
        <div className="overlay">
            <div className="drawer">

                <h2>
                    Корзина
                    <button onClick={onClickCloseCart} className='btn-remove'>
                        <img src="/image/btn-remove.svg" alt="" />
                    </button>
                </h2>

                <div className="cartItems">
                    {
                        items.length < 1 ? <h3> <span>Упсс...</span> Корзина пуста!</h3> :
                            items.map(el => {
                                return (
                                    <div className="cartItem" key={el.imgUrl}>
                                        <img src={el.imgUrl} alt="" />
                                        <div className="card__item-bottom--price">
                                            <p>{el.name}</p>
                                            <b>{el.price} руб.</b>
                                        </div>
                                        <button className='btn-remove' onClick={() => { onClickDeleteCart(el.id) }}>
                                            <img src="/image/btn-remove.svg" alt="" />
                                        </button>
                                    </div>
                                )
                            })
                    }




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
