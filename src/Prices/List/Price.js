import React from 'react';
import styled from 'styled-components';
import Location from './Location';
import Purpose from './Purpose';

const Price = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1.7px dashed #afbec6;
  padding-bottom: 8px;
  margin-bottom: 24px;

  :last-of-type {
    margin-bottom: 0;
    border: none;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    border: none;
    position: relative;
    border-right: 1px dashed #afbec6;
    width: 33.33%;
    padding: 0 15px;
  }

  @media (min-width: 1200px) {
    padding: 0 34px;
  }
`;

const PurposeList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default props => {
  const { flag, title, country, info } = props;

  return (
    <Price>
      <Location flag={flag} title={title} country={country} />
      <PurposeList>
        {info.map(infoItem => {
          return (
            <Purpose
              destination={infoItem.destination}
              price={infoItem.price}
            />
          );
        })}
      </PurposeList>
    </Price>
  );
};
