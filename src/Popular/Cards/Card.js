import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  margin-bottom: 15px;
  text-decoration: none;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 31px;
  }
`;

const Picture = styled.img`
  height: 176px;
  max-width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    :first-of-type {
      flex-direction: row;
      align-items: center;
    }
  }

  :last-of-type {
    align-items: flex-end;
  }
`;

const Flag = styled.img`
  display: none;
  width: 30px;
  height: 30px;
  margin-right: 18px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const City = styled.div`
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  margin-bottom: 2px;
  color: #5b5b5c;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 768px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Country = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
`;

const Price = styled.div`
  font-size: 14px;
  text-align: right;
  color: #00bae8;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Date = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

export default props => {
  return (
    <Card href="#">
      <Picture src={props.img} />
      <Info>
        <Column>
          <Flag src={props.flag} />
          <Content>
            <City>{props.city}</City>
            <Country>{props.country}</Country>
          </Content>
        </Column>
        <Column>
          <Price>{props.price}</Price>
          <Date>{props.date}</Date>
        </Column>
      </Info>
    </Card>
  );
};
