import React from 'react';
import styled from 'styled-components';
import List from './List';

const Offers = styled.section`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 24px;
  padding-top: 16px;

  @media (min-width: 768px) {
    padding-top: 24px;
    margin-bottom: 20px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  align-items: center;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Link = styled.a`
  color: #fff;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const AveragePrice = styled.div``;

export default () => {
  return (
    <Offers>
      <div className="container">
        <Title>Спецпредложения на авиабилеты</Title>
        <List />
        <Information>
          <Link href="#">Смотреть все спецпредложения</Link>
          <AveragePrice>* средняя цена по направлению</AveragePrice>
        </Information>
      </div>
    </Offers>
  );
};
