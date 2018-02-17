import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import List from './List';

const Prices = styled.section`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

const Description = styled.p`
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 24px;
`;

const Disclamer = styled.div`
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export default () => {
  return (
    <Prices>
      <Info />
      <div className="container">
        <List />
        <Description>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </Description>
        <Disclamer>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </Disclamer>
      </div>
    </Prices>
  );
};
