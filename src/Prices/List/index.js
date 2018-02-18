import React from 'react';
import styled from 'styled-components';
import Price from './Price';
import pricesList from './pricesList';

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;
  }
`;

export default () => {
  return (
    <List>
      {pricesList.map(priceItem => {
        return (
          <Price
            flag={priceItem.flag}
            title={priceItem.title}
            country={priceItem.country}
            info={priceItem.info}
          />
        );
      })}
    </List>
  );
};
