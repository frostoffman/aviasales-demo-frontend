import React from 'react';
import styled from 'styled-components';
import slidesArray from './slidesArray';

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Slides = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Slide = styled.a`
  margin-right: 32px;
  margin-bottom: 32px;
  display: inline-flex;

  :last-of-type {
    margin-right: 0;
  }
`;

const Selectors = styled.div`
  display: flex;
  justify-content: center;
`;

const Selector = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #818181;
  border-radius: 50%;
  margin-right: 8px;
  padding: 4px;
  cursor: pointer;

  :last-of-type {
    margin-right: 0;
  }
`;

const ActiveSelector = Selector.extend`
  background: #818181;
`;

export default () => {
  return (
    <List>
      <Slides>
        {slidesArray.map(slide => {
          return (
            <Slide href="">
              <img src={slide} alt="slide" />
            </Slide>
          );
        })}
      </Slides>
      <Selectors>
        <ActiveSelector />
        <Selector />
        <Selector />
      </Selectors>
    </List>
  );
};
