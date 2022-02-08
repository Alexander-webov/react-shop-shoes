import React from 'react';

const Cart = () => {
    return (
        <div className="card__item">
            <div className="card__item-top">
                <img src="/image/card/card-4.png" alt="" />
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            </div>
            <div className="card__item-bottom">
                <div className="card__item-bottom--price">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>

                <button>
                    <img src="/image/plus.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

export default Cart;
