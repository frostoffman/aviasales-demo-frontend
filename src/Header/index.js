import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Form from './Form';
import aero from './aero.svg';

const Container = styled.section`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Link = styled.a`
  position: absolute;
  top: 12px;
  left: 8px;
  display: flex;
  text-decoration: none;

  @media (min-width: 1024px) {
    left: 98px;
  }
`;

const DeskTitle = styled.h3`
  line-height: 25px;
  font-size: 20px;
  font-weight: 200;
  color: #ffffff;
  margin-left: 12px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 6px;
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-weight: bold;
  display: none;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Button = styled.button`
  align-items: center;
  cursor: pointer;
  border: none;
  background: #ff9241;
  border-radius: 4px;
  padding: 15px 45px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const Text = styled.span`
  font-weight: 900;
  font-size: 1.375rem;
  color: #ffffff;
  margin-right: 24px;
`;

export default () => {
  return (
    <Container>
      <Link href="">
        <img src={logo} alt="logo" />
        <DeskTitle>aviasales</DeskTitle>
      </Link>
      <div className="container">
        <Content>
          <Title>Поиск дешевых авиабилетов</Title>
          <Description>Лучший способ купить авиабилеты дешево</Description>
          <Form />
          <Button>
            <Text>Найти билеты</Text>
            <img src={aero} alt="Найти билеты" />
          </Button>
        </Content>
      </div>
    </Container>
  );
};
