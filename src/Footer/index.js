import React from 'react';
import styled from 'styled-components';
import List from './List';
import Info from './Info';

const Footer = styled.section`
  background-color: #fff;
`;

const Content = styled.div`
  padding: 32px 0 24px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px 0;
  }
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <Content>
          <List />
          <Info />
        </Content>
      </div>
    </Footer>
  );
};
