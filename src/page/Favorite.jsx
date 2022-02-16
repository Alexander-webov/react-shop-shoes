import React from 'react';
import Cart from '../components/Cart/Cart';

const Favorite = ({ favorites, onAddToCart, onAddToFavoreti }) => {
    return (
        <section className='content'>
            <div className="content__top">
                <h1>Мои закладки</h1>
            </div>


            <div className='card'>
                {
                    favorites.map(cart => {
                        return (
                            <Cart
                                key={cart.imgUrl}
                                name={cart.name}
                                price={cart.price}
                                imageUrl={cart.imageUrl}
                                onPlus={() => { onAddToCart(cart) }}
                                onClickFavorite={(cart) => { onAddToFavoreti(cart) }}
                                favorited={true}
                                id={cart.id}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Favorite;
