import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  color: #4a4a4a;
  display: flex;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: #4a4a4a;
`;

const Picture = styled.img`
  margin-right: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  line-height: 20px;
  font-size: 14px;
  color: #00ace2;
  margin-left: 5px;
`;

export default props => {
  return (
    <Article>
      <Title>
        <Picture src={props.pic} alt="pic" /> {props.title}
      </Title>
      <Description>
        {props.text}
        <Link href="#">Подробнее</Link>
      </Description>
    </Article>
  );
};
