import React from 'react';
import macbook from '../assets/images/macbook.svg';

export const ResultList = () => {
    return (
      <main className='listOffers'>
        <h1 className='listOffers__title'>Ofertas del día</h1>

        <div className='listOffers__content'>
        
          <div className='listOffers__content--image'>
            <img src={macbook} alt='macbook offer' />
          </div>

          <div className='listOffers__contentDesc'>
            <h2 className='listOffers__contentDesc--title'>
              Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB
              de RAM) - Gris espacial
            </h2>
            <div className='listOffers__contentDesc'>
              <span className='listOffers__contentDesc--price-on'>$25,00 </span>
              <span className='listOffers__contentDesc--price-none'>$25,99</span>
              <span className='listOffers__contentDesc--stars'>⭐️⭐️⭐️⭐️</span>
            </div>
            <p className='listOffers__contentDesc--description'>
              La notebook más delgada y ligera de Apple viene con los
              superpoderes de...
            </p>
          </div>

          <div className='listOffers__btn'>
            <button className='listOffers__btn--buy'>Comprar ahora</button>
            <button className='listOffers__btn--cart'>
              Agregar al carrito
            </button>
          </div>
        </div>
      </main>
    );
}

