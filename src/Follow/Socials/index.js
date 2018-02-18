import React from 'react';
import styled from 'styled-components';
import socials from './socials';

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Links = styled.div`
  display: flex;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

const Link = styled.a`
  display: inline-flex;
  background: #9b9b9b;
  border: 1px solid #979797;
  border-radius: 50%;
  margin-right: 6px;
  text-decoration: none;
  padding: 8px;
  justify-content: center;
  cursor: pointer;

  :last-of-type {
    margin-right: 0;
  }
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  padding: 7px 13px;
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-right: none;
  border-radius: 2px;
  line-height: 20px;
  font-size: 16px;

  ::placeholder {
    color: #a0b0b9;
  }
`;

const Subscribe = styled.input`
  padding: 7px 20px;
  border: none;
  background: #ff8e41;
  border-radius: 2px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #a0b0b9;
  border-left: none;
  color: #ffffff;
`;

export default () => {
  return (
    <Socials>
      <Links>
        {socials.map(social => {
          return (
            <Link>
              <img src={social} alt="social" />
            </Link>
          );
        })}
      </Links>
      <Form>
        <Input type="email" placeholder="Ваш email" />
        <Subscribe type="submit" value="Подписаться" />
      </Form>
    </Socials>
  );
};
