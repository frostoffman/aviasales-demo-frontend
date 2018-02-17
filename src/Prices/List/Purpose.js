import React from 'react';
import styled from 'styled-components';

const Purpose = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  margin-bottom: 16px;
`;

const Destination = styled.div`
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  position: relative;

  @media (min-width: 1024px) {
    margin-right: 34px;
  }
`;

const Cost = styled.div`
  line-height: 20px;
  font-size: 16px;
  color: #00bae8;
`;

export default props => {
  return (
    <Purpose href="#">
      <Destination>{props.destination}</Destination>
      <Cost>{props.price}</Cost>
    </Purpose>
  );
};
