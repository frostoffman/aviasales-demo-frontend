import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import globus from './globus.svg';
import palm from './palm.svg';
import basket from './basket.svg';
import culture from './culture.svg';
import glass from './glass.svg';
import pram from './pram.svg';

const Categories = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export default () => {
  return (
    <Categories>
      <Category icon={globus}>КУДА УГОДНО</Category>
      <Category icon={palm}>CОЛНЦЕ И МОРЕ</Category>
      <Category icon={basket}>ШОПИНГ, ГОРОД</Category>
      <Category icon={culture}>КУЛЬТУРА И ИСТОРИЯ</Category>
      <Category icon={glass}>НОЧНАЯ ЖИЗНЬ</Category>
      <Category icon={pram}>ОТДЫХ С ДЕТЬМИ</Category>
    </Categories>
  );
};
