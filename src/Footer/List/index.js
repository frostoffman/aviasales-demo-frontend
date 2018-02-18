import React from 'react';
import styled from 'styled-components';
import footerList from './footerList';

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid #e0e6e8;
  margin-bottom: 24px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 31px;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 16.66%;
  }
`;

const Title = styled.h4`
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const Link = styled.a`
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin-bottom: 12px;
  text-decoration: none;

  :last-of-type {
    margin-bottom: 16px;
  }
`;

const LinkAll = styled.a`
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  text-decoration: none;
`;

export default () => {
  return (
    <List>
      {footerList.map(footerItem => {
        return (
          <ListItem>
            <Title>{footerItem.title}</Title>
            {footerItem.links.map(link => {
              return <Link href="#">{link}</Link>;
            })}
            <LinkAll href="#">{footerItem.all}</LinkAll>
          </ListItem>
        );
      })}
    </List>
  );
};
