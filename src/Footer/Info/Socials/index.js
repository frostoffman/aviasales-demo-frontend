import React from 'react';
import styled from 'styled-components';
import socialsList from './socialsList';

const Socials = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 12px;
`;

const Social = styled.li`
  width: 33.333%;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    width: 15%;
  }
`;

const Link = styled.a`
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  text-decoration: none;
`;

const Picture = styled.img`
  margin-right: 4px;
`;

export default () => {
  return (
    <Socials>
      {socialsList.map(item => {
        return (
          <Social>
            <Picture src={item.icon} alt={item.icon} />
            <Link href="">{item.title}</Link>
          </Social>
        );
      })}
    </Socials>
  );
};
