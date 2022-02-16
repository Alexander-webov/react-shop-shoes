import React from 'react';
import Cart from '../components/Cart/Cart';

const Home = ({ carts, searchValue, setSearchValue, onCahngeSearchValue, onAddToCart, onAddToFavoreti }) => {
    return (
        <section className='content'>
            <div className="content__top">
                <h1>
                    {
                        searchValue ? `Поиск: ${searchValue}` : ' Все кроссовки'
                    }

                </h1>
                <div className="content__top-search">
                    <img src="/image/search.svg" alt="поиск" />
                    <input onChange={onCahngeSearchValue} value={searchValue} type="text" placeholder='Поиск...' />
                </div>
            </div>


            <div className='card'>
                {
                    carts.filter(item => item.name.toLowerCase().includes(searchValue))
                        .map(cart => {
                            return (
                                <Cart
                                    key={cart.imgUrl}
                                    name={cart.name}
                                    price={cart.price}
                                    imageUrl={cart.imgUrl}
                                    id={cart.id}
                                    onPlus={() => { onAddToCart(cart) }}
                                    onClickFavorite={(cart) => { onAddToFavoreti(cart) }}
                                />
                            )
                        })
                }
            </div>
        </section>
    );
}

export default Home;
