
import React from 'react';
import watch from '../assets/images/watch.svg';
import auric from '../assets/images/auric.svg';

export const Hero = () => {
    return (
        <section className="hero">
        <section className="hero__component">
            <div className="hero__component--description">
                <h2 className="hero__component--description-title">50% de descuento en Apple Watch</h2>
                <a className="hero__component--description-link" href="/">Comprar ahora</a>
            </div>
            <div className="hero__component--image">
                <img src={watch} alt="watch offer" />
            </div>
        </section>
        <section className="hero__component">
            <div className="hero__component--description">
                <h2 className="hero__component--description-title">50% de descuento en Apple Watch</h2>
                <a className="hero__component--description-link" href="/">Comprar ahora</a>
            </div>
            <div className="hero__component--image">
                <img src={auric} alt="headset offer" />
            </div>
        </section>
    </section>
    );
}


