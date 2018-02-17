import React from 'react';
import styled from 'styled-components';
import calendar from './calendar.svg';
import shape from './shape.svg';
import arrow from './arrow.svg';

const Depart = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  top: 18px;
  z-index: 1;
`;

const Text = styled.span`
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  margin-right: 10px;
`;

const DepartButton = styled.button`
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: none;
  background: url(${arrow}) no-repeat;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 48px;
  }
`;

const Field = styled.div`
  flex-basis: 100%;
  padding: 1px;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 24%;
  }
`;

const FieldSmall = styled.div`
  flex-basis: 50%;
  padding: 1px;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-basis: 25%;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 14%;
  }
`;

const Input = styled.input`
  color: inherit;
  padding: 18px 70px 18px 16px;
  width: 100%;
  flex-grow: 1;
  border: none;

  ::placeholder {
    color: #a0b0b9;
  }
`;

const Button = styled.button`
  padding: 18px 16px;
  border: none;
  font-size: 16px;
  color: #a0b0b9;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
  text-align: left;
`;

const TextColor = styled.span`
  color: #4a4a4a;
`;

const Calendar = styled.img`
  position: absolute;
  right: 16px;
  top: 18px;
`;

const Select = styled.img`
  position: absolute;
  right: 16px;
  top: 26px;
`;

export default () => {
  return (
    <Form>
      <Field>
        <Input defaultValue="Москва" placeholder="Город вылета" />
        <Depart>
          <Text>MOW</Text>
          <DepartButton />
        </Depart>
      </Field>
      <Field>
        <Input placeholder="Город прибытия" />
      </Field>
      <FieldSmall>
        <Button>Туда</Button>
        <Calendar src={calendar} />
      </FieldSmall>
      <FieldSmall>
        <Button>Обратно</Button>
        <Calendar src={calendar} />
      </FieldSmall>
      <Field>
        <Button defaultValue="Москва">
          <TextColor>1 пассажир,</TextColor> эконом
          <Select src={shape} />
        </Button>
      </Field>
    </Form>
  );
};
