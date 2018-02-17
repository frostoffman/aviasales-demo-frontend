import React from 'react';
import styled from 'styled-components';
import List from './List';
import Socials from './Socials';
import Download from './Download';

const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    align-items: flex-end;
  }
`;

const Description = styled.p`
  display: flex;
  margin-bottom: 16px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #5b5b5c;
  line-height: 16px;
  font-size: 12px;
`;

const Copyright = styled.div`
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
`;

export default () => {
  return (
    <Info>
      <Wrap>
        <List />
        <Socials />
        <Description>
          <Link href="#">Поиск и бронирование отелей</Link>
        </Description>
      </Wrap>
      <Content>
        <Download />
        <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
      </Content>
    </Info>
  );
};
