import React from 'react';
import macbook from '../assets/images/macbook.svg';

export const Card = ({img, title, description, ctaLabel, ctaLink, price}) => {
    return (
      <div className='listOffers'>
        

        <div className='listOffers__content'>
        
          <div className='listOffers__content--image'>
            <img src={macbook} alt='macbook offer' />
          </div>

          <div className='listOffers__contentDesc'>
            <h2 className='listOffers__contentDesc--title'>
              {title}
            </h2>
            <div className='listOffers__contentDesc'>
              <span className='listOffers__contentDesc--price-on'>$ {price}</span>
              <span className='listOffers__contentDesc--price-none'>$25,99</span>
              <span className='listOffers__contentDesc--stars'>⭐️⭐️⭐️⭐️</span>
            </div>
            <p className='listOffers__contentDesc--description'>
              {description}
            </p>
          </div>

          <div className='listOffers__btn'>
            <button className='listOffers__btn--buy'>{ctaLabel}</button>
            <button className='listOffers__btn--cart'>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    );
}

