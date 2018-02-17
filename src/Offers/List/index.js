import React from 'react';
import styled from 'styled-components';
import offersList from './offersList';
import Offer from './Offer';

const List = styled.div`
  margin-bottom: 32px;
`;

export default () => {
  return (
    <List>
      <div className="row between-md">
        {offersList.map(offer => {
          return (
            <div className="col-xs-12 col-md-4">
              <Offer
                title={offer.title}
                img={offer.img}
                logo={offer.logo}
                desc={offer.desc}
                price={offer.price}
                left={offer.left}
              />
            </div>
          );
        })}
      </div>
    </List>
  );
};
