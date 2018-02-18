import React from 'react';
import styled from 'styled-components';
import information from './information';

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.li`
  margin-bottom: 8px;
  margin-right: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  text-decoration: none;
`;

export default () => {
  return (
    <List>
      {information.map(link => {
        return (
          <Content>
            <Link href="">{link}</Link>
          </Content>
        );
      })}
    </List>
  );
};
