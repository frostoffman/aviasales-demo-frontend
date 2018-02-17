import React from 'react';
import styled from 'styled-components';
import Platforms from './Platforms';

const Apps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Link = styled.a`
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: none;
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
