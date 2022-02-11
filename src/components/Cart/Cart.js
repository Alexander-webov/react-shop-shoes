import React, { useState } from 'react';

const Cart = ({ name, price, imageUrl, onClickFavorite, onPlus }) => {
    const [isAdded, setisAdded] = useState(false);

    const onClickPlus = () => {
        onPlus()
        setisAdded(!isAdded)
    }

    return (
        <div className="card__item">
            <div className="card__item-top">
                <img onClick={onClickFavorite} src={imageUrl} alt="" />
                <p>{name}</p>
            </div>
            <div className="card__item-bottom">
                <div className="card__item-bottom--price">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img onClick={onClickPlus} src={isAdded ? "/image/btn-cheked.svg" : "/image/plus.svg"} alt="" />


            </div>
        </div>
    );
}

export default Cart;
