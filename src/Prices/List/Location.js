import React from 'react';
import styled from 'styled-components';

const Location = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Flag = styled.img`
  margin-right: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  color: #5b5b5c;
`;

const Country = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
`;

export default props => {
  const { flag, title, country } = props;

  return (
    <Location>
      <Flag src={flag} />
      <Content>
        <Title>{title}</Title>
        <Country>{country}</Country>
      </Content>
    </Location>
  );
};
