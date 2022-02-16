import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import Home from './page/Home';
import Favorite from './page/Favorite';



function App() {
  const [cartOppend, setcartOppend] = useState(false);
  const [carts, setcarts] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [favorites, setfavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://6151b6e64a5f22001701d3a2.mockapi.io/items')
      .then(res => setcarts(res.data))
    axios.get('https://6151b6e64a5f22001701d3a2.mockapi.io/cart')
      .then(res => setcartItems(res.data))
    axios.get('https://6151b6e64a5f22001701d3a2.mockapi.io/favorite')
      .then(res => setfavorites(res.data))
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://6151b6e64a5f22001701d3a2.mockapi.io/cart', obj);
    setcartItems(prev => [...prev, obj]);
  }
  const onRemoveToCart = (id) => {
    axios.delete(`https://6151b6e64a5f22001701d3a2.mockapi.io/cart/${id}`);
    setcartItems(prev => prev.filter(item => item.id !== id));
  }


  const onAddToFavoreti = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://6151b6e64a5f22001701d3a2.mockapi.io/favorite/${obj.id}`);
      } else {
        const { data } = await axios.post('https://6151b6e64a5f22001701d3a2.mockapi.io/favorite', obj);
        setfavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить(')
    }

  }



  const onCahngeSearchValue = (e) => setSearchValue(e.target.value);


  return (

    <div className="wrapper">
      {
        cartOppend && <Drawer
          items={cartItems}
          onClickCloseCart={() => { setcartOppend(false) }}
          onClickDeleteCart={(id) => { onRemoveToCart(id) }}
        />
      }

      <Header onClickCart={() => { setcartOppend(true) }} />
      <Routes>
        <Route path="/favorite" element={
          <Favorite
            favorites={favorites}
            onAddToCart={onAddToCart}
            onAddToFavoreti={onAddToFavoreti}
          />

        } />
        <Route path="/" element={
          <Home
            carts={carts}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onCahngeSearchValue={onCahngeSearchValue}
            onAddToCart={onAddToCart}
            onAddToFavoreti={onAddToFavoreti}
          />

        } />
      </Routes>

    </div>

  );
}
/*           <section className='content'>
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
                        onPlus={() => { onAddToCart(cart) }}
                        onClickFavorite={(cart) => { onAddToFavoreti(cart) }}
                      />
                    )
                  })
              }
            </div>
          </section> */
export default App;
