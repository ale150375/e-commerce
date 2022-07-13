import React from 'react'
import { Card } from './Card'
import { data } from '../api/result-list'


export const ResultList = ({cards}) => {

  return (
    <div className="result-list">
      <h1 className='result-list__title'>Ofertas del día</h1>
      {
        data.map(card => {
          return <Card 
                    path={card.path}
                    key={card.id}
                    description={card.description}
                    img={card.img}
                    title={card.title}
                    ctaLabel={card.ctaLabel}
                    ctaLink={card.ctaLink}
                    price={card.price}
                    priceNone={card.priceNone}
                  />
        })
      }
    </div>
  )
}