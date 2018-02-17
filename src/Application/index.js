import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import Mobile from './Mobile';
import phone from './phone.png';
import DeskLayout from './Mobile/DeskLayout';

const Application = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  padding: 24px 12px 0 12px;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap-reverse;
  position: relative;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-left: 180px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 19px;

  @media (min-width: 768px) {
    line-height: 40px;
    text-align: left;
    font-size: 32px;
  }
`;

const PhonePicture = styled.img`
  margin-right: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    display: flex;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
  }
`;

export default () => {
  return (
    <Application>
      <div className="container">
        <Content>
          <PhonePicture src={phone} />
          <Mobile />
          <Information>
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating />
            <DeskLayout />
          </Information>
        </Content>
      </div>
    </Application>
  );
};
