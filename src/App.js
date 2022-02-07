import logoSvg from './image/logo.svg'
import cartSvg from './image/cart.svg'
import userSvg from './image/user.svg'
import heartSvg from './image/heart.svg'



function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo">
          <img src={logoSvg} alt="" />
          <div className="logo__text">
            <h3>REACT SNEAKERS</h3>
            <span>Магазин лучших кроссовок</span>
          </div>
        </div>

        <ul className='headerRight'>
          <li>
            <img src={cartSvg} alt="cart icon" />
            <span>
              1205 руб.
            </span>
          </li>
          <li>
            <img src={heartSvg} alt="user icon" />
          </li>
          <li>
            <img src={userSvg} alt="user icon" />
          </li>
        </ul>
      </header>

      <section className='content'>
        <h1>Все кроссовки</h1>
        <div className='card'>

          <div className="card__item">
            <div className="card__item-top">
              <img src="/image/card/card-1.png" alt="" />
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

          <div className="card__item">
            <div className="card__item-top">
              <img src="/image/card/card-2.png" alt="" />
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


          <div className="card__item">
            <div className="card__item-top">
              <img src="/image/card/card-3.png" alt="" />
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


          <div className="card__item">
            <div className="card__item-top">
              <img src="/image/card/card-5.png" alt="" />
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
        </div>
      </section>
    </div>
  );
}

export default App;
