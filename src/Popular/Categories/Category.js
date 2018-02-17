import React from 'react';
import styled from 'styled-components';

const Category = styled.button`
  display: flex;
  border: none;
  background-color: inherit;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  flex-basis: 33.333%;
  margin-bottom: 24px;
  outline: none;

  @media (min-width: 768px) {
    flex-basis: auto;
  }
`;

const Icon = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  border-radius: 50%;
  padding: 13px;
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
`;

const Description = styled.div`
  text-transform: uppercase;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #00ace2;
  width: 50%;
`;

export default props => {
  return (
    <Category href="#">
      <Icon>
        <img src={props.icon} alt="icon" />
      </Icon>
      <Description>{props.children}</Description>
    </Category>
  );
};
