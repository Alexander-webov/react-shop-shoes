import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Cart from './components/Cart/Cart';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';



function App() {
  const [cartOppend, setcartOppend] = useState(false);
  const [carts, setcarts] = useState([]);
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    axios.get('https://6151b6e64a5f22001701d3a2.mockapi.io/items')
      .then(res => setcarts(res.data))
  }, []);


  const onAddToCart = (obj) => {

    setcartItems(prev => [...prev, obj])
  }


  return (
    <div className="wrapper">
      {
        cartOppend && <Drawer
          items={cartItems}
          onClickCloseCart={() => { setcartOppend(false) }}
        />
      }

      <Header onClickCart={() => { setcartOppend(true) }} />

      <section className='content'>
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="content__top-search">
            <img src="/image/search.svg" alt="поиск" />
            <input type="text" placeholder='Поиск...' />
          </div>
        </div>


        <div className='card'>
          {
            carts.map(cart => {
              return (
                <Cart
                  key={cart.imgUrl}
                  name={cart.name}
                  price={cart.price}
                  imageUrl={cart.imgUrl}
                  onPlus={() => { onAddToCart(cart) }}
                  onClickFavorite={() => console.log(1)}
                />
              )
            })
          }
        </div>



      </section>
    </div>
  );
}

export default App;
