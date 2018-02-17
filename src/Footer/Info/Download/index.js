import React from 'react';
import styled from 'styled-components';
import downloadList from './downloadList';

const Download = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: 10px;
  }
`;

const Link = styled.a`
  padding: 6px 12px;
  background: #1e292d;
  border-radius: 5px;
  display: flex;
  width: 125px;
  height: 42px;
  text-decoration: none;
  margin-bottom: 8px;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    margin-right: 10px;
    :last-of-type {
      margin-right: 0;
    }
  }
`;

const Picture = styled.img`
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  line-height: 15px;
  font-size: 9px;
  color: #ffffff;
`;

const Name = styled.div`
  font-weight: bold;
  line-height: 15px;
  font-size: 12px;
  color: #ffffff;
`;

export default () => {
  return (
    <Download>
      {downloadList.map(link => {
        return (
          <Link href="#">
            <Picture src={link.pic} />
            <Info>
              <Description>{link.desc}</Description>
              <Name>{link.name}</Name>
            </Info>
          </Link>
        );
      })}
    </Download>
  );
};
