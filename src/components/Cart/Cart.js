import React, { useState } from 'react';


const Cart = ({ id, name, price, imageUrl, onClickFavorite, onPlus, favorited = false }) => {
    const [isAdded, setisAdded] = useState(false);
    const [isFavorite, setisFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ name, price, imageUrl })
        setisAdded(!isAdded)
    }
    const onFavorite = () => {
        onClickFavorite({ name, price, imageUrl, id })
        setisFavorite(!isFavorite)
    }


    return (
        <div className="card__item">

            <img className="card__item-like" onClick={onFavorite} src={isFavorite ? "/image/heart-liked.svg" : "/image/heart-onLiked.svg"}
                alt="" />
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
