import React from 'react';
import cards from './cards';
import Card from './Card';

export default () => {
  return (
    <div className="row center-md">
      {cards.map(card => {
        return (
          <div className="col-xs-12 col-md-10 col-lg-5">
            <Card
              img={card.img}
              city={card.city}
              country={card.country}
              price={card.price}
              date={card.date}
              flag={card.flag}
            />
          </div>
        );
      })}
    </div>
  );
};
