import React from 'react';
import styled from 'styled-components';
import calendar from './calendar.svg';

const Info = styled.div`
  padding-top: 40px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
  margin: 0 16px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

export default () => {
  return (
    <Info>
      <Logo src={calendar} />
      <Title>Лучшие цены на авиабилеты за последний месяц</Title>
    </Info>
  );
};
