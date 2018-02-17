import React from 'react';
import styled from 'styled-components';
import triangle from './triangle.svg';
import border from './border.png';
import List from './List';

const Slider = styled.section`
  background: #ffffff;
  display: none;
  border-bottom: 7px solid transparent;
  border-image: url(${border}) 10 repeat;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 32px 0;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
  margin-bottom: 24px;
`;

const Warehouse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Selector = styled.button`
  background: url(${triangle}) no-repeat;
  width: 18px;
  height: 32px;
  border: none;
  cursor: pointer;

  :last-of-type {
    transform: rotate(180deg);
  }
`;

export default () => {
  return (
    <Slider>
      <div className="container">
        <Content>
          <Title>
            Дешевые авиабилеты от крупнейших авиакомпаний и агентств
          </Title>
          <Warehouse>
            <Selector />
            <List />
            <Selector />
          </Warehouse>
        </Content>
      </div>
    </Slider>
  );
};
