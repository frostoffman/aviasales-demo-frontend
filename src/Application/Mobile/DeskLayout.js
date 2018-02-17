import React from 'react';
import styled from 'styled-components';
import Platforms from './Platforms';

const Apps = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 768px) {
    margin-bottom: 51px;
  }
`;

const Link = styled.a`
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  display: none;
  text-decoration: none;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Picture = styled.img`
  margin-right: 8px;
`;

export default () => {
  return (
    <Apps>
      {Platforms.map(platform => {
        return (
          <Link href="">
            <Picture src={platform.pic} />
            {platform.link}
          </Link>
        );
      })}
    </Apps>
  );
};
