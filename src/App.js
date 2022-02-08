import react from 'react';
import Cart from './components/Cart/Cart';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <section className='content'>
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="content__top-search">
            <img src="/image/search.svg" alt="поиск" />
            <input type="text" placeholder='Поиск...' />
          </div>
        </div>


        <div className='card'>
          <Cart />
        </div>



      </section>
    </div>
  );
}

export default App;
