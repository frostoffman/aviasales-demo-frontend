import React from 'react';
import styled from 'styled-components';
import compas from './compas.svg';
import edit from './edit.svg';

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
  padding: 3px 15px;

  @media (min-width: 768px) {
    line-height: 36px;
    font-size: 24px;
    width: 60%;
  }
`;

const EditButton = styled.button`
  color: #00ace2;
  position: relative;
  border: none;
  background-color: inherit;
  cursor: pointer;
  margin-left: 7px;

  ::after {
    content: '';
    position: absolute;
    display: block;
    background: url(${edit}) no-repeat;
    width: 15px;
    height: 15px;
    top: 1px;
    right: -23px;
  }
`;

export default () => {
  return (
    <Info>
      <Logo src={compas} />
      <Title>
        Популярные направления перелетов из города
        <EditButton>Москва</EditButton>
      </Title>
    </Info>
  );
};
