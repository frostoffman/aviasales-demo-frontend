import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';

const Follow = styled.section`
  background: #ffffff;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Content = styled.div`
  padding: 25px 0 60px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 0 24px 0;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  color: #5c5c5c;
  margin-bottom: 4px;
`;

const Description = styled.p`
  line-height: 22px;
  font-size: 16px;
  color: #5c5c5c;
`;

export default () => {
  return (
    <Follow>
      <div className="container">
        <Content>
          <Information>
            <Title>Хотите знать всё о скидках на авиабилеты?</Title>
            <Description>
              Вы можете подписаться на нашу рассылку<br /> через соцсети или по
              электронной почте.
            </Description>
          </Information>
          <Socials />
        </Content>
      </div>
    </Follow>
  );
};
